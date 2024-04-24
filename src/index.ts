import express from "express";
import fs from "fs";
import readline from "readline";
import { connectDb } from "./utils/connectDb";
import equityModel from "./models/equity.model";
const app = express();

app.get("/", async (req, res) => {
  fs.readFile(
    "./data/20240129_Equity_Sample.txt",
    "utf-8",
    async (err, data) => {
      if (err) {
        console.log("err ------->", err);
        return res.status(400).json({
          success: false,
          message: "This is not going to help you !!",
        });
      }

      const dataLines = data.split("\r\n").map((line) => line.split("|"));

      const headers = dataLines[0];
      const finalData = [];

      for (let i = 1; i < dataLines.length; i++) {
        const line = dataLines[i];
        const obj = {};
        for (let i = 0; i < line.length; i++) {
          // @ts-ignore
          obj[headers[i]] = line[i];
        }
        finalData.push(obj);
      }

      const newData = await equityModel.insertMany(finalData);
      console.log("new Data", newData);

      res.status(200).json({
        success: true,
        message: "Data inserted Successfully ♪....♪...♫..♫.♫..♫..♪..♪...♪",
      });
    }
  );
});

app.get("/data", async (req, res) => {
  try {
    const data = await equityModel.find({}).countDocuments();

    res.status(200).json({
      success: true,
      message: "Data fechted successfully ♪..♫..♪..♫",
      data,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/insert-many", async (req, res) => {
  try {
    const filePath = "./data/20240129_Equity_Sample1.txt";
    const chunkSize = 2000; // Adjust the chunk size as needed

    // Function to process a chunk of lines
    async function processChunk(chunk) {
      const finalData = [];

      // Assuming the first line contains headers
      const headers = chunk[0].split("|");

      for (let i = 1; i < chunk.length; i++) {
        const line = chunk[i];
        const data = line.split("|");
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = data[j];
        }
        finalData.push(obj);
      }

      try {
        await equityModel.insertMany(finalData);
      } catch (error) {
        console.error("Error inserting data:", error);
        throw error;
      }
    }

    // Function to read file in chunks
    async function processFile() {
      let chunk = [];
      let lineCount = 0;

      const stream = fs.createReadStream(filePath, { encoding: "utf-8" });
      const rl = readline.createInterface({ input: stream });

      rl.on("line", (line) => {
        chunk.push(line);
        lineCount++;

        if (lineCount === chunkSize) {
          processChunk(chunk)
            .then(() => {
              chunk = [];
              lineCount = 0;
            })
            .catch((error) => {
              rl.close();
            });
        }
      });

      rl.on("close", () => {
        if (chunk.length > 0) {
          processChunk(chunk).catch((error) => {
            console.log("on close error ---->", error);
          });
        }
      });
    }

    // Call the function to start processing the file
    processFile()
      .then(() => {
        console.log("Data inserted successfully");
        // Send response or perform any other action
        res.status(200).json({
          success: true,
          message: "Data inserted successfully ♪..♫..♪..♫",
        });
      })
      .catch((error) => {
        console.error("Error processing file:", error);
        // Send error response or perform any other action
      });
  } catch (error) {
    console.log(error);
  }
});

app.get("/insert-many-2", async (req, res) => {
  try {
    const filePath = "./data/20240129_Equity_Sample1.txt";
    const chunkSize = 5000; // Increased chunk size
    const batchSize = 1000; // Batch size for bulk operations

    const stream = fs.createReadStream(filePath, { encoding: "utf-8" });
    const rl = readline.createInterface({ input: stream });

    let chunk = [];
    let lineCount = 0;

    rl.on("line", async (line) => {
      chunk.push(line);
      lineCount++;

      if (lineCount === chunkSize) {
        // Process chunk asynchronously
        await processChunk([...chunk]); // passing a copy of chunk
        chunk = [];
        lineCount = 0;
      }
    });

    rl.on("close", async () => {
      if (chunk.length > 0) {
        await processChunk([...chunk]); // passing a copy of chunk
      }
      console.log("Data insertion completed");
      res
        .status(200)
        .json({ success: true, message: "Data inserted successfully" });
    });

    //-----------------------------------------
    // async function processChunk(chunk) {
    //   const finalData = [];
    //   const headers = chunk.shift().split("|"); // Remove and process the headers

    //   for (let i = 0; i < chunk.length; i++) {
    //     const data = chunk[i].split("|");
    //     const obj = {};
    //     for (let j = 0; j < headers.length; j++) {
    //       obj[headers[j]] = data[j];
    //     }
    //     finalData.push(obj);
    //   }

    //   const bulkOperations = [];

    //   // Split finalData into batches for bulk operations
    //   for (let i = 0; i < finalData.length; i += batchSize) {
    //     const batch = finalData.slice(i, i + batchSize);
    //     bulkOperations.push({
    //       insertMany: { documents: batch },
    //     });
    //   }

    //   // Execute bulk write operations
    //   await Promise.all(
    //     bulkOperations.map(async (operation) => {
    //       try {
    //         const result = await equityModel.insertMany([operation]);
    //         console.log(`Bulk write result: ${result}`);
    //       } catch (error) {
    //         console.error("Error in bulk write:", error);
    //       }
    //     })
    //   );
    // }

    async function processChunk(chunk) {
      const finalData = [];
      const headers = chunk.shift().split("|"); // Remove and process the headers

      for (let i = 0; i < chunk.length; i++) {
        const data = chunk[i].split("|");
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = data[j];
        }
        finalData.push(obj);
      }

      // Execute bulk write operations
      try {
        const result = await equityModel.insertMany(finalData);
        console.log(`Bulk write result: ${result}`);
      } catch (error) {
        console.error("Error in bulk write:", error);
      }
    }
    //-----------------------------------------
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "An error occurred" });
  }
});

app.listen(3001, () => {
  console.log(`server is running at port : 3001`);
  connectDb("mongodb://127.0.0.1:27017/proptechProData");
});

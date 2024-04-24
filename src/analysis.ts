const headersStr =
  "Fips|PropertyID|APN|APNSeqNbr|OldAPN|OldApnIndicator|TaxAccountNumber|SitusFullStreetAddress|SitusHouseNbr|SitusHouseNbrSuffix|SitusDirectionLeft|SitusStreet|SitusMode|SitusDirectionRight|SitusUnitType|SitusUnitNbr|SitusCity|SitusState|SitusZIP5|SitusZIP4|SitusCarrierCode|SitusLatitude|SitusLongitude|SitusGeoStatusCode|PropertyClassID|LandUseCode|Owner1CorpInd|Owner1LastName|Owner1FirstName|Owner1MiddleName|Owner1Suffix|Owner2CorpInd|Owner2LastName|Owner2FirstName|Owner2MiddleName|Owner2Suffix|OwnerNAME1FULL|OwnerNAME2FULL|OwnerOccupied|MailingFullStreetAddress|MailingHouseNbr|MailingHouseNbrSuffix|MailingDirectionLeft|MailingStreet|MailingMode|MailingDirectionRight|MailingUnitType|MailingUnitNbr|MailingCity|MailingState|MailingZIP5|MailingZIP4|MailingCarrierCode|MailingOptOut|MailingCOName|MailingForeignAddressInd|TotalOpenLienNbr|TotalOpenLienAmt|CLTV|CLBTV|FATimestamp|FARecordType";

const dataLine1Str = `06037|13074837|4305-028-022|1||||9132 CRESTA DR|9132|||CRESTA|DR||||LOS ANGELES|CA|90035|4117|C061|34.046075|-118.389562|B|R|1001|True|||||True|||||FREEMAN NANCY F TR|NANCY F FREEMAN TRUST|Y|9132 CRESTA DR|9132|||CRESTA|DR||||LOS ANGELES|CA|90035|4117|C061||||1|404500|13.78|10.20|20240228|C
  06037|12575147|5219-001-001|1||||5165 OAKLAND ST|5165|||OAKLAND|ST||||LOS ANGELES|CA|90032|2333|C054|34.088654|-118.169401|B|R|1103||SOTO|ALFONSO|A|||SOTO|CARMEN|||SOTO ALFONSO A|SOTO CARMEN||248 W GLEASON ST|248||W|GLEASON|ST||||MONTEREY PARK|CA|91754|7108|C014||||2|631400|54.57|46.41|20230808|C
  06037|13700004|7275-012-005|1||||1604 E APPLETON ST|1604||E|APPLETON|ST||||LONG BEACH|CA|90802|4022|C008|33.768267|-118.172106|B|R|1103|True|||||True|||||LAIO FAMILY TRUST|LAIO ROBERT P & SUSAN R TRS||228 HARVARD LN|228|||HARVARD|LN||||SEAL BEACH|CA|90740|2511|C023||||2|395000|34.67|24.94|20240118|C
  06037|12198421|2324-007-009|1||||7040 COLDWATER CANYON AVE|7040|||COLDWATER CANYON|AVE||||NORTH HOLLYWOOD|CA|91605|4974|C008|34.198645|-118.41346|B|R|1001||DIAZ|MARIO|H|||DIAZ|ESPERANZA|||DIAZ MARIO H|DIAZ ESPERANZA|Y|7040 COLDWATER CANYON AVE|7040|||COLDWATER CANYON|AVE||||NORTH HOLLYWOOD|CA|91605|4974|C008||||1|68000|9.04|8.40|20231113|C`;

// const headers = headersStr.split("|");
// const dataLines = dataLine1Str.split("\n").map((line) => line.split("|"));
// // console.log("result ---------------->", headers.length);
// // console.log("dataLine1 ---------------->", dataLines);

// const finalData = [];

// // dataLines.forEach((line) => {
// //   const obj = {};
// //   const result = line.map((item, index) => {
// //     // @ts-ignore
// //     obj[headers[index]] = item;
// //     return obj;
// //   });
// //   finalData.push(result);
// //   console.log("line ----------->", result);
// // });

// dataLines.forEach((line) => {
//   const obj = {};
//   for (let i = 0; i < line.length; i++) {
//     // @ts-ignore
//     obj[headers[i]] = line[i];
//   }
//   finalData.push(obj);
// });

// console.log("data --->", finalData);

const finalStr = `Fips|PropertyID|APN|APNSeqNbr|OldAPN|OldApnIndicator|TaxAccountNumber|SitusFullStreetAddress|SitusHouseNbr|SitusHouseNbrSuffix|SitusDirectionLeft|SitusStreet|SitusMode|SitusDirectionRight|SitusUnitType|SitusUnitNbr|SitusCity|SitusState|SitusZIP5|SitusZIP4|SitusCarrierCode|SitusLatitude|SitusLongitude|SitusGeoStatusCode|PropertyClassID|LandUseCode|Owner1CorpInd|Owner1LastName|Owner1FirstName|Owner1MiddleName|Owner1Suffix|Owner2CorpInd|Owner2LastName|Owner2FirstName|Owner2MiddleName|Owner2Suffix|OwnerNAME1FULL|OwnerNAME2FULL|OwnerOccupied|MailingFullStreetAddress|MailingHouseNbr|MailingHouseNbrSuffix|MailingDirectionLeft|MailingStreet|MailingMode|MailingDirectionRight|MailingUnitType|MailingUnitNbr|MailingCity|MailingState|MailingZIP5|MailingZIP4|MailingCarrierCode|MailingOptOut|MailingCOName|MailingForeignAddressInd|TotalOpenLienNbr|TotalOpenLienAmt|CLTV|CLBTV|FATimestamp|FARecordType
06037|13074837|4305-028-022|1||||9132 CRESTA DR|9132|||CRESTA|DR||||LOS ANGELES|CA|90035|4117|C061|34.046075|-118.389562|B|R|1001|True|||||True|||||FREEMAN NANCY F TR|NANCY F FREEMAN TRUST|Y|9132 CRESTA DR|9132|||CRESTA|DR||||LOS ANGELES|CA|90035|4117|C061||||1|404500|13.78|10.20|20240228|C
06037|12575147|5219-001-001|1||||5165 OAKLAND ST|5165|||OAKLAND|ST||||LOS ANGELES|CA|90032|2333|C054|34.088654|-118.169401|B|R|1103||SOTO|ALFONSO|A|||SOTO|CARMEN|||SOTO ALFONSO A|SOTO CARMEN||248 W GLEASON ST|248||W|GLEASON|ST||||MONTEREY PARK|CA|91754|7108|C014||||2|631400|54.57|46.41|20230808|C
06037|13700004|7275-012-005|1||||1604 E APPLETON ST|1604||E|APPLETON|ST||||LONG BEACH|CA|90802|4022|C008|33.768267|-118.172106|B|R|1103|True|||||True|||||LAIO FAMILY TRUST|LAIO ROBERT P & SUSAN R TRS||228 HARVARD LN|228|||HARVARD|LN||||SEAL BEACH|CA|90740|2511|C023||||2|395000|34.67|24.94|20240118|C
06037|12198421|2324-007-009|1||||7040 COLDWATER CANYON AVE|7040|||COLDWATER CANYON|AVE||||NORTH HOLLYWOOD|CA|91605|4974|C008|34.198645|-118.41346|B|R|1001||DIAZ|MARIO|H|||DIAZ|ESPERANZA|||DIAZ MARIO H|DIAZ ESPERANZA|Y|7040 COLDWATER CANYON AVE|7040|||COLDWATER CANYON|AVE||||NORTH HOLLYWOOD|CA|91605|4974|C008||||1|68000|9.04|8.40|20231113|C`;

const dataLines = finalStr.split("\n").map((line) => line.split("|"));
console.log("dataLines ---------------->", dataLines);

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

console.log("data --->", finalData);

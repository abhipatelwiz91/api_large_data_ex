import { Schema, model } from "mongoose";

const equitySchema = new Schema({
  Fips: String,
  PropertyID: String,
  APN: String,
  APNSeqNbr: String,
  OldAPN: String,
  OldApnIndicator: String,
  TaxAccountNumber: String,
  SitusFullStreetAddress: String,
  SitusHouseNbr: String,
  SitusHouseNbrSuffix: String,
  SitusDirectionLeft: String,
  SitusStreet: String,
  SitusMode: String,
  SitusDirectionRight: String,
  SitusUnitType: String,
  SitusUnitNbr: String,
  SitusCity: String,
  SitusState: String,
  SitusZIP5: String,
  SitusZIP4: String,
  SitusCarrierCode: String,
  SitusLatitude: Number,
  SitusLongitude: Number,
  SitusGeoStatusCode: String,
  PropertyClassID: String,
  LandUseCode: String,
  Owner1CorpInd: String,
  Owner1LastName: String,
  Owner1FirstName: String,
  Owner1MiddleName: String,
  Owner1Suffix: String,
  Owner2CorpInd: String,
  Owner2LastName: String,
  Owner2FirstName: String,
  Owner2MiddleName: String,
  Owner2Suffix: String,
  OwnerNAME1FULL: String,
  OwnerNAME2FULL: String,
  OwnerOccupied: String,
  MailingFullStreetAddress: String,
  MailingHouseNbr: String,
  MailingHouseNbrSuffix: String,
  MailingDirectionLeft: String,
  MailingStreet: String,
  MailingMode: String,
  MailingDirectionRight: String,
  MailingUnitType: String,
  MailingUnitNbr: String,
  MailingCity: String,
  MailingState: String,
  MailingZIP5: String,
  MailingZIP4: String,
  MailingCarrierCode: String,
  MailingOptOut: String,
  MailingCOName: String,
  MailingForeignAddressInd: String,
  TotalOpenLienNbr: Number,
  TotalOpenLienAmt: Number,
  CLTV: Number,
  CLBTV: Number,
  FATimestamp: Date,
  FARecordType: String,
});

const equityModel = model("equity", equitySchema);

export default equityModel;

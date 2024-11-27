// lib/googleSheets.js
import { google } from "googleapis";
import path from "path";

const sheets = google.sheets("v4");

// Helper to authenticate with Google Sheets
const authenticate = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.resolve(process.env.GOOGLE_APPLICATION_CREDENTIALS),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return await auth.getClient();
};

// Fetch data from Google Sheets
export const getSheetData = async (range) => {
  const auth = await authenticate();
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.SHEET_ID,
    range,
  });
  return response.data.values;
};

// Append data to Google Sheets
export const appendSheetData = async (range, values) => {
  const auth = await authenticate();
  await sheets.spreadsheets.values.append({
    auth,
    spreadsheetId: process.env.SHEET_ID,
    range,
    valueInputOption: "RAW",
    resource: { values },
  });
};

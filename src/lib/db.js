import { google } from 'googleapis';

const sheets = google.sheets('v4');

export async function getSpends(auth) {
  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.SHEET_ID,
    range: 'Sheet1!A:C', // Adjust the range according to your sheet structure
  });
  return response.data.values;
}

export async function addSpend(auth, spend) {
  const response = await sheets.spreadsheets.values.append({
    auth,
    spreadsheetId: process.env.SHEET_ID,
    range: 'Sheet1!A:C', // Adjust the range according to your sheet structure
    valueInputOption: 'RAW',
    resource: {
      values: [[spend.description, spend.amount]], // Adjust according to your data structure
    },
  });
  return response.data;
}

export async function authenticate() {
  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return await auth.getClient();
}

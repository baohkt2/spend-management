// app/api/spends/route.js
// app/api/spends/route.js
import { getSheetData } from "@/lib/googleSheets";

export async function GET() {
  try {
    const data = await getSheetData("Spends!A:D");
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


import { appendSheetData } from "@/lib/googleSheets";

export async function POST(req) {
  try {
    const body = await req.json();
    const { user, category, amount, date } = body;

    // Validate input data
    if (!user || !category || !amount || !date) {
      return new Response("Invalid data", { status: 400 });
    }

    // Append data to Google Sheets
    await appendSheetData("Spends!A:D", [[user, category, amount, date]]);
    return new Response("Spend added successfully", { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

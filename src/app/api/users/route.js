// app/api/users/route.js
import { getSheetData, appendSheetData } from "@/lib/googleSheets";

const USERS_RANGE = "Users!A:C"; // Tạo sheet "Users" với các cột: ID, Name, Role

export async function GET() {
  try {
    const users = await getSheetData(USERS_RANGE);
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { id, name, role } = body;

    if (!id || !name || !role) {
      return new Response("Invalid data", { status: 400 });
    }

    await appendSheetData(USERS_RANGE, [[id, name, role]]);
    return new Response("User added successfully", { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

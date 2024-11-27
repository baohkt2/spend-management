import { NextResponse } from 'next/server';

export async function GET() {
  // Fetch spends from your database or external API
  const spends = [
    { id: 1, description: 'Groceries', amount: 50 },
    { id: 2, description: 'Utilities', amount: 100 },
  ];
  return NextResponse.json(spends);
}

export async function POST(request) {
  const data = await request.json();
  // Validate and save the spend to your database
  if (!data.description || !data.amount) {
    return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
  }
  // Simulate saving to a database
  return NextResponse.json({ message: 'Spend added successfully' }, { status: 201 });
}
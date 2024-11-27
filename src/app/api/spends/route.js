import { NextResponse } from 'next/server';
import { authenticate, getSpends, addSpend } from '../../../lib/db';

export async function GET() {
  try {
    const auth = await authenticate();
    const spends = await getSpends(auth);
    return NextResponse.json(spends);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch spends' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const auth = await authenticate();
    await addSpend(auth, data);
    return NextResponse.json({ message: 'Spend added successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add spend' }, { status: 500 });
  }
}
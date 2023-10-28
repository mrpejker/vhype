import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Claiming reward...");

    console.log("Claimed successfuly!");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { unitTitle, unitAbbreviation } = await request.json();
    const unit = { unitTitle, unitAbbreviation };
    console.log(unit);
    return NextResponse.json(unit);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to create category",
      },
      {
        status: 500,
      }
    );
  }
}

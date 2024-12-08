import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { brandTitle } = await request.json();
    const brand = { brandTitle };
    console.log(brand);
    return NextResponse.json(brand);
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

import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { unitTitle, unitAbbreviation } = await request.json();

    const unit = await db.unit.create({
      data: { unitName: unitTitle, title: unitAbbreviation },
    });
    return NextResponse.json(unit);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to create unit",
      },
      {
        status: 500,
      }
    );
  }
}
// get all latest Units

export async function GET() {
  try {
    const units = await db.unit.findMany({
      orderBy: {
        createdAt: "desc", // 'asc' for ascending, 'desc' for descending
      },
    });
    return NextResponse.json(units);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to fetch Unit",
      },
      {
        status: 500,
      }
    );
  }
}

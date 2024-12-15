import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { brandTitle } = await request.json();

    const brand = await db.brand.create({
      data: { brandTitle },
    });
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

// get all latest Brands
export async function GET() {
  try {
    const brands = await db.brand.findMany({
      orderBy: {
        createdAt: "desc", // 'asc' for ascending, 'desc' for descending
      },
    });
    return NextResponse.json(brands);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to fetch brands",
      },
      {
        status: 500,
      }
    );
  }
}

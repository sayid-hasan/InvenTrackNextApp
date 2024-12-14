import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { categoryTitle, categoryDescription } = await request.json();
    const category = await db.category.create({
      data: {
        categoryTitle,
        categoryDescription,
      },
    });
    // console.log(category);
    return NextResponse.json(category);
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

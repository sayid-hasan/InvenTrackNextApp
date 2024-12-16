import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { categoryTitle, categoryDescription } = await request.json();
    const category = await db.category.create({
      data: {
        title: categoryTitle,
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
// get all categies in descending order by creation time
export async function GET() {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        createdAt: "desc", // 'asc' for ascending, 'desc' for descending
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to fetch category",
      },
      {
        status: 500,
      }
    );
  }
}

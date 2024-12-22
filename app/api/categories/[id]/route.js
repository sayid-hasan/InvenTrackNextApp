import db from "@/lib/db";
import { NextResponse } from "next/server";

// Get brand details by ID
export async function GET(req, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is required" },
        { status: 400 }
      );
    }

    // Query the brand using Prisma
    const category = await db.category.findUnique({
      where: {
        id, // Prisma maps MongoDB's `_id` to `id`
      },
    });

    if (!category) {
      return NextResponse.json(
        { message: "category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(category);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      {
        error: error.message,
        message: "Failed to fetch category details",
      },
      {
        status: 500,
      }
    );
  }
}
export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const { categoryTitle, categoryDescription } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is required" },
        { status: 400 }
      );
    }

    // Query the brand using Prisma
    const category = await db.category.update({
      where: {
        id, // Prisma maps MongoDB's `_id` to `id`
      },
      data: {
        title: categoryTitle,
        categoryDescription,
      },
    });

    if (!category) {
      return NextResponse.json(
        { message: "Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        data: category,
        message: "updated successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      {
        error: error.message,
        message: "Failed to update category details",
      },
      {
        status: 500,
      }
    );
  }
}

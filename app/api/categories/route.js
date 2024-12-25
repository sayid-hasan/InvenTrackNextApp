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
    return NextResponse.json(
      {
        data: category,
        message: "created category successfully",
      },
      {
        status: 200,
      }
    );
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

// delete category
export async function DELETE(req) {
  try {
    const id = await req.nextUrl.searchParams.get("id");
    // console.log(id);

    // Validate the 'id' parameter
    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is required" },
        { status: 400 }
      );
    }

    // Perform the deletion from the database
    const deletedCategory = await db.category.delete({
      where: {
        id, // Prisma maps MongoDB's `_id` to `id`
      },
    });

    // If deletion was successful, return a success response
    return NextResponse.json(
      {
        message: "Category deleted successfully",
        data: deletedCategory,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      {
        error: error.message,
        message: "Failed to delete category details",
      },
      {
        status: 500,
      }
    );
  }
}

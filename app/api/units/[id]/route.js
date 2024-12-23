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
    const unit = await db.unit.findUnique({
      where: {
        id, // Prisma maps MongoDB's `_id` to `id`
      },
    });

    if (!unit) {
      return NextResponse.json({ message: "Unit not found" }, { status: 404 });
    }

    return NextResponse.json(unit);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      {
        error: error.message,
        message: "Failed to fetch unit details",
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
    const { unitTitle, unitAbbreviation } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is required" },
        { status: 400 }
      );
    }

    // Query the brand using Prisma
    const unit = await db.unit.update({
      where: {
        id, // Prisma maps MongoDB's `_id` to `id`
      },
      data: {
        unitName: unitTitle,
        title: unitAbbreviation,
      },
    });

    if (!unit) {
      return NextResponse.json({ message: "Unit not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        data: unit,
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
        message: "Failed to update unit details",
      },
      {
        status: 500,
      }
    );
  }
}

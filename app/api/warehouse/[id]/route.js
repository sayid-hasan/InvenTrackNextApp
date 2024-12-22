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
    const warehouse = await db.warehouse.findUnique({
      where: {
        id, // Prisma maps MongoDB's `_id` to `id`
      },
    });

    if (!warehouse) {
      return NextResponse.json(
        { message: "warehouse not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(warehouse);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      {
        error: error.message,
        message: "Failed to fetch warehouse details",
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
    const {
      warehouseTitle,
      warehouseLocation,
      warehouseType,
      warehouseDescription,
    } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is required" },
        { status: 400 }
      );
    }

    // Query the brand using Prisma
    const warehouse = await db.warehouse.update({
      where: {
        id, // Prisma maps MongoDB's `_id` to `id`
      },
      data: {
        title: warehouseTitle,
        warehouseLocation,
        warehouseType: warehouseType,
        warehouseDescription: warehouseDescription,
      },
    });

    if (!warehouse) {
      return NextResponse.json(
        { message: "Warehouse not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        data: warehouse,
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

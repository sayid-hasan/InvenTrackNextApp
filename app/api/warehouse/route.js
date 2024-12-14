import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      warehouseTitle,
      warehouseLocation,
      warehouseType,
      warehouseDescription,
    } = await request.json();

    const warehouse = await db.warehouse.create({
      data: {
        warehouseTitle,
        warehouseLocation,
        warehouseType: warehouseType || null,
        warehouseDescription: warehouseDescription || null,
      },
    });
    return NextResponse.json(warehouse);
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

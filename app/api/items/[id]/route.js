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
    const item = await db.item.findUnique({
      where: {
        id, // Prisma maps MongoDB's `_id` to `id`
      },
    });

    if (!item) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      {
        error: error.message,
        message: "Failed to fetch item details",
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
      ItemDimension,
      brandId,
      buyingPrice,
      categoryId,
      itemBarcode,
      itemDescription,
      itemName,
      itemNotes,
      itemSku,
      qty,
      reOrderPoint,
      sellingPrice,
      supplierId,
      unitId,
      warehouseId,
      weightGm,
      imageUrl,
      taxPercentage,
    } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is required" },
        { status: 400 }
      );
    }

    // Query the brand using Prisma
    const item = await db.item.update({
      where: {
        id, // Prisma maps MongoDB's `_id` to `id`
      },
      data: {
        itemDimension: ItemDimension,
        brandId,
        buyingPrice: parseFloat(buyingPrice),
        categoryId,
        itemBarcode: itemBarcode,
        itemDescription: itemDescription,
        itemName,
        itemNotes: itemNotes,
        itemSku,
        qty: parseInt(qty),
        reOrderPoint: parseInt(reOrderPoint),
        sellingPrice: parseFloat(sellingPrice),
        supplierId,
        unitId,
        warehouseId,
        weightGm: parseFloat(weightGm),
        imageUrl: imageUrl,
        taxPercentage: parseFloat(taxPercentage),
      },
    });

    if (!item) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        data: item,
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
        message: "Failed to update item details",
      },
      {
        status: 500,
      }
    );
  }
}

import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
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
    } = await request.json();

    const item = await db.item.create({
      data: {
        itemDimension: ItemDimension || null,
        brandId,
        buyingPrice: parseFloat(buyingPrice),
        categoryId,
        itemBarcode: itemBarcode || null,
        itemDescription: itemDescription || null,
        itemName,
        itemNotes: itemNotes || null,
        itemSku,
        qty: parseInt(qty),
        reOrderPoint: parseInt(reOrderPoint) || null,
        sellingPrice: parseFloat(sellingPrice),
        supplierId,
        unitId,
        warehouseId,
        weightGm: parseFloat(weightGm),
        imageUrl: imageUrl,
        taxPercentage: parseFloat(taxPercentage),
      },
    });
    return NextResponse.json(
      {
        data: item,
        message: "created item successfully",
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
        message: "Failed to create item",
      },
      {
        status: 500,
      }
    );
  }
}

// get all items
export async function GET() {
  try {
    const items = await db.item.findMany({
      orderBy: {
        createdAt: "desc", // 'asc' for ascending, 'desc' for descending
      },
      include: {
        category: true, // Include the related `category` field
        unit: true, // Include the related `unit` field
        brand: true, // Include the related `brand` field
        supplier: true, // Include the related `supplier` field
        warehouse: true, // Include the related `warehouse` field
      },
    });
    return NextResponse.json(items);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to fetch Items",
      },
      {
        status: 500,
      }
    );
  }
}

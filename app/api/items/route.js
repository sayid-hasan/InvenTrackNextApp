import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      ItemDimension,
      brandTitle,
      buyingPrice,
      categoryTitle,
      itemBarcode,
      itemDescription,
      itemName,
      itemNotes,
      itemSku,
      qty,
      reOrderPoint,
      sellingPrice,
      supplierName,
      unitAbbreviation,
      warehouseLocation,
      weightGm,
      imageUrl,
      taxPercentage,
    } = await request.json();

    const item = await db.item.create({
      data: {
        ItemDimension: ItemDimension || null,
        brandTitle,
        buyingPrice: parseFloat(buyingPrice),
        categoryTitle,
        itemBarcode: itemBarcode || null,
        itemDescription: itemDescription || null,
        itemName,
        itemNotes: itemNotes || null,
        itemSku,
        qty: parseInt(qty),
        reOrderPoint: parseInt(reOrderPoint) || null,
        sellingPrice: parseFloat(sellingPrice),
        supplierName,
        unitAbbreviation,
        warehouseLocation: warehouseLocation || null,
        weightGm: parseFloat(weightGm),
        imageUrl: [imageUrl],
        taxPercentage: parseFloat(taxPercentage),
      },
    });
    return NextResponse.json(item);
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

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
      unitTitle,
      warehouseLocation,
      weightGm,
      imageUrl,
      taxPercentage,
    } = await request.json();
    const itemData = {
      ItemDimension: ItemDimension || null,
      brandTitle,
      buyingPrice,
      categoryTitle,
      itemBarcode: itemBarcode || null,
      itemDescription,
      itemName,
      itemNotes: itemNotes || null,
      itemSku,
      qty,
      reOrderPoint: reOrderPoint || null,
      sellingPrice,
      supplierName,
      unitTitle,
      warehouseLocation,
      weightGm,
      imageUrl,
      taxPercentage,
    };
    console.log(itemData);
    return NextResponse.json(itemData);
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

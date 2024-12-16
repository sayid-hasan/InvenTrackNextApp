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

// fetch all sku  for select tag

export async function GET() {
  try {
    const items = await db.item.findMany({
      select: { itemSku: true, itemName: true }, // Only fetch SKU field
    });
    // Format the SKU to include the item name in the desired format
    const formattedItems = items.map((item) => ({
      skuFormatted: `${item.itemSku} (${item.itemName})`, // Format SKU as 'sku(itemName)'
      itemSku: item.itemSku, // If you need the raw SKU as well
      itemName: item.itemName, // If you need the raw name
    }));

    return NextResponse.json(formattedItems);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { message: "Failed to fetch SKUs" },
      { status: 500 }
    );
  }
}

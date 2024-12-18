// fetch all sku  for select tag

import db from "@/lib/db";
import { NextResponse } from "next/server";

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

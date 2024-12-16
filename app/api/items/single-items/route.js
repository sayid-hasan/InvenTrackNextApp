import { NextResponse } from "next/server";
import db from "@/lib/db";
// Fetch a single item by SKU
export async function GET(request) {
  try {
    // Extract SKU from query parameters
    const url = new URL(request.url);
    const sku = url.searchParams.get("sku");

    if (!sku) {
      return NextResponse.json({ message: "SKU is required" }, { status: 400 });
    }

    // Find item by SKU
    const item = await db.item.findUnique({
      where: { itemSku: sku },
    });

    if (!item) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { message: "Failed to fetch item" },
      { status: 500 }
    );
  }
}

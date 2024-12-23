import db from "@/lib/db";
import { NextResponse } from "next/server";

// Get adjustment details by ID
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
    const adjustment = await db.adjustment.findUnique({
      where: {
        id, // Prisma maps MongoDB's `_id` to `id`
      },
    });

    if (!adjustment) {
      return NextResponse.json(
        { message: "adjustment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(adjustment);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      {
        error: error.message,
        message: "Failed to fetch adjustment details",
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
      itemSku,
      adjustmentReason,
      updatedItemName,
      updatedBrandId,
      updatedBuyingPrice,
      updatedSellingPrice,
      updatedCategoryId,
      updatedQty,
      updatedReOrderPoint,
      updatedSupplierId,
      updatedUnitId,
      updatedWarehouseId,
      updatedTaxPercentage,
    } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is required" },
        { status: 400 }
      );
    }

    // Prepare the data object for updating the Item
    const updatedItemData = {};

    if (updatedItemName) updatedItemData.itemName = updatedItemName;

    if (updatedQty !== undefined) updatedItemData.qty = parseInt(updatedQty);

    if (updatedSellingPrice)
      updatedItemData.sellingPrice = parseFloat(updatedSellingPrice);
    if (updatedBuyingPrice)
      updatedItemData.buyingPrice = parseFloat(updatedBuyingPrice);
    // if (updatedSupplierId) updatedItemData.supplierId = updatedSupplierId;
    if (updatedReOrderPoint !== undefined)
      updatedItemData.reOrderPoint = parseFloat(updatedReOrderPoint);

    if (updatedTaxPercentage)
      updatedItemData.taxPercentage = parseFloat(updatedTaxPercentage);

    // if (updatedWarehouseId) updatedItemData.warehouseId = updatedWarehouseId;
    console.log("update adjustment data", updatedItemData);

    // Update the item in the database
    const updatedItem = await db.item.update({
      where: { itemSku }, // Assuming `itemSku` is the unique identifier
      data: {
        ...updatedItemData, // Updated fields
        brand: updatedBrandId ? { connect: { id: updatedBrandId } } : undefined,
        category: updatedCategoryId
          ? { connect: { id: updatedCategoryId } }
          : undefined,
        supplier: updatedSupplierId
          ? { connect: { id: updatedSupplierId } }
          : undefined,
        warehouse: updatedWarehouseId
          ? { connect: { id: updatedWarehouseId } }
          : undefined,
        unit: updatedUnitId ? { connect: { id: updatedUnitId } } : undefined,
      },
    });

    // Query the adjustment using Prisma
    const adjustment = await db.adjustment.update({
      where: {
        id, // Prisma maps MongoDB's `_id` to `id`
      },
      data: {
        adjustmentReason,
        updatedItemName,
        updatedBrandId,
        updatedBuyingPrice: parseFloat(updatedBuyingPrice),
        updatedSellingPrice: parseFloat(updatedSellingPrice),
        updatedCategoryId,
        updatedQty: parseFloat(updatedQty),
        updatedReOrderPoint: parseFloat(updatedReOrderPoint),
        updatedSupplierId,
        updatedUnitId,
        updatedWarehouseId,
        updatedTaxPercentage: parseFloat(updatedTaxPercentage),
      },
    });

    if (!adjustment) {
      return NextResponse.json(
        { message: "adjustment not found" },
        { status: 404 }
      );
    }
    if (!updatedItem) {
      return NextResponse.json(
        { message: "item to be updated not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        data: { updatedItem, adjustment },
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
        message: "Failed to update adjustment details",
      },
      {
        status: 500,
      }
    );
  }
}

import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      adjustmentReason,
      itemSku,
      updatedBarcode,
      updatedBrandId,
      updatedBuyingPrice,
      updatedCategoryId,
      updatedItemDescription,
      updatedItemDimension,
      updatedItemName,
      updatedItemNotes,

      updatedQty,
      updatedReOrderPoint,
      updatedSellingPrice,
      updatedSupplierId,

      updatedTaxPercentage,
      updatedUnitId,
      updatedWarehouseId,
      updatedImageUrl,
      updatedWeightGm,
    } = await request.json();

    // Prepare the data object for updating the Item
    const updatedItemData = {};

    if (updatedItemName) updatedItemData.itemName = updatedItemName;
    if (updatedItemDescription)
      updatedItemData.itemDescription = updatedItemDescription;
    // if (updatedCategoryId) updatedItemData.categoryId = updatedCategoryId;
    if (updatedBarcode) updatedItemData.itemBarcode = updatedBarcode;
    if (updatedQty !== undefined) updatedItemData.qty = parseInt(updatedQty);
    // if (updatedBrandId) updatedItemData.brandId = updatedBrandId;
    // if (updatedUnitId) updatedItemData.unitId = updatedUnitId;
    if (updatedSellingPrice)
      updatedItemData.sellingPrice = parseFloat(updatedSellingPrice);
    if (updatedBuyingPrice)
      updatedItemData.buyingPrice = parseFloat(updatedBuyingPrice);
    // if (updatedSupplierId) updatedItemData.supplierId = updatedSupplierId;
    if (updatedReOrderPoint !== undefined)
      updatedItemData.reOrderPoint = parseFloat(updatedReOrderPoint);
    if (updatedImageUrl) updatedItemData.imageUrl = updatedImageUrl;
    if (updatedWeightGm) updatedItemData.weightGm = parseFloat(updatedWeightGm);
    if (updatedItemDimension)
      updatedItemData.itemDimension = updatedItemDimension;
    if (updatedTaxPercentage)
      updatedItemData.taxPercentage = parseFloat(updatedTaxPercentage);
    if (updatedItemNotes) updatedItemData.itemNotes = updatedItemNotes;
    // if (updatedWarehouseId) updatedItemData.warehouseId = updatedWarehouseId;
    console.log("adjustment data", updatedItemData);

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

    const newAdjustment = await db.adjustment.create({
      data: {
        item: { connect: { id: updatedItem.id } },
        adjustmentReason,
        adjustmentDate: new Date(),
        referenceSku: itemSku || updatedItem.itemSku,
        updatedItemName: updatedItem.itemName,
        updatedItemDescription: updatedItem.itemDescription,
        updatedQty: updatedItem.qty,
        updatedBrandId: updatedItem.brandId,
        updatedCategoryId: updatedItem.categoryId,
        updatedItemBarcode: updatedItem.itemBarcode,
        updatedSellingPrice: updatedItem.sellingPrice,
        updatedBuyingPrice: updatedItem.buyingPrice,
        updatedSupplierId: updatedItem.supplierId,
        updatedReOrderPoint: updatedItem.reOrderPoint,
        updatedWeightGm: updatedItem.weightGm,
        updatedItemDimension: updatedItem.itemDimension,
        updatedTaxPercentage: updatedItem.taxPercentage,
        updatedItemNotes: updatedItem.itemNotes,
        updatedWarehouseId: updatedItem.warehouseId,
      },
    });

    return NextResponse.json({ updatedItem, newAdjustment }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to update item",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    const adjustments = await db.adjustment.findMany({
      orderBy: {
        createdAt: "desc", // 'asc' for ascending, 'desc' for descending
      },
    });
    return NextResponse.json(adjustments);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to fetch Adjustments Details",
      },
      {
        status: 500,
      }
    );
  }
}

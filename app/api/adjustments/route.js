import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      updatedSku,
      updatedBarcode,
      updatedQty,
      updatedUnit,
      updatedBrandTitle,
      updatedBuyingPrice,
      UpdatedSellingPrice,
      updatedSupplierName,
      updatedReOrderPoint,
      updatedWarehouseLocation,
      updatedWeightGm,
      updatedItemDimension,
      updatedItemDescription,
      updatedItemNotes,
      updatedTaxPercentage,
    } = await request.json();
    const itemData = {
      updatedSku: updatedSku || null,
      updatedBarcode: updatedBarcode || null,
      updatedQty: updatedQty || null,
      updatedUnit: updatedUnit || null,
      updatedBrandTitle: updatedBrandTitle || null,
      updatedBuyingPrice: updatedBuyingPrice || null,
      UpdatedSellingPrice: UpdatedSellingPrice || null,
      updatedSupplierName: updatedSupplierName || null,
      updatedReOrderPoint: updatedReOrderPoint || null,
      updatedWarehouseLocation: updatedWarehouseLocation || null,
      updatedWeightGm: updatedWeightGm || null,
      updatedItemDimension: updatedItemDimension || null,
      updatedItemDescription: updatedItemDescription || null,
      updatedItemNotes: updatedItemNotes || null,
      updatedTaxPercentage: updatedTaxPercentage || null,
    };
    console.log(itemData);
    return NextResponse.json(itemData);
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

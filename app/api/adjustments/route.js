import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // const {
    //   referenceSku,
    //   updatedBarcode,
    //   updatedQty,
    //   updatedBrandId,
    //   updatedCategoryId,
    //   updatedSupplierId,
    //   updatedUnitId,
    //   updatedBuyingPrice,
    //   UpdatedSellingPrice,
    //   updatedSupplierName,
    //   updatedReOrderPoint,
    //   updatedWarehouseLocation,
    //   updatedWeightGm,
    //   updatedItemDimension,
    //   updatedItemDescription,
    //   updatedItemNotes,
    //   updatedTaxPercentage,
    //   adjustmentReason,
    //   adjustmentDate,
    // } = await request.json();
    const itemData = await request.json();
    // const itemData = {
    //   referenceSku: referenceSku || null,
    //   updatedBarcode: updatedBarcode || null,
    //   updatedQty: parseInt(updatedQty) || null,
    //   updatedBrandId: updatedBrandId || null,
    //   updatedCategoryId: updatedCategoryId || null,
    //   updatedSupplierId: updatedSupplierId || null,
    //   updatedUnitId: updatedUnitId || null,
    //   updatedBuyingPrice: parseFloat(updatedBuyingPrice) || null,
    //   UpdatedSellingPrice: parseFloat(UpdatedSellingPrice) || null,
    //   updatedSupplierName: updatedSupplierName || null,
    //   updatedReOrderPoint: updatedReOrderPoint || null,
    //   updatedWarehouseLocation: updatedWarehouseLocation || null,
    //   updatedWeightGm: parseFloat(updatedWeightGm) || null,
    //   updatedItemDimension: updatedItemDimension || null,
    //   updatedItemDescription: updatedItemDescription || null,
    //   updatedItemNotes: updatedItemNotes || null,
    //   updatedTaxPercentage: parseFloat(updatedTaxPercentage) || null,
    //   adjustmentReason,
    //   adjustmentDate,
    // };
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

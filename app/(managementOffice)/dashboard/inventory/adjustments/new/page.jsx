import AdjustmentForm from "@/components/dashboard/AdjustmentForm/AdjustmentForm";
import FormHeader from "@/components/dashboard/FormHeader/FormHeader";
import { getLatestData } from "@/lib/getLatestData";

import React from "react";

const NewAdjustment = async ({ initialData = {}, isUpdate = false }) => {
  const categoryData = getLatestData("categories");
  const brandData = getLatestData("brands");

  const supplierData = getLatestData("supplier");
  const warehouseData = getLatestData("warehouse");
  const skusData = getLatestData("items/get-skus");

  // Wait for all data
  const [categories, brands, suppliers, warehouses, skus] = await Promise.all([
    categoryData,
    brandData,

    supplierData,
    warehouseData,
    skusData,
  ]);

  return (
    <div>
      {/* header */}
      <FormHeader
        link={"/dashboard/inventory/adjustments"}
        title={isUpdate ? "Update Adjustment" : "New Adjustment"}
      />

      {/* form */}
      <AdjustmentForm
        categoryOptions={categories}
        brandOptions={brands}
        warehouseOptions={warehouses}
        supplierOptions={suppliers}
        skus={skus}
        initialData={initialData}
        isUpdate={isUpdate}
      />
      {/* footer */}
    </div>
  );
};

export default NewAdjustment;

import AdjustmentForm from "@/components/dashboard/AdjustmentForm/AdjustmentForm";
import FormHeader from "@/components/dashboard/FormHeader/FormHeader";
import { getLatestData } from "@/lib/getLatestData";

import React from "react";

const NewAdjustment = async () => {
  const categoryData = getLatestData("categories");
  const brandData = getLatestData("brands");
  const unitData = getLatestData("units");
  const supplierData = getLatestData("supplier");
  const warehouseData = getLatestData("warehouse");
  const skusData = getLatestData("items/get-skus");

  // Wait for all data
  const [categories, brands, units, suppliers, warehouses, skus] =
    await Promise.all([
      categoryData,
      brandData,
      unitData,
      supplierData,
      warehouseData,
      skusData,
    ]);

  return (
    <div>
      {/* header */}
      <FormHeader link={"/dashboard/inventory"} title={"Update stored Item"} />

      {/* form */}
      <AdjustmentForm
        categoryOptions={units}
        brandOptions={categories}
        unitOptions={brands}
        warehouseOptions={suppliers}
        supplierOptions={warehouses}
        skus={skus}
      />
      {/* footer */}
    </div>
  );
};

export default NewAdjustment;

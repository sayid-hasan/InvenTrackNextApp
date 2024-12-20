import FormHeader from "@/components/dashboard/FormHeader/FormHeader";

import React from "react";

import CreateItemForm from "@/components/dashboard/CreateItemForm/CreateItem";
import { getLatestData } from "@/lib/getLatestData";

const NewItem = async () => {
  const categoryData = getLatestData("categories");
  const brandData = getLatestData("brands");
  const unitData = getLatestData("units");
  const supplierData = getLatestData("supplier");
  const warehouseData = getLatestData("warehouse");

  // Wait for all data
  const [categories, brands, units, suppliers, warehouses] = await Promise.all([
    categoryData,
    brandData,
    unitData,
    supplierData,
    warehouseData,
  ]);

  return (
    <div>
      {/* header */}
      <FormHeader link={"/dashboard/inventory/items"} title={"New Item"} />

      {/* form */}
      <CreateItemForm
        units={units}
        categories={categories}
        brands={brands}
        suppliers={suppliers}
        warehouses={warehouses}
      />
      {/* footer */}
    </div>
  );
};

export default NewItem;

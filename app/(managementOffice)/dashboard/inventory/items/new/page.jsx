import FormHeader from "@/components/dashboard/FormHeader/FormHeader";

import React from "react";

import CreateItemForm from "@/components/dashboard/CreateItemForm/CreateItem";
import { getLatestData } from "@/lib/getLatestData";

const NewItem = async () => {
  const categories = await getLatestData("categories");

  const brands = await getLatestData("brands");
  const units = await getLatestData("units");
  const suppliers = await getLatestData("supplier");

  return (
    <div>
      {/* header */}
      <FormHeader link={"/dashboard/inventory"} title={"New Item"} />

      {/* form */}
      <CreateItemForm
        units={units}
        categories={categories}
        brands={brands}
        suppliers={suppliers}
      />
      {/* footer */}
    </div>
  );
};

export default NewItem;

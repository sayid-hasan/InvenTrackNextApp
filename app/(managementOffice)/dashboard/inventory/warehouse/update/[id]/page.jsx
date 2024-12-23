import React from "react";

import { getLatestData } from "@/lib/getLatestData";

import NewWarehouse from "../../new/page";

const UpdatePage = async ({ params }) => {
  const { id } = await params;
  const warehouseDetails = await getLatestData(`warehouse/${id}`);
  console.log(warehouseDetails);

  return (
    <div>
      <NewWarehouse initialData={warehouseDetails} isUpdate={true} />
    </div>
  );
};

export default UpdatePage;

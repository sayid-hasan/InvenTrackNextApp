import React from "react";

import { getLatestData } from "@/lib/getLatestData";

import NewAdjustment from "../../new/page";

const UpdatePage = async ({ params }) => {
  const { id } = await params;
  const adjustmentDetails = await getLatestData(`adjustments/${id}`);
  console.log(adjustmentDetails);

  return (
    <div>
      <NewAdjustment initialData={adjustmentDetails} isUpdate={true} />
    </div>
  );
};

export default UpdatePage;

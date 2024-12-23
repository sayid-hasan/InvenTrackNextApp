import React from "react";

import { getLatestData } from "@/lib/getLatestData";

import NewItem from "../../new/page";

const UpdatePage = async ({ params }) => {
  const { id } = await params;
  const itemDetails = await getLatestData(`items/${id}`);
  console.log(itemDetails);

  return (
    <div>
      <NewItem initialData={itemDetails} isUpdate={true} />
    </div>
  );
};

export default UpdatePage;

import React from "react";
import NewUnit from "../../new/page";
import { getLatestData } from "@/lib/getLatestData";

const UpdatePage = async ({ params }) => {
  const { id } = await params;
  const unitDetails = await getLatestData(`units/${id}`);
  console.log(unitDetails);

  return (
    <div>
      <NewUnit initialData={unitDetails} isUpdate={true} />
    </div>
  );
};

export default UpdatePage;

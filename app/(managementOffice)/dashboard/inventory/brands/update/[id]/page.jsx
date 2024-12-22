import React from "react";
import NewBrand from "../../new/page";
import { getLatestData } from "@/lib/getLatestData";

const UpdatePage = async ({ params }) => {
  const { id } = await params;
  const brandDetails = await getLatestData(`brands/${id}`);
  console.log(brandDetails);

  return (
    <div>
      <NewBrand initialData={brandDetails} isUpdate={true} />
    </div>
  );
};

export default UpdatePage;

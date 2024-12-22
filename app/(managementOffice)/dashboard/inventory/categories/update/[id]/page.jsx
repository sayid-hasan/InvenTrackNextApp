import React from "react";

import { getLatestData } from "@/lib/getLatestData";
import NewCategory from "../../new/page";

const UpdatePage = async ({ params }) => {
  const { id } = await params;
  const categoryDetails = await getLatestData(`categories/${id}`);
  console.log(categoryDetails);

  return (
    <div>
      <NewCategory initialData={categoryDetails} isUpdate={true} />
    </div>
  );
};

export default UpdatePage;

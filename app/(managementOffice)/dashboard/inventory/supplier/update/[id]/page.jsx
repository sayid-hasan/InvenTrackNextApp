import React from "react";

import { getLatestData } from "@/lib/getLatestData";
import NewSupplier from "../../new/page";

const UpdatePage = async ({ params }) => {
  const { id } = await params;
  const supplierDetails = await getLatestData(`supplier/${id}`);
  console.log(supplierDetails);

  return (
    <div>
      <NewSupplier initialData={supplierDetails} isUpdate={true} />
    </div>
  );
};

export default UpdatePage;

import DataTable from "@/components/dashboard/DataTable/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader/FixedHeader";
import { getLatestData } from "@/lib/getLatestData";
import React from "react";

const Suppliers = async () => {
  const suppliers = await getLatestData("supplier");
  const suppliersTableData = suppliers.map((obj) => {
    return {
      id: obj.id,

      title: obj.title,
      phone: obj.phone,
      email: obj.email,
      address: obj.address,
    };
  });
  const columns = ["title", "phone", "email", "address"];
  return (
    <div className=" mx-auto">
      {/* header */}
      <FixedHeader
        title={"Suppliers"}
        newLink="/dashboard/inventory/supplier/new"
      />

      <div className="my-5 container mx-auto">
        {/* dataTable */}
        <DataTable
          data={suppliersTableData}
          columns={columns}
          resourceTitle="supplier"
        />
      </div>
    </div>
  );
};

export default Suppliers;

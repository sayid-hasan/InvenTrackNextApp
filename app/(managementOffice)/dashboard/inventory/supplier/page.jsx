import DataTable from "@/components/dashboard/DataTable/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader/FixedHeader";
import { getLatestData } from "@/lib/getLatestData";
import React from "react";

const Suppliers = async () => {
  const suppliers = await getLatestData("supplier");
  const suppliersTableData = suppliers.map((obj) => {
    return {
      title: obj.title,
      phone: obj.phone,
      email: obj.email,
    };
  });
  const columns = ["title", "phone", "email"];
  return (
    <div className="my-5 container mx-auto">
      {/* header */}
      <FixedHeader
        title={"Suppliers"}
        newLink="/dashboard/inventory/supplier/new"
      />

      {/* dataTable */}
      <DataTable data={suppliersTableData} columns={columns} />
    </div>
  );
};

export default Suppliers;

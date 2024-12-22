import DataTable from "@/components/dashboard/DataTable/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader/FixedHeader";
import { getLatestData } from "@/lib/getLatestData";
import React from "react";

const WareHousePage = async () => {
  const warehouses = await getLatestData("warehouse");
  const warehousesTableData = warehouses.map((obj) => {
    return {
      name: obj.title,
      location: obj.warehouseLocation,
      type: obj.warehouseType,
    };
  });
  const columns = ["name", "location", "type"];
  return (
    <div className=" mx-auto">
      {/* header */}
      <FixedHeader
        title={"Warehouse"}
        newLink="/dashboard/inventory/warehouse/new"
      />

      <div className="my-5 container mx-auto">
        {/* dataTable */}
        <DataTable data={warehousesTableData} columns={columns} />
      </div>
    </div>
  );
};

export default WareHousePage;

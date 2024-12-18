import DataTable from "@/components/dashboard/DataTable/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader/FixedHeader";
import { getLatestData } from "@/lib/getLatestData";
import React from "react";

const Brands = async () => {
  const items = await getLatestData("items");
  const itemsTableData = items.map((obj) => {
    return {
      title: obj.itemName,
      createdAt: obj.createdAt,
      sellingPrice: obj.sellingPrice,
    };
  });
  const columns = ["title", "sellingPrice", "createdAt"];
  return (
    <div className="my-5 container mx-auto">
      {/* header */}
      <FixedHeader title={"Items"} newLink="/dashboard/inventory/items/new" />

      {/* dataTable */}
      <DataTable data={itemsTableData} columns={columns} />
    </div>
  );
};

export default Brands;

import DataTable from "@/components/dashboard/DataTable/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader/FixedHeader";
import { getLatestData } from "@/lib/getLatestData";
import React from "react";

const Items = async () => {
  const items = await getLatestData("items");
  const itemsTableData = items.map((obj) => {
    return {
      id: obj.id,
      title: obj.itemName,
      createdAt: obj.createdAt,
      sellingPrice: obj.sellingPrice,
    };
  });
  const columns = ["title", "sellingPrice", "createdAt"];
  return (
    <div className="mx-auto">
      {/* header */}
      <FixedHeader title={"Items"} newLink="/dashboard/inventory/items/new" />
      <div className="my-5 container mx-auto">
        {/* dataTable */}
        <DataTable
          data={itemsTableData}
          columns={columns}
          resourceTitle={"items"}
        />
      </div>
    </div>
  );
};

export default Items;

import DataTable from "@/components/dashboard/DataTable/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader/FixedHeader";
import { getLatestData } from "@/lib/getLatestData";
import React from "react";

const AdjustmentsPage = async () => {
  const adjustments = await getLatestData("adjustments");
  const adjustmentsTableData = adjustments.map((obj) => {
    return {
      itemName: obj.updatedItemName,
      createdAt: obj.createdAt,
      itemSku: obj.referenceSku,
    };
  });
  const columns = ["itemName", "createdAt", "itemSku"];
  return (
    <div className="my-5 container mx-auto">
      {/* header */}
      <FixedHeader
        title={"Adjustment"}
        newLink="/dashboard/inventory/adjustments/new"
      />

      {/* dataTable */}
      <DataTable data={adjustmentsTableData} columns={columns} />
    </div>
  );
};

export default AdjustmentsPage;

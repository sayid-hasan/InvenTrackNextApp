import DataTable from "@/components/dashboard/DataTable/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader/FixedHeader";
import { getLatestData } from "@/lib/getLatestData";
import React from "react";

const UnitPage = async () => {
  const units = await getLatestData("units");
  const unitsTableData = units.map((obj) => {
    return {
      id: obj.id,
      abbreviation: obj.title,
      unit: obj.unitName,
      createdAt: obj.createdAt,
    };
  });
  const columns = ["abbreviation", "unit", "createdAt"];
  return (
    <div className="mx-auto">
      {/* header */}
      <FixedHeader title={"Units"} newLink="/dashboard/inventory/units/new" />

      <div className="my-5 container mx-auto">
        {/* dataTable */}
        <DataTable
          data={unitsTableData}
          columns={columns}
          resourceTitle={"units"}
        />
      </div>
    </div>
  );
};

export default UnitPage;

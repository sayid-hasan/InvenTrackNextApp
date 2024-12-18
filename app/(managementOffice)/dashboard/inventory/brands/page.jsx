import DataTable from "@/components/dashboard/DataTable/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader/FixedHeader";
import { getLatestData } from "@/lib/getLatestData";
import React from "react";

const Brands = async () => {
  const brands = await getLatestData("brands");
  const brandsTableData = brands.map((obj) => {
    return {
      title: obj.title,
      createdAt: obj.createdAt,
    };
  });
  const columns = ["title", "createdAt"];
  return (
    <div className="my-5 container mx-auto">
      {/* header */}
      <FixedHeader title={"Brands"} newLink="/dashboard/inventory/brands/new" />

      {/* dataTable */}
      <DataTable data={brandsTableData} columns={columns} />
    </div>
  );
};

export default Brands;

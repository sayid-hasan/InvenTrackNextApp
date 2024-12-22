import DataTable from "@/components/dashboard/DataTable/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader/FixedHeader";
import { getLatestData } from "@/lib/getLatestData";
import React from "react";

const Categories = async () => {
  const categories = await getLatestData("categories");
  const categoryTableData = categories.map((obj) => {
    return {
      id: obj.id,
      title: obj.title,
      description: obj.categoryDescription,
    };
  });
  const columns = ["title", "description"];
  return (
    <div className="mx-auto">
      {/* header */}
      <FixedHeader
        title={"Categories"}
        newLink="/dashboard/inventory/categories/new"
      />

      <div className="my-5 container mx-auto">
        {/* dataTable */}
        <DataTable
          data={categoryTableData}
          columns={columns}
          resourceTitle="categories"
        />
      </div>
    </div>
  );
};

export default Categories;

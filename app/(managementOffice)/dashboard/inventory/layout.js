"use client";
import FixedHeader from "@/components/dashboard/FixedHeader/FixedHeader";

import React from "react";

const inventoryLayout = ({ children }) => {
  return (
    <div className="  ">
      {/* sidebar */}
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      {/* main */}

      <div>{children}</div>
    </div>
  );
};

export default inventoryLayout;

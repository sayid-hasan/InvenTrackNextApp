"use client";
import FixedHeader from "@/components/dashboard/FixedHeader/FixedHeader";

import React from "react";

const inventoryLayout = ({ children }) => {
  return (
    <div className="  ">
      {/* sidebar */}
      <FixedHeader />
      {/* main */}

      <div>{children}</div>
    </div>
  );
};

export default inventoryLayout;

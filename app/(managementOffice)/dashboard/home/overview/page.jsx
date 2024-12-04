"use client";
import DashboardBanner from "@/components/dashboard/DashboardBanner/DashboardBanner";
import SalesOverview from "@/components/dashboard/SalesOverview/SalesOverview";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <DashboardBanner />
      <SalesOverview />
    </div>
  );
};

export default Dashboard;

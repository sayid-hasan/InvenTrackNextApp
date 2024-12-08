"use client";
import FixedHeader from "@/components/dashboard/FixedHeader/fixedHeader";
import OptionCard from "@/components/dashboard/OptionCard/OptionCard";
import { Box, Boxes, Component, ScrollText } from "lucide-react";

import React from "react";

const Inventory = () => {
  const itemCards = [
    {
      title: "Items",
      icon: Box,
      link: "/dashboard/inventory/items/new",
      color: "blue-400",
      linkText: "New Item",
      description: `Effortlessly craft standalone products or services that are ready to impress and sell!`,
      isEnable: true,
    },
    {
      title: "Categories",
      icon: Boxes,
      link: "/dashboard/inventory/categories/new",
      color: "blue-400",
      linkText: "New Category",
      description: `Combine multiple items into irresistible bundles for enhanced customer satisfaction!`,
      isEnable: true,
    },
    {
      title: "Brands",
      icon: Component,
      link: "/dashboard/inventory/brands/new",
      color: "blue-400",
      linkText: "New Brands",
      description: `Easily adjust pricing for specific clients or transactions to boost sales and engagement!`,
      isEnable: true,
    },
    {
      title: "Warehouse",
      icon: ScrollText,
      link: "/dashboard/inventory/warehouse/new",
      color: "blue-400",
      linkText: "New Warehouse",
      description: `Easily adjust pricing for specific clients or transactions to boost sales and engagement!`,
      isEnable: true,
    },
    {
      title: "Units",
      icon: ScrollText,
      link: "/dashboard/inventory/units/new",
      color: "blue-400",
      linkText: "New Units",
      description: `Easily adjust pricing for specific clients or transactions to boost sales and engagement!`,
      isEnable: true,
    },
  ];
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 m-4">
        {/* carda */}
        {itemCards.map((item, index) => {
          return <OptionCard optionData={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Inventory;

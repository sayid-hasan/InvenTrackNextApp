"use client";
import React from "react";

import { Box, Boxes, Component, ScrollText } from "lucide-react";
import OptionCard from "@/components/dashboard/OptionCard/OptionCard";

const ItemsPage = () => {
  const itemCards = [
    {
      title: "Item Group",
      icon: Boxes,
      link: "#",
      color: "blue-400",
      linkText: "New Item Groups",
      description: `Easily create multiple variations of an item to streamline your inventory and maximize flexibility!`,
      isEnable: true,
    },
    {
      title: "Items",
      icon: Box,
      link: "#",
      color: "blue-400",
      linkText: "New Item",
      description: `Effortlessly craft standalone products or services that are ready to impress and sell!`,
      isEnable: true,
    },
    {
      title: "Composite Items",
      icon: Component,
      link: "#",
      color: "blue-400",
      linkText: "New Composite Item",
      description: `Combine multiple items into irresistible bundles for enhanced customer satisfaction!`,
      isEnable: true,
    },
    {
      title: "Price List",
      icon: ScrollText,
      link: "#",
      color: "blue-400",
      linkText: "enable now",
      description: `Easily adjust pricing for specific clients or transactions to boost sales and engagement!`,
      isEnable: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 m-4">
      {/* carda */}
      {itemCards.map((item, index) => {
        return <OptionCard optionData={item} key={index} />;
      })}
    </div>
  );
};

export default ItemsPage;

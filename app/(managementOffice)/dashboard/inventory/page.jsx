"use client";
import FixedHeader from "@/components/dashboard/FixedHeader/fixedHeader";
import OptionCard from "@/components/dashboard/OptionCard/OptionCard";
import {
  Box,
  Boxes,
  Factory,
  Landmark,
  NotebookPen,
  Scale,
  Warehouse,
} from "lucide-react";

import React from "react";

const Inventory = () => {
  const itemCards = [
    {
      title: "Items",
      icon: Box, // Represents a single item or product
      link: "/dashboard/inventory/items/new",
      color: "blue-400",
      linkText: "New Item",
      description: `Effortlessly create individual products or services to expand your inventory.`,
      isEnable: true,
    },
    {
      title: "Categories",
      icon: Boxes, // Represents grouping or categories of items
      link: "/dashboard/inventory/categories/new",
      color: "blue-400",
      linkText: "New Category",
      description: `Organize items into structured categories for better inventory management.`,
      isEnable: true,
    },
    {
      title: "Brands",
      icon: Landmark, // More relevant to represent brands
      link: "/dashboard/inventory/brands/new",
      color: "blue-400",
      linkText: "New Brand",
      description: `Manage and showcase product brands to build trust and identity.`,
      isEnable: true,
    },
    {
      title: "Warehouse",
      icon: Warehouse, // Represents a warehouse structure
      link: "/dashboard/inventory/warehouse/new",
      color: "blue-400",
      linkText: "New Warehouse",
      description: `Track and manage physical inventory across different storage locations.`,
      isEnable: true,
    },
    {
      title: "Units",
      icon: Scale, // Represents measurement units
      link: "/dashboard/inventory/units/new",
      color: "blue-400",
      linkText: "New Unit",
      description: `Define and manage units of measurement for your products.`,
      isEnable: true,
    },
    {
      title: "Adjustments",
      icon: NotebookPen, // Represents measurement units
      link: "/dashboard/inventory/adjustments/new",
      color: "blue-400",
      linkText: "Customize Item Details",
      description: `Change the details of any stored item in the inventory`,
      isEnable: true,
    },
    {
      title: "Supplier",
      icon: Factory, // Represents measurement units
      link: "/dashboard/inventory/supplier/new",
      color: "blue-400",
      linkText: "Add a new supplier",
      description: `Supplier details like name, phone , contact information`,
      isEnable: true,
    },
  ];

  return (
    <div>
      <FixedHeader
        title={"All Items"}
        newLink="/dashboard/inventory/items/new"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
        {/* carda */}
        {itemCards.map((item, index) => {
          return <OptionCard optionData={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Inventory;

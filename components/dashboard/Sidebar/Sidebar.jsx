"use client";
import {
  Cable,
  ChartNoAxesCombined,
  ChevronLeft,
  Dock,
  Home,
  Scroll,
  ShoppingBag,
  ShoppingCart,
  Store,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";

import SidebarDropdownLinks from "../SidebarDropdownLinks/SidebarDropdownLinks";
import { ToastContainer } from "react-toastify";

const Sidebar = () => {
  const inventoryLinks = [
    {
      title: "Items",
      link: "/dashboard/inventory",
    },
    {
      title: "Categories",
      link: "/dashboard/inventory",
    },
    {
      title: "Brands",
      link: "/dashboard/inventory",
    },
    {
      title: "Units",
      link: "/dashboard/inventory",
    },
    {
      title: "Warehouse",
      link: "/dashboard/inventory",
    },
    {
      title: "Inventory Adjustments",
      link: "/dashboard/inventory/adjustments/new",
    },
  ];
  const sellLinks = [
    {
      title: "Customers",
      link: "",
    },
    {
      title: "Sells orders",
      link: "",
    },
    {
      title: "Packages",
      link: "",
    },
    {
      title: "Shipments",
      link: "",
    },
    {
      title: "Invoices",
      link: "",
    },
    {
      title: "Sales receipts",
      link: "",
    },
    {
      title: "Payments received",
      link: "",
    },
    {
      title: "Sales returns",
      link: "",
    },
    {
      title: "Credit Notes",
      link: "",
    },
    {
      title: "Packages",
      link: "",
    },
  ];
  return (
    <div className="w-60 max-h-screen flex flex-col justify-between bg-slate-800 text-slate-50 fixed overflow-y-auto overflow-hidden ">
      {/* top */}
      <div className="flex flex-col">
        {/* logo */}
        <Link
          href=""
          className="flex gap-2 items-center bg-slate-900 px-4 py-3 "
        >
          <Store />
          <span className="font-bold text-xl">InvenTrack</span>
        </Link>
        {/* links */}
        <nav
          className="flex flex-col  gap-4 py-3 px-4
        "
        >
          {/* Home Link */}
          <Link
            href=""
            className="flex transition-transform duration-300 hover:translate-x-2 hover:translate-y-[2px] grow flex-1 items-center justify-start gap-2 text-lg font-semibold p-2 rounded-md text-slate-50 bg-blue-500 "
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          {/* Inventory accordian */}
          <button></button>

          {/* collapsible inventory SidebarDropdownLinks from component */}
          <SidebarDropdownLinks
            name={"Inventory"}
            linkItems={inventoryLinks}
            icon={<Scroll className="w-4 h-4" />}
          />

          {/* collapsible sellLinks SidebarDropdownLinks from component */}
          <SidebarDropdownLinks
            name={"Sales"}
            linkItems={sellLinks}
            icon={<ShoppingCart className="w-4 h-4" />}
          />

          {/* Purchases Button */}
          <button className="flex transition-transform duration-300 hover:translate-x-2 hover:translate-y-[2px] grow flex-1 items-center justify-start gap-2 text-lg font-semibold p-2 rounded-md">
            <ShoppingBag className="w-4 h-4" />
            <span>Purchases</span>
          </button>
          {/* Integrations Link */}
          <Link
            href=""
            className="flex transition-transform duration-300 hover:translate-x-2 hover:translate-y-[2px] grow flex-1 items-center justify-start gap-2 text-lg font-semibold p-2 rounded-md"
          >
            <Cable className="w-4 h-4" />
            <span>Integrations</span>
          </Link>
          {/* Reports Link */}
          <Link
            href=""
            className="flex transition-transform duration-300 hover:translate-x-2 hover:translate-y-[2px] grow flex-1 items-center justify-start gap-2 text-lg font-semibold p-2 rounded-md"
          >
            <ChartNoAxesCombined className="w-4 h-4" />
            <span>Reports</span>
          </Link>
          {/* Documents Link */}
          <Link
            href=""
            className="flex transition-transform duration-300 hover:translate-x-2 hover:translate-y-[2px] grow flex-1 items-center justify-start gap-2 text-lg font-semibold p-2 rounded-md"
          >
            <Dock className="w-4 h-4" />
            <span>Documents</span>
          </Link>
        </nav>
        {/* subscription card */}
        <SubscriptionCard />
      </div>

      {/*bottom */}
      <div className="flex  flex-col mt-5">
        {/* logo */}
        <button className="flex group justify-end items-center bg-slate-900 px-4 py-2 ">
          <ChevronLeft className="group-hover:-translate-x-14 group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>

      {/* footer icon */}
      {/* toastContainer of toastify */}
      <ToastContainer />
    </div>
  );
};

export default Sidebar;

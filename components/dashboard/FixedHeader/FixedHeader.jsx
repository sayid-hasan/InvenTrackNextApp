"use client";
import {
  HelpCircle,
  LayoutGrid,
  List,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Tooltip } from "react-tooltip";

const FixedHeader = ({ newLink, title }) => {
  return (
    <div className="flex justify-between items-center bg-white px-4 py-5">
      {/* right part dropdown btn */}
      <button className="text-2xl font-medium">{title}</button>
      {/* left part */}

      <div className="flex gap-1">
        {/* new item adding link */}

        <div className="flex px-2">
          {/* <!-- Show tooltip on bottom --> */}

          <Link
            href={newLink}
            data-tooltip-id="NewBtnTooltip"
            data-tooltip-content="add new item"
            data-tooltip-place="bottom"
            className="px-4 py-2 group text-white bg-blue-500 rounded-sm hover:bg-blue-600 transition duration-200 flex space-x-2 items-center text-sm"
          >
            <span>New</span>
            <Plus className="group-hover:scale-105 text-slate-50 w-4 h-4" />
            <Tooltip id="NewBtnTooltip" />
          </Link>
        </div>
        {/* layout btns*/}
        <div className="  rounded-md  flex items-center justify-center">
          {/* list */}
          <button className="bg-gray-300 p-2 border-r border-gray-400 rounded-l-md">
            <List className="w-5 h-5" />
          </button>
          {/* grid layout */}
          <button className=" bg-gray-200 p-2 rounded-r-md ">
            <LayoutGrid className="w-5 h-5" />
          </button>
        </div>
        {/* More option buttton */}
        <button
          className="bg-gray-200 p-2 mx-2 rounded-md
        "
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
        {/* questions btn */}
        <button>
          <HelpCircle className="w-8 h-8 text-white bg-orange-500 rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default FixedHeader;

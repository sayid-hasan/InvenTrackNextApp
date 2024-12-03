"use client";

import SearchInput from "@/components/shared/SearchInput/SearchInput";
import {
  Bell,
  ChevronDown,
  History,
  LayoutGrid,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Tooltip } from "react-tooltip";

const Header = () => {
  return (
    <div className="bg-gray-50 text-slate-900 h-14 flex items-center justify-between px-5 border-b border-slate-200  shadow-sm">
      {/* segment */}
      <div className="grow flex-1 flex ">
        <div className="flex gap-3 items-center ">
          {/* recent activity */}
          {/* recent history icon from lucide */}
          <History className="w-7 h-7" />

          {/* Search Box */}
          <SearchInput></SearchInput>
        </div>
      </div>
      {/* 2nd segment */}
      <div className="flex px-2  items-center gap-2">
        {/* plus button */}
        <div className="flex px-2 border-r border-r-gray-300">
          {/* <!-- Show tooltip on bottom --> */}

          <button
            data-tooltip-id="PlusBtnTooltip"
            data-tooltip-content="Quick access"
            data-tooltip-place="bottom"
            type="button"
            className="px-1 py-1 group text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            <Plus className="group-hover:scale-105 text-slate-50 w-4 h-4" />
            <Tooltip id="PlusBtnTooltip" />
          </button>
          {/* tooltip */}
          <div
            id="tooltip-bottom"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Quick access
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
        {/* users btn  /* bell * */
        /* bell */}
        <div className="flex gap-2 px-2 border-r border-r-gray-300">
          {/* users btn */}
          <button
            type="button"
            className="px-1 py-1 group rounded-lg hover:bg-slate-200 transition duration-200"
          >
            <Users className="group-hover:scale-105 text-slate-900 w-4 h-4" />
          </button>

          {/* bell */}
          <button
            type="button"
            className="px-1 group py-1 group rounded-lg hover:bg-slate-200 transition duration-200"
          >
            <Bell className="group-hover:scale-105 origin-top group-hover:-rotate-12  transition-transform duration-700 text-slate-900 w-4 h-4" />
          </button>
          {/* settings */}
          <button
            type="button"
            className="px-1 group py-1 group rounded-lg hover:bg-slate-200 transition duration-200"
          >
            <Settings className="group-hover:scale-105 group-hover:rotate-180 transition-transform duration-700 text-slate-900 w-4 h-4" />
          </button>
        </div>

        {/*  */}
      </div>
      {/* 3rd sections */}
      <div className="flex gap-6">
        {/* Garat name of organization */}
        <button className="flex-row-reverse text-slate-900 flex items-center gap-1">
          <span>Garat</span>
          <ChevronDown className="text-xs" />
        </button>

        {/* image */}
        <button>
          <Image
            width={96}
            height={96}
            className="rounded-full w-8 h-8 border border-slate-800 "
            alt="user image"
            src="/user.png"
          />
        </button>

        {/* grid button */}
        <button>
          <LayoutGrid className="w-6 h-6 text-slate-900" />
        </button>
      </div>
    </div>
  );
};

export default Header;

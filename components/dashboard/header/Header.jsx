"use client";

import SearchInput from "@/components/shared/SearchInput/SearchInput";
import { Bell, History, Plus, Settings, User2, Users } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-50 h-14 flex items-center justify-between px-5">
      {/* segment */}
      <div className="flex gap-3 items-center">
        {/* recent activity */}
        {/* recent history icon from lucide */}
        <History className="w-7 h-7" />

        {/* Search Box */}
        <SearchInput></SearchInput>
      </div>
      {/* 2nd segment */}
      <div className="flex px-2  items-center gap-2">
        {/* plus button */}
        <div className="flex px-2 border-r border-r-gray-300">
          {/* <!-- Show tooltip on bottom --> */}

          <button
            data-tooltip-target="tooltip-bottom"
            data-tooltip-placement="bottom"
            type="button"
            className="px-1 py-1 group text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            <Plus className="group-hover:scale-105 text-slate-50 w-4 h-4" />
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
          {/* <!-- Show tooltip on bottom --> */}

          <button
            type="button"
            className="px-1 py-1 group rounded-lg hover:bg-slate-200 transition duration-200"
          >
            <Users className="group-hover:scale-105 text-slate-900 w-4 h-4" />
          </button>

          {/* bell */}
          <button
            type="button"
            className="px-1 py-1 group rounded-lg hover:bg-slate-200 transition duration-200"
          >
            <Bell className="group-hover:scale-105 text-slate-900 w-4 h-4" />
          </button>
          {/* settings */}
          <button
            type="button"
            className="px-1 py-1 group rounded-lg hover:bg-slate-200 transition duration-200"
          >
            <Settings className="group-hover:scale-105 text-slate-900 w-4 h-4" />
          </button>
        </div>

        {/*  */}
      </div>
      {/* 3rd sections */}
      <div></div>
    </div>
  );
};

export default Header;

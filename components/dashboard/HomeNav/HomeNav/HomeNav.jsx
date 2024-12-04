"use client";
import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HomeNav = () => {
  const pathName = usePathname();
  // console.log(pathName);
  const navLinks = [
    {
      title: "Dashboard",
      link: "/dashboard/home/overview",
    },
    {
      title: "Getting Started",
      link: "/dashboard/home/getting-started",
    },
    {
      title: "Recent Updates",
      link: "/dashboard/home/updates",
    },
    {
      title: "Announcements",
      link: "/dashboard/home/announcement",
    },
  ];
  return (
    <div className="h-32 p-5 header-bg border-b border-slate-300 bg-slate-50 ">
      {/* user name */}
      <div className="flex gap-3">
        {/* icon */}
        <div className="flex w-12 h-12 rounded-lg items-center bg-white justify-center">
          <Building2 className="text-slate-500" />
        </div>
        {/* user Name this will be dynamic */}
        <div className="flex flex-col text-slate-500 ">
          <p className="text-xl font-semibold ">Hello, Syed Dev</p>
          {/* company Name */}
          <span className="text-sm">ELite Mart</span>
        </div>
      </div>
      {/* tab link */}
      <nav className="  sticky mt-6 bottom-0 flex space-x-4">
        {/* map through navLinks for tab view */}
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            className={`${
              pathName === link.link ? `border-b-[3px] border-b-blue-600` : ``
            } font-bold text-slate-400 py-1 px-4 transition duration-200 `}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default HomeNav;

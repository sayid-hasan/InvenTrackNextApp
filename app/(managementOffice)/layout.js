"use client";
import Header from "@/components/dashboard/header/Header";
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";

import React from "react";

const layout = ({ children }) => {
  return (
    <div className=" flex ">
      {/* sidebar */}
      <Sidebar></Sidebar>
      {/* main */}
      <main className="w-full ml-60 bg-slate-100 min-h-screen">
        <Header></Header>
        {children}
      </main>
    </div>
  );
};

export default layout;

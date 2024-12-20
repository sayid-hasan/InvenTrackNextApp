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
      <main className=" container mx-auto w-full sm:ml-60 ml-0 bg-slate-100 min-h-screen h-full overflow-y-auto">
        <Header></Header>
        {children}
      </main>
    </div>
  );
};

export default layout;

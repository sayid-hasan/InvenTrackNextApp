"use client";
import Header from "@/components/dashboard/header/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className=" flex ">
      {/* sidebar */}
      <div className="w-56 min-h-screen bg-slate-900 text-slate-50">
        sidebar
      </div>
      {/* main */}
      <main className="w-full bg-slate-100 min-h-screen">
        <Header></Header>
        {children}
      </main>
    </div>
  );
};

export default layout;

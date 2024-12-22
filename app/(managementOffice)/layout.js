"use client";
"use client";
import Header from "@/components/dashboard/header/Header";
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";

import React, { useState } from "react";

const layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className=" flex  max-w-[1600px] mx-auto bg-slate-100  overflow-x-hidden ">
      {/* sidebar */}
      <Sidebar
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
      ></Sidebar>
      {/* main */}
      <main className=" w-full mx-auto   lg:ml-60 ml-0 min-h-screen h-full overflow-y-auto">
        <Header
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        ></Header>
        {children}
      </main>
    </div>
  );
};

export default layout;

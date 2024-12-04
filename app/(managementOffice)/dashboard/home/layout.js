import HomeNav from "@/components/dashboard/HomeNav/HomeNav/HomeNav";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="">
      <HomeNav />
      {/* children */}
      {children}
    </div>
  );
};

export default Layout;

import { CreditCard, X } from "lucide-react";
import React, { useState } from "react";

const DashboardBanner = () => {
  const [isClose, setIsClose] = useState(false);
  return (
    <div
      className={` ${
        isClose && "hidden"
      } grid grid-cols-12 items-center justify-center   mx-auto bg-white  py-6 md:px-8 px-2 relative`}
    >
      {/* icon */}
      <div className=" self-center justify-self-center col-span-2">
        {" "}
        <CreditCard className="w-20 h-20 text-slate-500" />
      </div>
      {/* text */}
      <div
        className=" col-span-8 self-center justify-self-center
       space-y-2"
      >
        {/* header */}
        <h2 className="text-xl font-bold">Start Accepting online payments</h2>
        {/* sub header */}
        <p className="text-slate-500 font-medium ">
          Every Business are moving towards Online payments a it&apos;s super
          easy , secure and fast. Try them for your business today.{" "}
        </p>
      </div>
      {/*  button */}
      {/* button will be dynamic */}
      <div className="col-span-2">
        <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-200">
          Enable
        </button>
      </div>
      {/* close button */}
      <button
        onClick={() => setIsClose(true)}
        className="bg-slate-100 rounded-full hover:bg-blue-600 hover:text-white transition duration-200 w-7 h-7 flex justify-center items-center absolute top-4 right-4 group"
      >
        <X className="scale-90 group-hover:scale-100 transition-transform duration-200" />
      </button>
    </div>
  );
};

export default DashboardBanner;

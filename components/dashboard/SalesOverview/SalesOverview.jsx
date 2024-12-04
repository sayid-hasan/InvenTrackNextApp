import { CircleCheck, ReceiptText, Truck } from "lucide-react";
import Link from "next/link";
import React from "react";

const SalesOverview = () => {
  const salesActivity = [
    {
      title: "to be packed",
      icon: <CircleCheck />,
      qty: 0,
      color: "blue-400",
      unit: "Qty",
      link: "/",
    },
    {
      title: "To Be Shipped",
      icon: <Truck />,
      qty: 0,
      color: "red-400",
      unit: "Pkgs",
      link: "/",
    },
    {
      title: "To Be delivered",
      icon: <Truck />,
      qty: 0,
      color: "green-400",
      unit: "Pkgs",
      link: "/",
    },
    {
      title: "To Be invoiced",
      icon: <ReceiptText />,
      qty: 0,
      color: "orange-400",
      unit: "Qty",
      link: "/",
    },
  ];
  return (
    <div className="flex w-full flex-col md:flex-row items-center gap-8 justify-between p-8 bg-blue-50 border-b border-b-slate-300">
      {/* sales activity */}
      <div className="w-full md:w-2/3">
        {/* title */}
        <h2 className="font-bold  text-slate-500">Sales Activity</h2>
        {/* activity */}
        {/* cards */}
        <div className="grid grid-cols-4 gap-4 my-4">
          {/* sales activity  cards */}

          {salesActivity.map((item, index) => {
            return (
              <Link
                href={item?.link}
                key={index}
                className={`rounded-lg border border-slate-200 shadow-sm  cursor-pointer hover:border-${item?.color} bg-white p-4 transition duration-200 `}
              >
                <div className="space-y-3">
                  {/* qty */}
                  <div className="flex flex-col justify-center items-center">
                    {/* this will be dynamic */}
                    <h2 className={`text-${item?.color} text-4xl`}>
                      {item?.qty}
                    </h2>
                    <span className="text-slate-300">{item?.unit}</span>
                  </div>
                  {/* text */}
                  <div className="text-slate-300 font-semibold flex items-center justify-center gap-1 text-sm">
                    {/* icon */}
                    {item?.icon}
                    {/* text */}
                    <p>{item?.title}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* inventory summery */}
      <div className="w-full md:w-1/3">
        {/* title */}
        <h2 className="font-bold  text-slate-500">Inventory Summery</h2>
        {/* inventory  details */}
        <div className="my-4 space-y-3">
          {/* Quantity in hand */}
          <div className="flex items-center justify-between bg-white border-slate-100 p-3 rounded-md cursor-pointer border hover:border-blue-400 transition duration-200 shadow-sm">
            <p className="font-medium text-slate-400 uppercase">
              Quantity in Hand
            </p>
            {/* this will be dynamic */}
            <p className="font-bold text-2xl">0</p>
          </div>
          {/* Quantity to be received */}
          <div className="flex items-center justify-between bg-white border-slate-100 p-3 rounded-md cursor-pointer border hover:border-blue-400 transition duration-200 shadow-sm">
            <p className="font-medium text-slate-400 uppercase">
              Quantity to be received
            </p>
            {/* this will be dynamic */}
            <p className="font-bold text-2xl">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;

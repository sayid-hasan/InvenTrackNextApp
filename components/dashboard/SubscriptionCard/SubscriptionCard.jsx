import Link from "next/link";
import React from "react";

const SubscriptionCard = () => {
  return (
    <div className="px-2 flex flex-col   mt-6">
      <div className="bg-slate-900 rounded-md py-2">
        {/* top part */}
        <div className=" w-full border-b border-b-slate-300">
          <div className="  p-2  rounded-md py-3 ">
            <p className="text-sm border-l-orange-400 border-l-2 pl-2">
              Your <span className="font-bold">premium</span> plan trial ends in{" "}
              <span className="text-orange-400">20 days</span>
            </p>
          </div>
        </div>
        {/* button and link */}
        <div className="flex justify-between items-start text-slate-50">
          {/* change plan */}
          <button className="p-2 font-semibold border-r border-slate-300 hover:scale-100 scale-90 grow transition-transform duration-200">
            Change Plan
          </button>
          {/* upgrade */}
          <Link
            href=""
            className="p-2 font-semibold hover:scale-100 scale-90 grow transition-transform duration-200"
          >
            Upgrade
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;

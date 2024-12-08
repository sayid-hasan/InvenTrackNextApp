"use client";
import React from "react";
import Link from "next/link";

const OptionCard = ({ optionData }) => {
  const {
    title,
    description,
    link,
    linkText,
    isEnable,
    icon: Icon,
  } = optionData;
  return (
    <div className="shadow-md space-y-4 rounded bg-white flex flex-col items-center justify-center p-6">
      {/* title */}
      <h2 className="font-bold text-xl ">{title}</h2>
      {/* image */}
      <Icon strokeWidth={0.5} className="w-36 h-36" />
      {/* short description */}
      <p className="text-slate-500 font-medium text-sm max-w-full mx-auto text-center">
        {description}
      </p>
      {/* action button */}

      {isEnable ? (
        <Link
          href={link}
          className="px-3 py-2  group text-white bg-blue-500 rounded-sm hover:bg-blue-600 transition duration-200"
        >
          {linkText}
        </Link>
      ) : (
        <button className="px-3 py-2  group text-white bg-blue-500 rounded-sm hover:bg-blue-600 transition duration-200">
          Enable Now
        </button>
      )}
    </div>
  );
};

export default OptionCard;

import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const FormHeader = ({ title, link }) => {
  return (
    <div className="flex items-center justify-between bg-white px-5 py-3">
      <h2 className="text-2xl font-bold">{title}</h2>
      <Link href={link}>
        <X />
      </Link>
    </div>
  );
};

export default FormHeader;

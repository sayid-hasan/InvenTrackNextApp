import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const CollapsibleLink = ({ links, setShowSidebar }) => {
  return (
    <Link
      onClick={() => setShowSidebar(false)}
      className="flex justify-between items-center px-3 hover:bg-slate-900 transition-all duration-200 py-2.5 rounded-md space-x-3"
      href={links?.link}
    >
      <span className="text-slate-100 font-medium text-sm">{links?.title}</span>
      <PlusCircle className="bg-blue-400 rounded-full w-4 h-4" />
    </Link>
  );
};

export default CollapsibleLink;

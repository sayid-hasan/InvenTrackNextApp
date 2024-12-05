import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";
import CollapsibleLink from "../CollapsibleLinks/CollapsibleLink";

const SidebarDropdownLinks = ({ name, linkItems, icon }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem className="border-none" value="item-1">
        <AccordionTrigger className="flex justify-between items-center p-2 rounded-md">
          {" "}
          <div
            className="flex 
                grow flex-1 items-center justify-start gap-2 text-lg font-semibold"
          >
            {icon}
            <span>{name}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-6">
          {linkItems.map((links, index) => {
            return <CollapsibleLink key={index} links={links} />;
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SidebarDropdownLinks;

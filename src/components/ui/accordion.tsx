"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border-b", // This ensures it's only bottom border
        "border-b-[1px] border-b-solid border-b-[var(--shade-500)]", // Specific bottom border styling
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  typographyClassName,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  typographyClassName?: string;
}) {
  return (
    <AccordionPrimitive.Header asChild>
      <div className="flex w-full">
        {" "}
        {/* Added flex and w-full here */}
        <AccordionPrimitive.Trigger
          data-slot="accordion-trigger"
          className={cn(
            "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-3 rounded-md py-4 text-left transition-all outline-none focus-visible:ring-[1px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
            typographyClassName ? typographyClassName : "font-medium",
            className
          )}
          {...props}
        >
          <span className="flex-1">{children}</span> {/* Wrap text in span */}
          <ChevronDownIcon className="text-muted-foreground pointer-events-none size-6 shrink-0 transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
      </div>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "text-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden",
        className
      )}
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>
        <div className="text-base font-normal">
          {" "}
          {/* Inherits from theme */}
          {children}
        </div>
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

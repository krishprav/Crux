import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const aiButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow-md hover:bg-primary/90",
        destructive: "bg-red-600 text-white shadow-md hover:bg-red-700",
        outline: "border border-gray-300 bg-white hover:bg-gray-100",
        secondary: "bg-gray-800 text-white shadow-md hover:bg-gray-700",
        ghost: "hover:bg-gray-200 text-gray-900",
        link: "text-blue-600 underline-offset-4 hover:underline",
        glassmorphic:"relative overflow-hidden bg-white/10 backdrop-blur-2xl order border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.3)]    text-white transition-all duration-300 ease-in-out hover:bg-white/15 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent    before:opacity-0 before:transition-opacity before:duration-500 over:before:opacity-100 hover:scale-105 active:scale-95",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-4 text-sm",
        lg: "h-12 px-6 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "glassmorphic",
      size: "default",
    },
  }
);

function AiButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof aiButtonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="aibutton"
      className={cn(aiButtonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { AiButton, aiButtonVariants };

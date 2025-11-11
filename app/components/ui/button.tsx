"use client";

import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none touch-manipulation",
  {
    variants: {
      variant: {
        primary:
          "bg-[#0070F3] text-white hover:opacity-90 focus-visible:ring-blue-500 ring-offset-white shadow-[0px 4px 11px 0px #1701AD1A] hover:bg-white hover:text-[#0070F3] border border-[#0070f3] hover:shadow-[0px 8px 24px 0px #1701AD1A]",
        secondary:
          "bg-white text-[#0070F3] hover:bg-gray-200 focus-visible:ring-gray-400 ring-offset-white",

        // 🟢 OUTLINE VARIANT — gradient border always visible, fill on hover
        outline:
          " rounded-full  transition-all duration-300 ease-in-out ring-offset-white " +
          "bg-white border border-[#0070f3] hover:bg-[#0070f3] hover:text-white " +
          // ✨ Hover fills with gradient + text turns white
          "",

        danger:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 ring-offset-white",
        ghost:
          "bg-transparent text-gray-800 hover:bg-gray-100 focus-visible:ring-gray-300 ring-offset-white",
        link:
          "text-blue-600 underline-offset-4 hover:underline focus-visible:ring-blue-400 ring-offset-white",
      },
      size: {
        default: "py-3 px-6 text-base",
        sm: "py-2 px-4 text-sm",
        lg: "py-4 px-8 text-lg",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, asChild = false, href, children, ...props }, ref) => {
    const Comp = (href ? Link : asChild ? Slot : "button") as React.ElementType;

    return (
      <Comp
        ref={ref}
        href={href}
        className={cn(buttonVariants({ variant, size }))}
        {...props}
      >
        {variant === "outline" ? (
          <span>{children}</span>
        ) : (
          children
        )}
      </Comp>
    );
  }
);


Button.displayName = "Button";

export { Button, buttonVariants };

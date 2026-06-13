import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-tiki-blue text-white hover:bg-tiki-blue/90",
        destructive: "bg-tiki-pink text-white hover:bg-tiki-pink/90",
        outline: "border-2 border-tiki-blue bg-transparent text-tiki-blue hover:bg-tiki-blue hover:text-white",
        secondary: "bg-tiki-yellow text-tiki-dark hover:bg-tiki-yellow/80",
        ghost: "hover:bg-tiki-light hover:text-tiki-blue",
        link: "text-tiki-blue underline-offset-4 hover:underline",
        accent: "bg-tiki-green text-white hover:bg-tiki-green/90",
      },
      size: {
        default: "h-10 px-6 py-2 rounded-full",
        sm: "h-9 rounded-full px-5",
        lg: "h-11 rounded-full px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const TikiButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
TikiButton.displayName = "TikiButton"

export { TikiButton, buttonVariants }

import type { ComponentProps, ReactNode } from "react"
import { motion } from "framer-motion"
import { tokens } from "../../design-system/tokens"
import { cn } from "../../lib/cn"

type ButtonProps = Omit<ComponentProps<typeof motion.button>, "children"> & {
  children?: ReactNode
}

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <motion.button
      initial={false}
      whileHover={{
        y: -1.5,
        boxShadow: "0 14px 36px rgba(255,216,77,0.32)",
      }}
      whileTap={{
        y: 0,
        boxShadow: "0 6px 18px rgba(255,216,77,0.22)",
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        // Layout
        "relative inline-flex items-center justify-center",
        "px-9 py-4",

        // Typography
        "text-sm font-semibold tracking-wide",

        // Shape
        tokens.radius.pill,

        // Color
        tokens.colors.neonGoldGradient,
        "text-black",

        // Behavior
        "shadow-none",
        "transition-[box-shadow,transform]",

        className
      )}
      {...props}
    >
      {/* Subtle inner highlight (depth, not glow) */}
      <span
        aria-hidden
        className="
          pointer-events-none
          absolute inset-0
          rounded-full
          bg-white/10
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

export default Button
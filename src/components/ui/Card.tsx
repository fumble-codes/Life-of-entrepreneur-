import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { tokens } from "../../design-system/tokens"
import { cn } from "../../lib/cn"

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        // Background / surface
        tokens.colors?.surface ?? tokens.colors.background,

        // Radius
        tokens.radius?.lg ?? tokens.radius.md,

        // Shadow
        tokens.shadow?.soft ?? "shadow-[0_10px_40px_rgba(0,0,0,0.35)]",

        // Border
        "border",
        tokens.colors?.border ?? "border-white/10",

        // Padding
        "p-8",

        className
      )}
    >
      {children}
    </motion.div>
  )
}

export default Card
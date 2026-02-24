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
        boxShadow: "0 20px 60px rgba(0,0,0,0.45)"
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        tokens.colors.surface,
        tokens.radius.lg,
        tokens.shadow.soft,
        "border",
        tokens.colors.border,
        "p-8",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export default Card

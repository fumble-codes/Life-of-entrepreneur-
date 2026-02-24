import type { ReactNode } from "react"
import { tokens } from "../../design-system/tokens"
import { cn } from "../../lib/cn"

type ContainerProps = {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn(tokens.spacing.container, className)}>
      {children}
    </div>
  )
}

export default Container

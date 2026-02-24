import { tokens } from "../../design-system/tokens"

export function Footer() {
  return (
    <footer
      className={`
        relative
        
        ${tokens.colors.background}
        border-t border-white/5
      `}
    >
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Top row */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              {/* Logo placeholder */}
              <div
                className="
                  h-10 w-10
                  rounded-full
                  border border-white/20
                  bg-white/5
                "
              />
              <span
                className={`
                  text-lg
                  font-semibold
                  ${tokens.typography.serif}
                  ${tokens.colors.textPrimary}
                `}
              >
                Life Of{" "}
                <span className={tokens.colors.neonGold}>
                  An Entrepreneur
                </span>
              </span>
            </div>

            <p
              className={`
                mt-4
                text-sm
                leading-relaxed
                ${tokens.colors.textMuted}
              `}
            >
              A practical skill-building ecosystem designed to help you grow
              confidence, income, and leadership in the real world.
            </p>
          </div>

          {/* Navigation */}
          <nav className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm md:grid-cols-3">
            {[
              "The Problem",
              "Skills",
              "Pricing",
              "Membership",
              "Curriculum",
              "Contact",
            ].map((item) => (
              <a
  href="#"
  className="
    relative
    text-sm
    text-white/70
    transition-all
    duration-300
    hover:text-[#FFD84D]
  "
>
  {item}

  {/* underline */}
  <span
    className="
      pointer-events-none
      absolute
      left-0
      -bottom-1
      h-[1px]
      w-0
      bg-[#FFD84D]
      transition-all
      duration-300
      group-hover:w-full
    "
  />
</a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-white/5" />

        {/* Bottom row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Life Of An Entrepreneur. All rights reserved.
          </p>

          <div className="flex items-center gap-8 text-xs text-white/50">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Subtle gold floor glow */}
      <div
        aria-hidden
        className={`
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-[260px]
          w-[260px]
          -translate-x-1/2
          ${tokens.colors.neonGold}
          opacity-[0.08]
          blur-[140px]
        `}
      />
    </footer>
  )
}

export default Footer
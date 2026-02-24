import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { tokens } from "../../design-system/tokens"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Detect scroll for glass background
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = ["The Problem", "Skills", "Pricing", "Membership"]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass layer */}
      <motion.div
        animate={{
          opacity: scrolled ? 1 : 0,
          backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="
          absolute inset-0
          bg-black/40
          border-b border-white/10
          pointer-events-none
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex h-[72px] items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full border border-white/20" />
            <span className="text-sm font-medium text-white/90">
              Life Of{" "}
              <span className={tokens.colors.neonGold}>
                An Entrepreneur
              </span>
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{
                  color: "#FFD84D",
                  textShadow: "0 0 18px rgba(255,216,77,0.85)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="
                  text-[12px]
                  tracking-widest
                  uppercase
                  text-white/70
                "
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#FFD84D",
              color: "#000",
              boxShadow: "0 0 30px rgba(255,216,77,0.75)",
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              hidden md:inline-flex
              px-5 py-2
              rounded-full
              border border-[#FFD84D]
              text-[12px]
              font-semibold
              tracking-widest
              uppercase
              text-[#FFD84D]
              bg-transparent
            "
          >
            Get Started
          </motion.button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((p) => !p)}
            className="md:hidden text-white text-xl"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              md:hidden
              absolute top-full left-0 right-0
              bg-black/90
              backdrop-blur-xl
            "
          >
            <div className="px-6 py-8 space-y-6 text-center">
              {links.map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  onClick={() => setOpen(false)}
                  whileHover={{
                    color: "#FFD84D",
                    textShadow: "0 0 18px rgba(255,216,77,0.85)",
                  }}
                  className="
                    block
                    text-sm
                    tracking-widest
                    uppercase
                    text-white/80
                  "
                >
                  {item}
                </motion.a>
              ))}

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255,216,77,0.75)",
                }}
                className="
                  mt-4
                  inline-flex
                  px-6 py-3
                  rounded-full
                  bg-[#FFD84D]
                  text-black
                  font-semibold
                  tracking-widest
                  uppercase
                "
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
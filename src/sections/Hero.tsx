import { motion, AnimatePresence, type Variants } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "../components/ui/Button"
import { tokens } from "../design-system/tokens"

const words = ["Learn Skills", "Build Confidence", "Earn Money"]

/* ================================
   Feature Card Animations (TSX-safe)
================================ */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.42, ease: "easeOut", delay: 0.16 },
  },
}

const titleVariants: Variants = {
  hidden: { y: "120%" },
  show: {
    y: "0%",
    transition: { duration: 0.5, ease: "easeOut", delay: 0.08 },
  },
}

const descVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: "easeOut", delay: 0.12 },
  },
}

/* ================================
   Hero Component
================================ */

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((p) => (p + 1) % words.length)
    }, 2200)
    return () => clearInterval(i)
  }, [])

  return (
    <section
      className={`
        relative
        min-h-screen
        overflow-hidden
        ${tokens.colors.background}
      `}
    >
      {/* Top cone light */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className={`
            absolute top-[-28%] sm:top-[-22%] left-1/2
            h-[52vh] sm:h-[68vh]
            w-[48px] sm:w-[72px]
            -translate-x-1/2
            bg-[linear-gradient(
              to_bottom,
              rgba(255,255,255,0.95) 0%,
              rgba(255,255,255,0.45) 28%,
              rgba(0,0,0,0) 55%
            )]
            blur-[14px] sm:blur-[18px]
          `}
        />

        <div
          className={`
            absolute top-[-26%] sm:top-[-20%] left-1/2
            h-[56vh] sm:h-[72vh]
            w-[96px] sm:w-[140px]
            -translate-x-1/2
            ${tokens.effects.topLightCore}
            blur-[22px] sm:blur-[28px]
          `}
        />

        <div
          className={`
            absolute top-[-24%] sm:top-[-18%] left-1/2
            h-[60vh] sm:h-[76vh]
            w-[180px] sm:w-[260px]
            -translate-x-1/2
            ${tokens.effects.topLightSoft}
            blur-[36px] sm:blur-[48px]
          `}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 px-4 sm:px-6">
        <div className="mx-auto max-w-[960px] pt-[14vh] sm:pt-[18vh] text-center">
          {/* Eyebrow */}
          <motion.div
            animate={{
              opacity: [0.7, 0.9, 0.7],
              backgroundColor: [
                "rgba(255,255,255,0.04)",
                "rgba(255,255,255,0.08)",
                "rgba(255,255,255,0.04)",
              ],
            }}
            transition={{ duration: 3.6, ease: "easeInOut", repeat: Infinity }}
            className={`
              mx-auto mb-5 sm:mb-6 inline-flex
              px-3 sm:px-4 py-1 sm:py-1.5
              ${tokens.radius.pill}
              ${tokens.typography.eyebrow}
              text-white/85
              backdrop-blur-[6px]
              shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]
              text-xs sm:text-sm
            `}
          >
            Next Generation Training
          </motion.div>

          {/* Titles */}
          <h1
            className={`
              ${tokens.typography.display}
              ${tokens.colors.textPrimary}
              mb-1 sm:mb-2
              text-[clamp(2.2rem,8vw,3.5rem)]
            `}
          >
            THE LIFE OF
          </h1>

          <h2
            className={`
              ${tokens.colors.neonGold}
              ${tokens.typography.display}
              ${tokens.typography.serif}
              mb-3 sm:mb-4
              text-[clamp(2.4rem,9vw,3.8rem)]
            `}
          >
            AN ENTREPRENEUR
          </h2>

          {/* Flipping text */}
          <div className="relative h-9 sm:h-10 mb-5 sm:mb-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                className="absolute text-base sm:text-lg font-semibold text-white"
              >
                {words[index]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Paragraph */}
          <div className="mt-4 sm:mt-6 flex justify-center px-2">
            <p
              className={`
                max-w-[520px]
                text-center
                ${tokens.typography.body}
                ${tokens.colors.textMuted}
                text-sm sm:text-base
              `}
            >
              A degree alone cannot secure your future anymore. Real success comes
              from practical skills, smart guidance, and the right environment.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Button>Unlock Your Future Now</Button>
            <button className="text-white/80 text-sm hover:text-white transition">
              See Curriculum
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 CROSSED BELTS (PRESENT & UNCHANGED) */}
      <div className="relative mt-20 sm:mt-24 z-10">
        <div className="relative h-[72px] sm:h-[80px]">
          {/* Belt A */}
          <div className="absolute left-[-20%] sm:left-[-12%] right-[-20%] sm:right-[-12%] top-4 h-[24px] sm:h-[26px] rotate-[-1.4deg] bg-[linear-gradient(135deg,#FFF4B0,#FFD84D,#FFB800)] shadow-[0_0_60px_rgba(255,216,77,0.85)] overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
              className="flex w-max gap-10 sm:gap-12 px-8 sm:px-10 text-black text-[12px] sm:text-[13px] font-semibold leading-[26px]"
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i}>
                  Practical Skills ✦ Smart Guidance ✦ Right Environment
                </span>
              ))}
            </motion.div>
          </div>

          {/* Belt B */}
          <div className="absolute left-[-20%] sm:left-[-12%] right-[-20%] sm:right-[-12%] bottom-4 h-[24px] sm:h-[26px] rotate-[1.4deg] bg-[linear-gradient(135deg,#FFF4B0,#FFD84D,#FFB800)] shadow-[0_0_60px_rgba(255,216,77,0.75)] overflow-hidden">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
              className="flex w-max gap-10 sm:gap-12 px-8 sm:px-10 text-black text-[12px] sm:text-[13px] font-semibold leading-[26px]"
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i}>
                  Practical Skills ✦ Smart Guidance ✦ Right Environment
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature cards */}
      <div className="relative z-10 mt-20 sm:mt-24 pb-24 sm:pb-32">
        <motion.div
          className="mx-auto max-w-5xl px-4 sm:px-6 grid gap-5 sm:gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          {[
            { title: "Real Skills", desc: "No fluff. Just practical knowledge you can use today.", icon: "⦿" },
            { title: "Smart Guidance", desc: "Learn from those who have actually built businesses.", icon: "↗" },
            { title: "Proven Roadmap", desc: "A clear path to scaling your income and influence.", icon: "🛡" },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
              className="rounded-xl bg-[#0A0A0F] border border-white/5 px-5 sm:px-6 py-6 sm:py-7 text-center shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            >
              <div className="mb-4 flex justify-center">
                <motion.div
                  variants={iconVariants}
                  className="flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded-full bg-black text-[#FFD84D]"
                >
                  {card.icon}
                </motion.div>
              </div>

              <div className="overflow-hidden">
                <motion.h3
                  variants={titleVariants}
                  className="mb-2 text-sm font-semibold text-[#FFD84D]"
                >
                  {card.title}
                </motion.h3>
              </div>

              <motion.p
                variants={descVariants}
                className="text-sm text-white/65 leading-relaxed"
              >
                {card.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
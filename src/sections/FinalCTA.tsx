import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import { useRef, memo, useEffect } from "react"
import { tokens } from "../design-system/tokens"

import confidentVideo from "../assets/confident.mp4"
import understandingVideo from "../assets/understandingbusinessbetter.mp4"
import skillsVideo from "../assets/skills.mp4"
import leaderVideo from "../assets/leader.mp4"

const steps = [
  { title: "Speaking confidently in front of people", video: confidentVideo },
  { title: "Understanding business & money better", video: understandingVideo },
  { title: "Building multiple skills for higher income", video: skillsVideo },
  { title: "Becoming a leader instead of a follower", video: leaderVideo },
]

/* ----------------------------- */
/* Smart video (pauses offscreen) */
/* ----------------------------- */
const SmartVideo = memo(({ src }: { src: string }) => {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? el.play().catch(() => {}) : el.pause()
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      className="h-full w-full object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
})
SmartVideo.displayName = "SmartVideo"

/* ----------------------------- */
/* Main component */
/* ----------------------------- */
export function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const barHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section
      ref={sectionRef}
      className={`relative py-28 sm:py-40 overflow-hidden ${tokens.colors.background}`}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-20 sm:mb-32 max-w-3xl mx-auto text-center">
          <span className={`text-[11px] sm:text-xs tracking-[0.35em] uppercase ${tokens.colors.textMuted}`}>
            IMAGINE 6 MONTHS FROM NOW…
          </span>

          <h2
            className={`
              mt-4 sm:mt-6
              ${tokens.typography.display}
              ${tokens.typography.serif}
              uppercase
              ${tokens.colors.textPrimary}
              relative
              text-[clamp(2.2rem,7vw,4rem)]
            `}
          >
            <span className="relative z-10">
              YOUR LIFE LOOKS{" "}
              <span className={tokens.colors.neonGold}>DIFFERENT</span>
            </span>

            {/* Glow → CSS only */}
            <span
              aria-hidden
              className={`absolute inset-0 ${tokens.colors.neonGold} opacity-20 blur-[28px]`}
            />
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Desktop spine */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white/10 hidden sm:block">
            {!reduceMotion && (
              <motion.div
                style={{ height: barHeight }}
                className="w-full bg-gradient-to-b from-[#FFD84D] to-[#FFB800]"
              />
            )}
          </div>

          <div className="space-y-28 sm:space-y-56">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={step.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 60 }}
                  whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-140px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative grid gap-14 sm:gap-24 md:grid-cols-2"
                >
                  {/* MOBILE */}
                  <div className="relative sm:hidden flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black border border-[#FFD84D] text-[#FFD84D] text-sm font-semibold shadow-[0_0_14px_rgba(255,216,77,0.45)]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="mt-2 w-[2px] flex-1 bg-gradient-to-b from-[#FFD84D] to-transparent" />
                    </div>

                    <div className="flex flex-col gap-6 w-full">
                      <p className="text-[22px] font-semibold leading-tight text-white">
                        {step.title}
                      </p>

                      <div className="relative w-full max-w-[320px] aspect-video">
                        <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_center,rgba(255,216,77,0.35),transparent_70%)] blur-[50px]" />
                        <div className="relative h-full w-full rounded-[24px] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
                          <SmartVideo src={step.video} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DESKTOP NUMBER */}
                  <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-14 w-14 items-center justify-center rounded-full bg-black border border-[#FFD84D] text-[#FFD84D] text-lg font-semibold shadow-[0_0_26px_rgba(255,216,77,0.35)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* DESKTOP TEXT */}
                  <div className={`${isLeft ? "md:order-1" : "md:order-2"} hidden sm:block`}>
                    <p className="text-[28px] md:text-[32px] font-semibold leading-tight text-white">
                      {step.title}
                    </p>
                  </div>

                  {/* DESKTOP VIDEO */}
                  <div className={`${isLeft ? "md:order-2" : "md:order-1"} hidden sm:flex justify-center`}>
                    <div className="relative">
                      <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_center,rgba(255,216,77,0.35),transparent_70%)] blur-[80px]" />
                      <div className="relative h-[320px] w-[520px] rounded-[32px] overflow-hidden border border-white/10 shadow-[0_60px_160px_rgba(0,0,0,0.8)]">
                        <SmartVideo src={step.video} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="relative mt-24 sm:mt-32 mx-auto max-w-4xl text-center">
          <div
            aria-hidden
            className={`absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full ${tokens.colors.neonGold} opacity-[0.1] blur-[110px]`}
          />

          <h3
            className={`text-[26px] sm:text-[38px] md:text-[48px] leading-[1.05] font-semibold tracking-[-0.03em] uppercase ${tokens.typography.serif} ${tokens.colors.textPrimary}`}
          >
            Your growth starts with{" "}
            <span className={tokens.colors.neonGold}>one decision</span>
          </h3>

          <p className={`mt-3 text-[14px] sm:text-[15px] ${tokens.colors.textMuted}`}>
            Your future changes when your skills change.
          </p>

          <button
            className={`mt-8 inline-flex items-center justify-center px-10 sm:px-14 py-3.5 ${tokens.radius.pill} ${tokens.colors.neonGoldGradient} text-black text-[12px] font-semibold tracking-[0.24em] uppercase transition hover:scale-[1.04] hover:shadow-[0_0_70px_rgba(255,216,77,0.5)]`}
          >
            Join The Life Of An Entrepreneur Now
          </button>
        </div>
      </div>
    </section>
  )
}
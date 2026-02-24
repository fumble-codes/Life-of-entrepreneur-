import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useRef, memo, useEffect } from "react"
import { tokens } from "../design-system/tokens"

// Videos
import readingVideo from "../assets/reading.mp4"
import fearVideo from "../assets/fearofpublic.mp4"
import incomeVideo from "../assets/incomegrowth.mp4"
import confidenceVideo from "../assets/lackofconfidence.mp4"
import mentorVideo from "../assets/mentor.mp4"

const problems = [
  { text: "They learn theory but not real-world skills", video: readingVideo },
  { text: "No mentorship or support system", video: mentorVideo },
  { text: "Fear of communication & public speaking", video: fearVideo },
  { text: "No roadmap for income growth", video: incomeVideo },
  { text: "Lack of confidence, leadership & direction", video: confidenceVideo },
]

/* ----------------------------- */
/* Video: auto pause when hidden */
/* ----------------------------- */
const SmartVideo = memo(({ src }: { src: string }) => {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {})
        } else {
          el.pause()
        }
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
/* Main Section */
/* ----------------------------- */
export function TheProblem() {
  const progressRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: progressRef,
    offset: ["start end", "end start"],
  })

  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "100%"] : ["0%", "100%"]
  )

  return (
    <section
      className={`relative py-28 sm:py-40 overflow-hidden ${tokens.colors.background}`}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-3xl mb-24 sm:mb-40">
          <span className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-white/60">
            The Brutal Reality
          </span>

          <h2
            className={`
              mt-4 sm:mt-6
              ${tokens.typography.display}
              ${tokens.typography.serif}
              text-white
              text-[clamp(2.4rem,7vw,4rem)]
            `}
          >
            WHY MOST PEOPLE
            <br />
            <span className={tokens.colors.neonGold}>STAY STUCK</span>
          </h2>

          <p className="mt-6 sm:mt-8 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-white/70">
            Traditional education prepares you for a world that no longer exists.
          </p>
        </div>

        {/* Scroll Narrative */}
        <div ref={progressRef} className="relative">

          {/* Desktop spine (motion kept, very cheap) */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white/10 hidden sm:block">
            {!reduceMotion && (
              <motion.div
                style={{ height: progressHeight }}
                className="w-full bg-gradient-to-b from-[#FFD84D] to-[#FFB800]"
              />
            )}
          </div>

          <div className="space-y-28 sm:space-y-56">
            {problems.map((item, index) => {
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={item.text}
                  initial={reduceMotion ? false : { opacity: 0, y: 60 }}
                  whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-160px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative grid items-center gap-14 sm:gap-24 md:grid-cols-2"
                >
                  {/* Text */}
                  <div className={`${isLeft ? "md:order-1" : "md:order-2"} pl-6 sm:pl-0`}>
                    <div className="flex items-start gap-6 sm:gap-10">
                      <span className="text-[13px] sm:text-[15px] font-semibold tracking-widest text-[#FFD84D]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-[22px] sm:text-[30px] md:text-[36px] font-semibold leading-tight text-white">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {/* Video */}
                  <div className={`${isLeft ? "md:order-2" : "md:order-1"} flex justify-center`}>
                    <div className="relative">

                      {/* Glow → CSS only (no motion) */}
                      <div className="absolute inset-0 rounded-[32px] sm:rounded-[42px] bg-[radial-gradient(circle_at_center,rgba(255,216,77,0.35),transparent_65%)] blur-[70px]" />

                      <div className="relative h-[220px] sm:h-[300px] md:h-[360px] w-[320px] sm:w-[460px] md:w-[600px] rounded-[32px] sm:rounded-[42px] border border-white/10 bg-black overflow-hidden shadow-[0_70px_160px_rgba(0,0,0,0.8)]">
                        <SmartVideo src={item.video} />
                        <div className="absolute inset-0 rounded-[32px] sm:rounded-[42px] ring-1 ring-white/10" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
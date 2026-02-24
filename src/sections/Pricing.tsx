import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { tokens } from "../design-system/tokens"
import { Button } from "../components/ui/Button"
import {
  Gift,
  Video,
  UserCheck,
  Plane,
  RefreshCcw,
  Headphones,
  Crown,
  TrendingUp,
  GraduationCap,
  Lock,
} from "lucide-react"

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (v) => Math.round(v))

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    })
    return controls.stop
  }, [value])

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v.toLocaleString()
    })
  }, [])

  return <span ref={ref} />
}

export function Pricing() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: "-120px" })
  const [billing, setBilling] = useState<"standard" | "premium">("standard")

  return (
    <section
      ref={sectionRef}
      className={`
        relative
        min-h-screen
        py-24 sm:py-40
        ${tokens.colors.background}
      `}
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Ambient continuation glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute top-[-10%] left-1/2
            h-[120%] w-[320px] sm:w-[560px]
            -translate-x-1/2
            bg-[radial-gradient(circle,rgba(255,216,77,0.18),transparent_65%)]
            blur-[120px] sm:blur-[160px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 sm:mb-24">
          <h2
            className={`
              ${tokens.typography.display}
              ${tokens.typography.serif}
              ${tokens.colors.textPrimary}
              tracking-tight
              text-[clamp(2.2rem,7vw,3.6rem)]
            `}
          >
            CHOOSE YOUR{" "}
            <span className={tokens.colors.neonGold}>LEARNING PACK</span>
          </h2>

          <p
            className="
              mt-5 sm:mt-6
              max-w-[520px]
              text-center
              text-[14px] sm:text-[16px]
              leading-relaxed
              text-white/70
            "
          >
            Invest in yourself today. The ROI on skills is infinite.
          </p>

          {/* Toggle */}
          <div className="mt-8 sm:mt-10 flex rounded-full bg-white/5 p-1">
            {["standard", "premium"].map((t) => (
              <button
                key={t}
                onClick={() => setBilling(t as any)}
                className={`
                  px-4 sm:px-6 py-2 rounded-full text-sm transition
                  ${billing === t
                    ? "bg-[#FFD84D] text-black"
                    : "text-white/70 hover:text-white"}
                `}
              >
                {t === "standard" ? "Standard" : "Premium"}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
          {/* Learner */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            className="
              relative
              rounded-2xl
              border border-white/10
              bg-gradient-to-b from-white/5 to-transparent
              p-6 sm:p-10
              shadow-[0_30px_80px_rgba(0,0,0,0.6)]
              transition-shadow
              hover:shadow-[0_50px_120px_rgba(0,0,0,0.8)]
            "
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Learner’s Pack
            </h3>

            <div className="mt-5 sm:mt-6 text-3xl sm:text-4xl font-semibold text-white">
              ₹{inView && <CountUp value={billing === "standard" ? 5999 : 7999} />}
            </div>

            <p className="mt-5 sm:mt-6 text-white/70 text-sm sm:text-base">
              Perfect for beginners who want to start learning high-value skills
              and build confidence.
            </p>

            <ul className="mt-7 sm:mt-8 space-y-3 text-sm text-white/80">
              <li>Core Skill Modules</li>
              <li>Confidence Building Exercises</li>
              <li>Community Access</li>
              <li>Course Updates</li>
            </ul>

            <div className="mt-8 sm:mt-10">
              <Button className="w-full">Unlock Learner’s Pack</Button>
            </div>
          </motion.div>

          {/* Master */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10 }}
            className="
              relative
              rounded-2xl
              border border-[#FFD84D]/40
              bg-gradient-to-b from-[#FFD84D]/10 to-transparent
              p-6 sm:p-10
              shadow-[0_0_140px_rgba(255,216,77,0.18)]
            "
          >
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-[10px] sm:text-xs font-semibold tracking-widest text-black bg-[#FFD84D] px-3 sm:px-4 py-1 rounded-full">
              MOST RECOMMENDED
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Master’s Pack
            </h3>

            <div className="mt-5 sm:mt-6 text-3xl sm:text-4xl font-semibold text-[#FFD84D]">
              ₹{inView && <CountUp value={billing === "standard" ? 12999 : 15999} />}
            </div>

            <p className="mt-5 sm:mt-6 text-white/80 text-sm sm:text-base">
              Get complete access to all skill modules and advanced growth training.
            </p>

            <ul className="mt-7 sm:mt-8 space-y-3 text-sm text-white">
              <li>Full Practical Skill Training</li>
              <li>Advanced Learning Modules</li>
              <li>Deeper Mentorship Access</li>
              <li>Faster Growth Path</li>
              <li>Priority Support</li>
              <li>Mastermind Group Access</li>
            </ul>

            <div className="mt-8 sm:mt-10">
              <Button className="w-full">Unlock Master’s Pack</Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Membership — Continuous Growth */}
      <div className="mt-24 sm:mt-32 flex justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="
            relative
            w-full
            max-w-6xl
            rounded-3xl
            border border-[#FFD84D]/25
            bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent
            px-6 sm:px-10 py-10 sm:py-14
            shadow-[0_60px_140px_rgba(0,0,0,0.7)]
            overflow-hidden
          "
        >
          <div className="grid gap-12 sm:gap-14 md:grid-cols-2">

            {/* Left */}
            <div>
              <span className="text-xs tracking-[0.35em] uppercase text-[#FFD84D]">
                Continuous Growth
              </span>

              <h3
                className={`
                  mt-4
                  ${tokens.typography.display}
                  ${tokens.typography.serif}
                  text-white
                  text-[clamp(1.8rem,6vw,3rem)]
                `}
              >
                MONTHLY ACTIVE{" "}
                <span className={tokens.colors.neonGold}>QUALIFICATION</span>
              </h3>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-3xl sm:text-4xl font-semibold text-white">
                  ₹1,999
                </span>
                <span className="text-sm text-white/60 mb-1">/ Month</span>
              </div>

              <p className="mt-6 max-w-md text-[14px] sm:text-[16px] leading-relaxed text-white/70">
                Stay connected with continuous growth, upgrades, and exclusive
                opportunities that aren’t available to the general public.
              </p>

              <div className="mt-8 sm:mt-10">
                <button
                  className="
                    rounded-full
                    border border-[#FFD84D]
                    px-6 sm:px-8 py-3
                    text-sm
                    font-semibold
                    tracking-widest
                    uppercase
                    text-[#FFD84D]
                    transition
                    hover:bg-[#FFD84D]
                    hover:text-black
                  "
                >
                  Join Active Community
                </button>
              </div>
            </div>

            {/* Right */}
            <div
              className="
                rounded-2xl
                border border-white/10
                bg-white/[0.04]
                px-6 sm:px-8 py-8 sm:py-10
              "
            >
              <h4 className="mb-6 sm:mb-8 text-sm font-semibold tracking-wide text-white">
                Your Exclusive Benefits
              </h4>

              <ul className="grid gap-y-5 sm:gap-y-6 gap-x-8 md:grid-cols-2 text-[13px] sm:text-[14px] text-white/75">
                {[
                  { label: "Extra Referral Bonuses", icon: Gift },
                  { label: "Live Training & Support System", icon: Video },
                  { label: "Personal Mentorship & Guidance", icon: UserCheck },
                  { label: "Trips & Incentive Opportunities", icon: Plane },
                  { label: "New Updates & Skill Upgrades", icon: RefreshCcw },
                  { label: "Priority Support Access", icon: Headphones },
                  { label: "Meet & Greet with Founder & CEO", icon: Crown },
                  { label: "Roadmap to Financial Freedom", icon: TrendingUp },
                  { label: "Chance to Become a Trainer", icon: GraduationCap },
                  { label: "Access to Private Exclusive Zone", icon: Lock },
                ].map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-start gap-4">
                    <Icon
                      size={16}
                      className="mt-[2px] text-[#FFD84D]"
                      strokeWidth={2}
                    />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 sm:mt-10 text-center text-xs text-white/40">
                + Much more added every single month
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
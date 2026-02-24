import { motion } from "framer-motion"
import {
  Mic,
  MessageSquare,
  Users,
  Target,
  Briefcase,
  Landmark,
  TrendingUp,
  Megaphone,
  DollarSign,
  Brain,
  Handshake,
  Network,
} from "lucide-react"
import { tokens } from "../design-system/tokens"

const skills = [
  { title: "Communication Skills", icon: MessageSquare },
  { title: "Public Speaking", icon: Mic },
  { title: "Leadership Development", icon: Users },
  { title: "Goal Setting & Execution", icon: Target },
  { title: "Business Fundamentals", icon: Briefcase },
  { title: "Financial Awareness", icon: Landmark },
  { title: "Sales & Closing Skills", icon: TrendingUp },
  { title: "Marketing Strategies", icon: Megaphone },
  { title: "High Income Skills", icon: DollarSign },
  { title: "Human Psychology", icon: Brain },
  { title: "Negotiation", icon: Handshake },
  { title: "Networking", icon: Network },
]

export function SkillsGrid() {
  return (
    <section className={`relative py-40 ${tokens.colors.background}`}>
      <div className="mx-auto max-w-7xl px-6">

        {/* Section header */}
        <div className="mx-auto mb-24 max-w-3xl text-center">
          <span className="text-xs tracking-[0.35em] uppercase text-white/60">
            Curriculum
          </span>

          <h2
            className={`
              mt-6
              ${tokens.typography.display}
              ${tokens.typography.serif}
              text-white
            `}
          >
            WHAT YOU WILL{" "}
            <span className={tokens.colors.neonGold}>MASTER</span> INSIDE
          </h2>

          <p className="mt-8 text-[17px] leading-relaxed text-white/70">
            Our curriculum is built on one principle:{" "}
            <span className="text-white font-medium">Practicality.</span> We cut
            the fluff and give you the high-value skills the world pays for.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.03 }}
                className="
                  group
                  relative
                  rounded-xl
                  border border-white/5
                  bg-[#0A0A0F]
                  px-6 py-6
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_30px_80px_rgba(0,0,0,0.8)]
                "
              >
                {/* Icon */}
                <div
                  className="
                    mb-4
                    flex h-10 w-10 items-center justify-center
                    rounded-lg
                    border border-white/10
                    text-[#FFD84D]
                    transition
                    duration-300
                    group-hover:shadow-[0_0_30px_rgba(255,216,77,0.35)]
                  "
                >
                  <Icon size={20} strokeWidth={1.6} />
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-semibold text-white">
                  {skill.title}
                </h3>
              </motion.div>
            )
          })}
        </div>

{/* Bottom statement */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  className="
    relative
    mt-32
    rounded-2xl
    border border-[#FFD84D]/20
    bg-gradient-to-b from-white/5 to-transparent
    px-10 py-16
  "
>
  {/* Centered content spine */}
  <div className="mx-auto max-w-[720px] text-center">
    <h3 className="text-xl font-semibold text-white">
      REAL SKILLS <span className={tokens.colors.neonGold}>→</span> REAL RESULTS
    </h3>

    <p
      className="
        mt-6
        mx-auto
        max-w-[640px]
        text-center
        text-[16px]
        leading-relaxed
        text-white/70
      "
    >
      This is not just another course. This is a{" "}
      <span className={tokens.colors.neonGold}>
        practical skills-based learning ecosystem
      </span>{" "}
      designed to help you grow personally and financially.
    </p>
  </div>
</motion.div>

      </div>
    </section>
  )
}
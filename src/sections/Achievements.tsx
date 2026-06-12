import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import GlowOrb from "../components/GlowOrb";

const achievements = [
  {
    icon: Medal,
    stat: "Top 5",
    title: "Entelect University Cup Hackathon 2025",
    description: "Placed top 5 nationally against university teams across South Africa.",
  },
  {
    icon: Trophy,
    stat: "Top 3",
    title: "BMW IT Colloquium 2026",
    description: "Selected among the top 3 projects presented at the colloquium.",
    center: true,
  },
  {
    icon: Award,
    stat: "Full Colours",
    title: "Academic Full Colours Award",
    description: "Awarded by the University of Pretoria for academic excellence.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative z-10 py-14 sm:py-16">
      {/* pink/magenta glow centered behind the cards */}
      <GlowOrb
        color="pink"
        className="left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <SectionHeading>Achievements</SectionHeading>

        <div className="mt-16 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {achievements.map(({ icon: Icon, stat, title, description, center }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              // flanking cards first, center card enters last
              transition={{ delay: center ? 0.3 : i * 0.12, duration: 0.55, ease: "easeOut" }}
              className={`glass tilt-card rounded-3xl p-8 hover:border-white/20 ${
                center ? "md:scale-[1.04] md:shadow-[0_16px_48px_rgba(0,0,0,0.4)]" : ""
              }`}
            >
              <Icon size={36} className="mx-auto text-lavender" aria-hidden />
              <p className="mt-5 font-display text-5xl font-bold text-white">{stat}</p>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

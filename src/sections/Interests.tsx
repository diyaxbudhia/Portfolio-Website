import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import GlowOrb from "../components/GlowOrb";

const interests = [
  "AI & Machine Learning",
  "Natural Language Processing",
  "UI/UX Design",
  "Integration Development",
  "Backend Development",
];

export default function Interests() {
  return (
    <section
      id="interests"
      className="relative z-10 mx-auto max-w-5xl px-6 py-14 text-center sm:py-16"
    >
      <GlowOrb
        color="pink"
        className="left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2"
      />
      <SectionHeading>Areas of Interest</SectionHeading>

      <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
        {interests.map((label, i) => (
          <motion.button
            key={label}
            type="button"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
            className="glass tilt-card group relative rounded-2xl px-7 py-5 text-lg font-medium hover:border-white/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          >
            <span>{label}</span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

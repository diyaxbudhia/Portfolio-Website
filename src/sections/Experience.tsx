import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import GlowOrb from "../components/GlowOrb";

const roles = [
  {
    title: "Graduate Developer",
    company: "BMW IT Hub",
    dates: "2026 — 2027",
    description:
      "Building enterprise software within BMW's global IT organisation, working across integration and full-stack delivery.",
  },
  {
    title: "Co-Founder & Developer",
    company: "Street Smartz",
    dates: "2025 — 2026",
    description:
      "Mobile app empowering South African youth with local safety alerts and mentorship opportunities.",
  },
  {
    title: "Academic Mentor",
    company: "University of Pretoria",
    dates: "2024",
    description:
      "Assisted 30+ students in mastering computational logic and coding best practices.",
  },
  {
    title: "Participant & Builder",
    company: "Vodacom Code for a Girl Bootcamp",
    dates: "—",
    description:
      "Built responsive web pages using HTML and CSS, promoting women in tech.",
  },
];

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  // the amber line draws itself as the timeline scrolls through the viewport
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });

  return (
    <section id="experience" className="relative z-10 mx-auto max-w-5xl px-6 py-14 sm:py-16">
      <GlowOrb color="purple" className="-left-80 top-1/3 h-[700px] w-[700px]" />
      <SectionHeading>Experience</SectionHeading>

      <div ref={lineRef} className="relative mt-16">
        {/* timeline spine */}
        <div className="absolute left-4 top-0 h-full w-px bg-raised md:left-1/2" />
        <motion.div
          aria-hidden
          style={{ scaleY }}
          className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-aurora-pink via-aurora-purple to-dusk shadow-[0_0_12px_rgba(255,77,143,0.7)] md:left-1/2"
        />

        <div className="space-y-16">
          {roles.map((role, i) => {
            const left = i % 2 === 0;
            return (
              <div
                key={role.company}
                className={`relative flex md:w-1/2 ${
                  left ? "md:pr-12" : "md:ml-auto md:pl-12"
                } pl-12 md:pl-0 ${left ? "" : "md:pl-12"}`}
              >
                {/* node dot */}
                <span
                  className={`absolute top-7 h-3 w-3 rounded-full bg-aurora-pink shadow-[0_0_10px_rgba(255,77,143,0.9)] left-4 -translate-x-1/2 ${
                    left ? "md:left-auto md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"
                  }`}
                />
                <motion.article
                  initial={{ opacity: 0, y: 32, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="glass tilt-card w-full rounded-2xl p-7 hover:border-white/20"
                >
                  <h3 className="font-display text-2xl font-semibold">{role.title}</h3>
                  <p className="mt-1 font-mono text-sm text-lavender">
                    {role.company} · {role.dates}
                  </p>
                  <p className="mt-4 leading-relaxed text-secondary">{role.description}</p>
                </motion.article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

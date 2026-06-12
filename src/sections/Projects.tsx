import { motion } from "framer-motion";
import { ArrowUpRight, Folder } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import GlowOrb from "../components/GlowOrb";

type Project = {
  name: string;
  description: string;
  tags: string[];
  href: string;
};

// Curated GitHub projects — add or reorder freely.
const projects: Project[] = [
  {
    name: "weather-to-wear",
    description:
      "Web app that turns weather forecasts into a personal wardrobe consultant — AI-driven outfit suggestions from your own wardrobe, matched to real-time conditions and your style preferences.",
    tags: ["TypeScript", "AI", "Capstone"],
    href: "https://github.com/COS301-SE-2025/Weather-to-Wear",
  },
  {
    name: "structure-based-genetic-programming",
    description:
      "Genetic programming system that predicts electricity load for a given time of day from historical demand data, using structure-based program evolution.",
    tags: ["Python", "AI / ML", "Regression"],
    href: "https://github.com/diyaxbudhia/Structure-Based-Genetic-Programming-for-Regression",
  },
  {
    name: "mp8",
    description:
      "Software engineering group project built within the COS301 module at the University of Pretoria.",
    tags: ["Team Project", "COS301"],
    href: "https://github.com/COS301-SE-2025/MP8",
  },
  {
    name: "city-of-dreams",
    description:
      "C++ city-building simulation — buildings, utilities, transport, citizens, and taxation modelled with classic design patterns (COS214 group project).",
    tags: ["C++", "Design Patterns", "Simulation"],
    href: "https://github.com/COS214-Project-2024/Team-30",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-14 sm:py-16">
      <GlowOrb color="purple" className="-right-72 top-1/4 h-[650px] w-[650px]" />
      <SectionHeading>Projects</SectionHeading>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
            className="glass tilt-card group flex flex-col rounded-2xl p-6 text-left hover:border-white/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          >
            <div className="flex items-start justify-between">
              <Folder size={22} className="text-lavender" aria-hidden />
              <ArrowUpRight
                size={18}
                className="text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aurora-pink"
                aria-hidden
              />
            </div>

            <h3 className="mt-4 break-words font-mono text-sm font-medium text-primary">
              {project.name}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-lavender"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-10 text-center"
      >
        <a
          href="https://github.com/diyaxbudhia"
          target="_blank"
          rel="noreferrer"
          className="link-underline font-mono text-sm text-secondary hover:text-aurora-pink"
        >
          more on github →
        </a>
      </motion.p>
    </section>
  );
}

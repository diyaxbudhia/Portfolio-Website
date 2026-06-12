import { ReactNode } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import GlowOrb from "../components/GlowOrb";

type TerminalBlock = {
  command: string;
  output: ReactNode;
};

const blocks: TerminalBlock[] = [
  {
    command: "whoami",
    output: (
      <>
        BSc(Hons) Computer Science student at the University of Pretoria, and
        BSc Computer Science graduate.
      </>
    ),
  },
  {
    command: "cat about.txt",
    output: (
      <>
        Passionate about AI, Full-Stack Development, and UX-Driven Design.
        Advocate for clean, scalable code and user-centred digital experiences.
      </>
    ),
  },
  {
    command: "./street-smartz --info",
    output: (
      <>
        Co-founder of{" "}
        <a href="#experience" className="link-underline text-aurora-pink">
          Street Smartz
        </a>{" "}
        — a mobile app improving youth safety and mentorship access across
        South Africa.
      </>
    ),
  },
  {
    command: "echo $HOBBIES",
    output: <>drumming · creative arts · music · hiking</>,
  },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-14 sm:py-16">
      <GlowOrb color="purple" className="-left-72 top-1/4 h-[650px] w-[650px]" />
      <SectionHeading>About</SectionHeading>

      <div className="mt-14 grid grid-cols-1 items-center gap-12 md:grid-cols-[2fr_3fr]">
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass overflow-hidden rounded-xl"
        >
          {/* Preview-style title bar */}
          <div className="flex items-center border-b border-white/5 bg-white/[0.03] px-4 py-3">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            </div>
            <p className="flex-1 truncate text-center font-mono text-xs text-muted">
              diya-budhia.webp — Preview
            </p>
            {/* balances the traffic lights so the title stays centered */}
            <div className="w-[52px]" aria-hidden />
          </div>

          <img
            src="/img/portrait.webp"
            alt="Portrait of Diya Budhia"
            className="aspect-[4/5] w-full object-cover"
          />

          {/* Preview-style status bar */}
          <div className="border-t border-white/5 bg-white/[0.03] px-4 py-2.5 text-center font-mono text-xs text-lavender">
            Pretoria, South Africa
          </div>
        </motion.div>

        {/* mac terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass overflow-hidden rounded-xl"
        >
          {/* title bar */}
          <div className="flex items-center border-b border-white/5 bg-white/[0.03] px-4 py-3">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            </div>
            <p className="flex-1 text-center font-mono text-xs text-muted">
              diya@pretoria — zsh
            </p>
            {/* balances the traffic lights so the title stays centered */}
            <div className="w-[52px]" aria-hidden />
          </div>

          {/* terminal body */}
          <div className="space-y-5 p-6 text-left font-mono text-sm leading-relaxed sm:p-7">
            {blocks.map(({ command, output }, i) => (
              <motion.div
                key={command}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.18, duration: 0.45, ease: "easeOut" }}
              >
                <p>
                  <span className="text-[#28C840]">➜</span>{" "}
                  <span className="text-lavender">~</span>{" "}
                  <span className="text-primary">{command}</span>
                </p>
                <p className="mt-1.5 text-secondary">{output}</p>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: blocks.length * 0.18, duration: 0.4 }}
            >
              <span className="text-[#28C840]">➜</span>{" "}
              <span className="text-lavender">~</span>{" "}
              <span className="animate-blink text-primary">▍</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

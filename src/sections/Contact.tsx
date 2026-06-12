import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import GlowOrb from "../components/GlowOrb";

const methods = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "diyabudhia",
    href: "https://www.linkedin.com/in/diyabudhia",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "diya.budhia@gmail.com",
    href: "mailto:diya.budhia@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "diyaxbudhia",
    href: "https://github.com/diyaxbudhia",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-5xl px-6 pb-12 pt-14 text-center sm:pt-16"
    >
      <GlowOrb
        color="orange-purple"
        className="-bottom-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2"
      />
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-display text-5xl font-bold tracking-tight gradient-text sm:text-7xl"
      >
        Let&rsquo;s Build Something.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="mx-auto mt-6 max-w-xl text-lg text-secondary"
      >
        Open to graduate roles, collaborations, and good conversations about
        building things that matter.
      </motion.p>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {methods.map(({ icon: Icon, label, handle, href }, i) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            className="glass tilt-card rounded-2xl p-6 hover:border-white/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          >
            <Icon size={24} className="mx-auto text-lavender" aria-hidden />
            <p className="mt-3 font-medium">{label}</p>
            <p className="mt-1 truncate font-mono text-sm text-secondary">{handle}</p>
          </motion.a>
        ))}
      </div>

      {/* PLACEHOLDER: put your CV at public/cv/Diya-Budhia-CV.pdf */}
      <motion.a
        href="/cv/Diya-Budhia-CV.pdf"
        download
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative mx-auto mt-12 block w-full max-w-md overflow-hidden rounded-full bg-[linear-gradient(100deg,#FF4D8F,#A855F7)] px-8 py-4 text-lg font-semibold text-white transition-shadow hover:shadow-[0_0_48px_rgba(255,77,143,0.45)]"
      >
        <span className="relative z-10">Download CV</span>
        {/* looping shimmer sweep */}
        <span
          aria-hidden
          className="absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent_40%,rgba(255,255,255,0.35)_50%,transparent_60%)] bg-[length:200%_100%]"
        />
      </motion.a>

      {/* no border — the page is one continuous canvas */}
      <footer className="mt-24 pb-4 pt-8">
        <p className="font-mono text-sm text-muted">
          © 2025 Diya Budhia — Code. Debug. Create. Repeat.
        </p>
      </footer>
    </section>
  );
}

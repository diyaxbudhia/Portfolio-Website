import { Suspense, lazy } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Typewriter from "../components/Typewriter";
import GlowOrb from "../components/GlowOrb";
import { Lightning } from "../components/ui/hero-odyssey";

const MacBookScene = lazy(() => import("../components/MacBookScene"));

const NAME = "Diya Budhia";

export default function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const indicatorOpacity = useTransform(scrollY, [0, 120], [1, 0]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center overflow-visible"
    >
      {/* ── background: lightning beam, aurora glow, planet sphere ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        {/* pink/magenta ambient orb, top-right */}
        <GlowOrb color="pink" className="-right-40 -top-32 h-[700px] w-[700px]" />
        {/* aurora glow circle */}
        <div className="absolute left-1/2 top-[55%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-aurora-purple/25 via-aurora-pink/15 to-aurora-orange/10 blur-3xl" />

        {/* central lightning beam — purple at the top, orange at the base */}
        {!reduced && (
          <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2">
            <Lightning
              hueTop={275}
              hueBottom={385}
              xOffset={0}
              speed={1.4}
              intensity={0.5}
              size={2}
            />
          </div>
        )}

        {/* dissolve bridge: fades the glow atmosphere into the base canvas so
            the hero has no hard bottom edge */}
        <div className="absolute -bottom-[150px] left-0 z-[5] h-[300px] w-full bg-gradient-to-b from-transparent via-base/60 to-base" />
      </motion.div>

      {/* floating feature labels (desktop only) */}
      {/* <div className="relative z-10 hidden w-full max-w-6xl md:block">
        {[
          { name: "AI & ML", value: "research-minded", position: "left-0 top-44" },
          { name: "Full-Stack", value: "end to end", position: "left-[22%] top-28" },
          { name: "UI/UX", value: "design-driven", position: "right-[22%] top-28" },
          { name: "Integration", value: "systems thinking", position: "right-0 top-44" },
        ].map((item, i) => (
          <motion.div
            key={item.name}
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + i * 0.15, duration: 0.5, ease: "easeOut" }}
          >
            <FeatureItem {...item} />
          </motion.div>
        ))}
      </div> */}

      {/* ── main content, centered like the Odyssey layout ── */}
      <div className="relative z-20 flex w-full max-w-4xl flex-col items-center px-6 pt-0 text-center sm:pt-24">
        {/* <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-4 font-mono text-sm text-white sm:text-base"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.7)" }}
        >
          Junior Software Engineer
          <span className="animate-blink">_</span>
        </motion.p> */}

        <h1
          className="font-display font-bold leading-none tracking-tight text-white"
          style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
        >
          {NAME.split(" ").map((word, w, words) => (
            <span key={word} className="inline-block whitespace-nowrap">
              {word.split("").map((char, i) => {
                // global letter index keeps the stagger continuous across words
                const index =
                  words.slice(0, w).reduce((n, prev) => n + prev.length, 0) + i;
                return (
                  <motion.span
                    key={i}
                    className="inline-block text-white"
                    // luminous aurora halo: the name stays white and reads as
                    // lit by the page's ambient light, not gradient-filled
                    style={{
                      textShadow:
                        "0 0 20px rgba(255,77,143,0.35), 0 0 45px rgba(168,85,247,0.28), 0 0 90px rgba(255,140,66,0.18)",
                    }}
                    initial={
                      reduced
                        ? false
                        : { opacity: 0, y: 24, filter: "blur(8px)" }
                    }
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: 0.6 + index * 0.045,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
              {w < words.length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-6 h-8"
        >
          <Typewriter
            phrases={[
              "Full Stack Developer",
              "Integration Engineer",
              "UI/UX Engineer",
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="rounded-full bg-[linear-gradient(100deg,#FF4D8F,#A855F7)] px-7 py-3.5 font-medium text-white transition-shadow hover:shadow-[0_0_36px_rgba(255,77,143,0.45)]"
          >
            View My Work
          </a>
          {/* PLACEHOLDER: put your CV at public/cv/Diya-Budhia-CV.pdf */}
          <a
            href="/cv/Diya-Budhia-CV.pdf"
            download
            className="rounded-full px-7 py-3.5 font-medium text-aurora-pink transition-shadow [background:linear-gradient(#09090B,#09090B)_padding-box,linear-gradient(100deg,#A855F7,#FF4D8F,#FF8C42)_border-box] [border:1px_solid_transparent] hover:shadow-[0_0_32px_rgba(168,85,247,0.35)]"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.5 }}
          className="mt-7 flex items-center gap-5"
        >
          {[
            { href: "https://www.linkedin.com/in/diyabudhia", icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com/diyaxbudhia", icon: Github, label: "GitHub" },
            { href: "mailto:diya.budhia@gmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="text-secondary transition-all hover:text-aurora-pink hover:drop-shadow-[0_0_8px_rgba(255,77,143,0.6)]"
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── the MacBook centerpiece ── */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
        className="relative z-20 -mt-24 h-[380px] w-full max-w-5xl sm:-mt-28 sm:h-[500px] lg:h-[600px]"
      >
        <Suspense
          fallback={
            <div className="flex h-full items-center justify-center font-mono text-sm text-muted">
              loading scene…
            </div>
          }
        >
          <MacBookScene />
        </Suspense>
      </motion.div>

      {/* scroll indicator — fades as soon as scrolling starts */}
      <motion.div
        aria-hidden
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        style={{ opacity: indicatorOpacity }}
      >
        <motion.div
          animate={reduced ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-aurora-pink to-transparent"
        />
      </motion.div>
    </section>
  );
}

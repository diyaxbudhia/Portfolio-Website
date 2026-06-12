import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "interests", label: "Interests" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      // centering lives in framer's x, not a Tailwind translate class —
      // the entrance animation owns transform and would overwrite it
      style={{ x: "-50%" }}
      className="glass fixed left-1/2 top-5 z-40 max-w-[94vw] overflow-x-auto rounded-full px-2 py-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Section navigation"
    >
      <ul className="flex items-center gap-0.5">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`relative block rounded-full px-3 py-1.5 font-mono text-xs transition-colors sm:text-sm ${
                active === id
                  ? "text-white"
                  : "text-secondary hover:text-aurora-pink"
              }`}
            >
              {active === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-[linear-gradient(100deg,#FF4D8F,#A855F7)]"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

import { motion } from "framer-motion";

export default function SectionHeading({ children }: { children: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"
    >
      {children}
    </motion.h2>
  );
}

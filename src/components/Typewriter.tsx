import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** Cycles through phrases with a type / hold / delete rhythm. */
export default function Typewriter({ phrases }: { phrases: string[] }) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setText(phrases[0]);
      return;
    }
    const full = phrases[index];
    const delay = deleting ? 35 : text === full ? 2000 : 70;

    const timer = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(full.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, reduced]);

  return (
    <span className="font-mono text-lg text-secondary sm:text-xl">
      {text}
      <span className="animate-blink text-sunset-warm">▍</span>
    </span>
  );
}

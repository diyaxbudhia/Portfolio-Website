type OrbColor = "pink" | "purple" | "orange" | "orange-purple";

const gradients: Record<OrbColor, string> = {
  pink: "radial-gradient(circle, rgba(255,77,143,0.14) 0%, transparent 70%)",
  purple: "radial-gradient(circle, rgba(168,85,247,0.13) 0%, transparent 70%)",
  orange: "radial-gradient(circle, rgba(255,140,66,0.09) 0%, transparent 70%)",
  "orange-purple":
    "radial-gradient(circle, rgba(255,140,66,0.11) 0%, rgba(168,85,247,0.09) 45%, transparent 75%)",
};

/**
 * Ambient section glow: a full radial-gradient circle, absolutely positioned
 * behind content. The radial fade-to-transparent reads identically to a
 * blurred orb but costs nothing per frame (no filter).
 * Size and position come from className (e.g. "h-[700px] w-[700px] -left-64 top-10").
 */
export default function GlowOrb({
  color = "pink",
  className = "",
}: {
  color?: OrbColor;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute z-0 rounded-full ${className}`}
      style={{ background: gradients[color] }}
    />
  );
}

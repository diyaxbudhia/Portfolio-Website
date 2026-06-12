import SectionHeading from "../components/SectionHeading";
import GlowOrb from "../components/GlowOrb";
import { RadialScrollGallery } from "../components/ui/portfolio-and-image-gallery";

type Tech = { name: string; icon: string; category: string; blurb: string };

const dev = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}`;

const stack: Tech[] = [
  { name: "Python", category: "Language", icon: dev("python/python-original.svg"), blurb: "AI, scripting & data work" },
  { name: "Java", category: "Language", icon: dev("java/java-original.svg"), blurb: "OOP foundations" },
  { name: "C++", category: "Language", icon: dev("cplusplus/cplusplus-original.svg"), blurb: "Systems & algorithms" },
  { name: "JavaScript", category: "Language", icon: dev("javascript/javascript-original.svg"), blurb: "The language of the web" },
  { name: "TypeScript", category: "Language", icon: dev("typescript/typescript-original.svg"), blurb: "Typed, scalable JS" },
  { name: "React", category: "Frontend", icon: dev("react/react-original.svg"), blurb: "Component-driven UIs" },
  { name: "HTML5", category: "Frontend", icon: dev("html5/html5-original.svg"), blurb: "Semantic structure" },
  { name: "CSS3", category: "Frontend", icon: dev("css3/css3-original.svg"), blurb: "Responsive styling" },
  { name: "Node.js", category: "Backend", icon: dev("nodejs/nodejs-original.svg"), blurb: "Server-side JavaScript" },
  { name: "Express", category: "Backend", icon: dev("express/express-original.svg"), blurb: "Minimal API framework" },
  { name: "MongoDB", category: "Database", icon: dev("mongodb/mongodb-original.svg"), blurb: "Document storage" },
  { name: "MySQL", category: "Database", icon: dev("mysql/mysql-original.svg"), blurb: "Relational data" },
  { name: "Git", category: "Tools", icon: dev("git/git-original.svg"), blurb: "Version control" },
  { name: "Figma", category: "Design", icon: dev("figma/figma-original.svg"), blurb: "Interface design" },
  { name: "Canva", category: "Design", icon: dev("canva/canva-original.svg"), blurb: "Visual content" },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative isolate z-10 flex w-full flex-col items-center justify-center overflow-hidden pb-[120px] pt-14 sm:pt-16"
    >
      <GlowOrb color="orange" className="-right-72 top-1/3 h-[650px] w-[650px]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <SectionHeading>Tech Stack</SectionHeading>
        <p className="mt-4 font-mono text-sm text-lavender">
          scroll to spin the wheel ↓
        </p>
      </div>

      {/* plain block wrapper: GSAP's pin spacer is ignored when the pinned
          element's direct parent is display:flex, which lets later sections
          scroll up over the pinned wheel */}
      <div className="w-full">
      <RadialScrollGallery
        className="!min-h-[60vh]"
        baseRadius={520}
        mobileRadius={230}
        visiblePercentage={45}
        scrollDuration={2200}
      >
        {(hoveredIndex) =>
          stack.map((tech, index) => {
            const isActive = hoveredIndex === index;
            return (
              <div
                key={tech.name}
                /* solid translucent fill instead of .glass — backdrop-filter on
                   cards that transform every frame forces constant re-blurring */
                className={`w-[120px] rounded-2xl border border-white/[0.08] bg-[#141418]/95 p-4 text-center transition-all duration-500 sm:w-[150px] sm:p-5 ${
                  isActive
                    ? "border-white/25 shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
                    : ""
                }`}
              >
                <img
                  src={tech.icon}
                  alt=""
                  loading="lazy"
                  width={48}
                  height={48}
                  className={`mx-auto h-10 w-10 transition-all duration-500 sm:h-12 sm:w-12 ${
                    isActive
                      ? "drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
                      : ""
                  }`}
                />
                <p
                  className={`mt-3 truncate font-mono text-xs sm:text-sm ${
                    isActive ? "font-medium text-white" : "text-primary"
                  }`}
                >
                  {tech.name}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                  {isActive ? tech.blurb : tech.category}
                </p>
              </div>
            );
          })
        }
      </RadialScrollGallery>
      </div>
    </section>
  );
}

import Grain from "./components/Grain";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Interests from "./sections/Interests";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

// Scrolling is fully native — no smooth-scroll library. Anchor links use
// CSS scroll-behavior: smooth (see index.css); ScrollTrigger tracks native
// scroll on its own.
export default function App() {
  return (
    <>
      <Grain />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Interests />
        <TechStack />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

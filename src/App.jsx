import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import MainCanvas from "./components/three/MainCanvas";

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 3,
      smoothTouch: 0.1,
      effects: true,
      normalizeScroll: true,
    });
  });

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none">
        <MainCanvas />
      </div>

      <div id="smooth-wrapper" className="relative w-full overflow-hidden">
        <div id="smooth-content" className="relative w-full overflow-x-hidden">
          <NavBar />
          <Hero />
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;

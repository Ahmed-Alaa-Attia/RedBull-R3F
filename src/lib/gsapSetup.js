// src/lib/gsapSetup.js
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

// Register the plugins ONCE for the whole app (prevents tree-shaking in prod)
if (!gsap.core?.globals()?.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export { gsap, ScrollTrigger, SplitText };

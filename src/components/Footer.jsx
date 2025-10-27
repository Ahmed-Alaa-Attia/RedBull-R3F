import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CurvedLoop from "./CurvedLoop";

const Footer = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".main-footer",
          start: "center bottom",
          end: "bottom bottom",
        },
      })
      .from(".can-stagger", {
        opacity: 0,
        scale: 0,
        yPercent: 10,
        stagger: 0.05,
      });
  });

  return (
    <div
      className="w-screen h-dvh relative main-footer bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/pink_teal_starry_bg.png')" }}
    >
      {/* CANS */}
      <div className="w-full h-full relative z-20">
        <img
          src="./images/redbull1.png"
          alt=""
          className="absolute right-0 object-contain scale-50 can-stagger"
        />
        <img
          src="./images/redbull2.png"
          alt=""
          className="absolute left-0 object-contain scale-50 can-stagger"
        />
        <img
          src="./images/redbull3.png"
          alt=""
          className="absolute right-[320px] object-contain scale-50 can-stagger"
        />
        <img
          src="./images/redbull4.png"
          alt=""
          className="absolute left-[320px] object-contain scale-50 can-stagger"
        />
      </div>

      {/* TOP MARQUEE BAR (10% height) */}
      <div className="absolute left-0 right-0 top-0 h-[10%] bg-black/90 z-[60] overflow-hidden">
        <CurvedLoop
          marqueeText="CLASSIC ✦ SUGARFREE ✦ ZERO ✦ TROPICAL ✦ BLUE EDITION ✦"
          speed={0.5}
          curveAmount={0}
          interactive={false}
          className="w-full h-full"
        />
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-[10%] bg-black/90 z-[60] overflow-hidden">
        <CurvedLoop
          marqueeText="TRY THEM ALL • TRY THEM ALL • TRY THEM ALL • TRY THEM ALL •"
          speed={0.5}
          curveAmount={0}
          interactive={false}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Footer;

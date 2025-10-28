import { gsap, SplitText } from "@/lib/gsapSetup";
import { useGSAP } from "@gsap/react";
import CircularText from "./CircularText";

const Hero = () => {
  useGSAP(() => {
    const charSplit1 = new SplitText(".char-split1", { type: "chars" });
    const charSplit2 = new SplitText(".char-split2", { type: "chars" });
    const charSplit3 = new SplitText(".char-split3", { type: "chars" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".test-slide",
          start: "2% top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
      .to(".test-slide", {
        yPercent: 30,
        ease: "power1.inOut",
      });

    gsap.to(".text-circular", {
      rotation: 360,
      opacity: 1,
      duration: 2,
    });

    gsap
      .timeline()
      .from(charSplit1.chars, {
        duration: 1,
        opacity: 0,
        yPercent: 100,
        stagger: 0.05,
        ease: "power4.out",
      })
      .from(
        charSplit2.chars,
        {
          duration: 1,
          opacity: 0,
          yPercent: 100,
          stagger: 0.05,
          ease: "power4.out",
        },
        ">-=1"
      )
      .from(
        charSplit3.chars,
        {
          duration: 1,
          opacity: 0,
          yPercent: 100,
          stagger: 0.05,
          ease: "power4.out",
        },
        ">-=1.2"
      );
  });

  return (
    <div
      className="relative w-screen h-dvh overflow-hidden bg-cover bg-center bg-no-repeat test-slide"
      style={{
        backgroundImage: "url('/images/image.png')",
      }}
    >
      <div className="w-full h-full text-left flex justify-center flex-col ml-8">
        <div className="overflow-hidden char-split1">
          <h1 className="text-[11rem] text-red-600 uppercase font-extrabold leading-none tracking-tight">
            vitalizes
          </h1>
        </div>
        <div className="overflow-hidden char-split2">
          <h1 className="text-[11rem] text-red-600 uppercase font-extrabold leading-none tracking-tight">
            body and
          </h1>
        </div>
        <div className="overflow-hidden char-split3">
          <h1 className="text-[11rem] text-red-600 uppercase font-extrabold leading-none tracking-tight">
            mind.®
          </h1>
        </div>
      </div>

      <div className="absolute bottom-10 right-5 text-circular opacity-0">
        <CircularText
          text="REDBULL*GIVES*YOU*WINGS*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div>
    </div>
  );
};

export default Hero;

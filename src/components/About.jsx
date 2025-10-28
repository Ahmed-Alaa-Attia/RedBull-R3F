import { gsap, SplitText } from "@/lib/gsapSetup";
import { useGSAP } from "@gsap/react";

const About = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", { type: "words" });
    const secMsgSplit = SplitText.create(".secound-message", { type: "words" });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words,lines",
      linesClass: "paragraph-line",
    });

    gsap.to(".msg-text-scroll", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "circ.out",
      scrollTrigger: {
        trigger: ".message-content",
        start: "20% bottom",
      },
    });

    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      stagger: 0.6,
      ease: "power3.in",
      scrollTrigger: {
        trigger: ".message-content",
        start: "40% bottom",
        end: "70% bottom",
        scrub: true,
      },
    });

    gsap.to(secMsgSplit.words, {
      color: "#faeade",
      delay: 1,
      stagger: 0.6,
      ease: "power3.in",
      scrollTrigger: {
        trigger: ".message-content",
        start: "70% bottom",
        end: "90% bottom",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content",
        start: "73% bottom",
        end: "100% bottom",
        scrub: true,
      },
    });

    revealTl.from(paragraphSplit.words, {
      opacity: 0,
      rotate: 3,
      yPercent: 300,
      stagger: 0.01,
      ease: "power1.inOut",
    });
  });
  return (
    <section className="message-content bg-blue-600 min-h-dvh overflow-hidden flex justify-between items-center relative z-20">
      <div className="max-w-[60%] py-20 px-12 relative">
        <div
          style={{
            clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
          }}
          className="text-[4.5rem] font-bold uppercase tracking-[-.15vw] px-12 py-4 mb-8 text-center bg-yellow-300 text-red-600 rounded-lg max-w-3xl msg-text-scroll"
        >
          <h1>Feel The Energy</h1>
        </div>
        <div className="h-full">
          <div className="text-[4.5rem] font-bold uppercase leading-[9vw] tracking-[-.15vw] flex flex-col justify-center items-center">
            <h1 className="first-message leading-none max-w-7xl  text-[#faeade10]">
              WHEN THE LIGHTS GO GREEN, SO DOES YOUR HEART—FUEL
            </h1>

            <h1 className="secound-message leading-none max-w-7xl  text-[#faeade10]">
              IGNITE YOUR DRIVE AND PUSH BEYOND LIMITS
            </h1>
          </div>
        </div>

        <div className="mt-8">
          <div className="max-w-md overflow-hidden text-gray-400">
            <p>
              Rev up your rebel spirit and feed the adventure of life with
              RedBull, where you’re one chug away from epic nostalgia and
              fearless fun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

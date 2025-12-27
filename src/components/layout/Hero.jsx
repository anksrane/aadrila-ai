import {abstarctBg} from "../../assets";
import {Button} from "../index";
import {AnimatedCarousel} from "../index";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full flex justify-center"
    >
      {/* Background */}
      <img
        src={abstarctBg}
        alt="abstract background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Outer container (1440) */}
      <div className="w-full max-w-[1440px] px-4">
        {/* Inner container (1280) */}
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-20 md:py-28">
          
          {/* LEFT CONTENT */}
          <div className="sm:max-w-[560px] text-center sm:text-left">
            <p className="text-[28px] md:text-[48px] font-bold font-raleway gradient-text w-fit">
              AI-Powered
            </p>

            <h1 className="mt-2 text-[28px] md:text-[48px] leading-tight font-bold font-raleway text-[var(--color-text-darker)]">
              Document Automation<br />
              & Fraud Detection
            </h1>

            <p className="mt-4 text-[16px] text-[var(--color-text-grey)] font-manrope leading-relaxed">
              Enhance security, accuracy, and efficiency with our
              cutting-edge AI solutions for seamless document
              processing and fraud prevention.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center sm:justify-start">
              <Button variant="primary">
                Get a Demo
              </Button>

              <Button variant="primary">
                Explore Solutions
              </Button>
            </div>
          </div>

          {/* RIGHT ANIMATION HOLDER */}
          <div className="flex justify-center md:justify-start">
            <div className="w-[420px] md:w-[460px] h-[360px] md:h-[460px] overflow-hidden">
            {/* <div className="w-fit h-100"> */}
              {/* 🔹 You will inject animation here later */}
              <AnimatedCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
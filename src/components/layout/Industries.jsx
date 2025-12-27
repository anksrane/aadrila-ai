import {IndustryCard} from "../index";
import { motion } from "framer-motion";

import { Healthcare_Icon, Insurance_Icon, Lending_Icon, circle_bg_1 } from "../../assets";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
  }),
};

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative w-full flex justify-center py-16 md:py-24 scroll-mt-[88px]"
    >
      {/* Background shapes — to be added later */}
      <div className="absolute inset-0 -z-10 min-h-max pointer-events-none">
        <img
          src={circle_bg_1}
          alt=""
          className="absolute left-0 top-10 object-cover opacity-70"
        />
      </div>

      {/* Outer (1440) */}
      <div className="w-full max-w-[1440px] px-4">
        {/* Inner (1280) */}
        <div className="max-w-[1280px] mx-auto relative">
          
          {/* Section Heading */}
          <div className="flex justify-center sm:justify-start">
            <p className="text-[24px] gradient-text font-bold font-manrope w-fit text-center sm:text-left">
              AI-driven innovation for growth.
            </p>
          </div>

          <h2 className="text-center sm:text-left mt-1 mb-4 md:mb-0 text-[28px] md:text-[48px] font-semibold font-raleway text-[var(--color-text-dark)]">
            Industries We Empower
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center place-items-stretch absolute w-full">
            <IndustryCard
              as={motion.div}
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              icon={Insurance_Icon}
              title="Insurance"
              text="Automate claims processing with accurate document validation."
              className="border mt-0 lg:mt-[640px]"   
            />

            <IndustryCard
              as={motion.div}
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              icon={Lending_Icon}
              title="Lending"
              text="Ensure faster loan approvals with fraud detection and instant verification."
              className="border mt-0 lg:mt-[320px]"
            />

            <IndustryCard
              as={motion.div}
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              icon={Healthcare_Icon}
              title="Healthcare"
              text="Streamline patient record management and ensure compliance with HIPAA standards."
              className="border"         
            />
          </div>
        </div>
      </div>
    </section>
  );
}
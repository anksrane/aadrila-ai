import { Button } from "../index";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const textLeft = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } };
const textRight = { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } };

const imageLeft = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } };
const imageRight = { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } };

const listItem = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 }
};

export default function ProductFeatureBlock({
  badge,
  title,
  features = [],
  benefits = [],
  image,
  reversed = false,
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 py-12 md:py-20"
    >
      {/* TEXT SIDE */}
      <motion.div
        variants={reversed ? textRight : textLeft}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={reversed ? "md:order-2" : "md:order-1"}
      >
        <span className="inline-block px-[24px] py-[16px] rounded-[50px] btn-gradient text-white font-[20px] font-bold font-manrope mb-3">
          {badge}
        </span>

        <h3 className="text-[24px] md:text-[32px] font-bold font-raleway text-[var(--color-text-dark)]">
          {title}
        </h3>

        <p className="mt-4 font-bold font-raleway text-[18px] md:text-[20px] text-[var(--color-text-grey)]">
          Features:
        </p>
        <ul className="list-disc ml-5 space-y-1 mt-1 text-[16px] text-[var(--color-text-grey)] font-regular font-manrope">
          {features.map((f, i) => (
            <motion.li key={i} variants={listItem}>
              {f}
            </motion.li>
          ))}
        </ul>

        <p className="mt-4 font-bold font-raleway text-[18px] md:text-[20px] text-[var(--color-text-grey)]">
          Benefits:
        </p>
        <ul className="list-disc ml-5 space-y-1 mt-1 text-[16px] text-[var(--color-text-grey)] font-regular font-manrope">
          {benefits.map((b, i) => (
            <motion.li key={i} variants={listItem}>
              {b}
            </motion.li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-4">
          <Button variant="primary">Learn More</Button>
          <Button variant="primary">Schedule a Demo</Button>
        </div>
      </motion.div>

      {/* IMAGE SIDE */}
      <motion.div
        variants={reversed ? imageLeft : imageRight}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`flex justify-center ${
          reversed ? "md:order-1 md:justify-start" : "md:order-2 md:justify-end"
        }`}
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full rounded-[28px] shadow-lg object-cover"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        />
      </motion.div>
    </motion.div>
  );
}

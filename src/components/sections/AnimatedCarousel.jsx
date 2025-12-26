import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Invoice } from "../../assets/index";

const images = [Invoice, Invoice, Invoice];

export default function AnimatedCarousel() {
  const [index, setIndex] = useState(0);

    useEffect(() => {
      const t = setInterval(() => {
        setIndex((p) => (p + 1) % images.length);
      }, 3000);
      return () => clearInterval(t);
    }, []);

  const getPosition = (i) =>
    i === index
      ? "center"
      : i === (index + 1) % images.length
      ? "right"
      : "left";

  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="relative w-full max-w-[900px] h-[220px] sm:h-[300px] md:h-[380px] flex items-center">
        {images.map((src, i) => {
          const pos = getPosition(i);

          return (
            <motion.div
              key={i}
              className={`${pos === "center" && "z-20"} absolute`}
              initial={false}
              animate={{
                scale: pos === "center" ? 1.1 : 0.85,
                x: pos === "center" ? 0 : pos === "left" ? -160 : 160,
                opacity: pos === "center" ? 1 : 0.6,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                left: "50%",
                // top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={src}
                className={`rounded-2xl object-cover ${
                  pos !== "center" && "blur-sm"
                }`}
                style={{
                  /* keep original aspect ratio 250x375 */
                  width:
                    pos === "center"
                      ? "clamp(200px, 34vw, 250px)"
                      : "clamp(150px, 26vw, 200px)",
                  height:
                    pos === "center"
                      ? "clamp(300px, 50vw, 375px)"
                      : "clamp(225px, 40vw, 300px)",
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const partners = [
  { id: 1, name: "Microsoft", logo: "/images/microsoft1.png" },
  { id: 2, name: "Amazon", logo: "/images/amazon.png" },
  { id: 3, name: "Google", logo: "/images/google.png" },
  { id: 4, name: "IBM", logo: "/images/ibm.png" },
  { id: 5, name: "Oracle", logo: "/images/oracle.png" },
  { id: 6, name: "Salesforce", logo: "/images/salesforce.png" },
  { id: 7, name: "Adobe", logo: "/images/adobe.png" },
  { id: 8, name: "SAP", logo: "/images/sap.png" },
];

export default function Partners() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent"
          >
            Our Trusted Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            We collaborate with industry leaders to bring you the best technology solutions and services.
          </motion.p>
        </div>

        {/* Rotating Partner Logos */}
        <div className="relative w-full overflow-hidden py-10">
          <div
            className="flex space-x-8 scrolling-wrapper"
            style={{
              animation: "scrollLeft 40s linear infinite",
              display: "flex",
              gap: "2rem",
              width: "max-content",
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-none w-40 h-20 bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Static Grid of Partners */}

      </div>

      {/* CSS for Smooth Scrolling */}
      <style jsx>{`
        @keyframes scrollLeft {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

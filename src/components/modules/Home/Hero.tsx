"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center hero-bg overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.26, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 text-red-600 rounded-full text-sm font-medium">
                <Sparkles size={16} />
                #1 Food Delivery Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
              variants={fadeUp}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              Your Favorite Food,{" "}
              <span className="text-gradient">Delivered Fast</span>
            </motion.h1>
          </div>

          {/* Hero Image */}
          <motion.div
            className="relative w-full h-full"
            variants={fadeUp}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="relative h-full">
              <Image
                width={600}
                height={600}
                src="/hero-food.jpg"
                alt="Delicious food spread"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              {/* Floating card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl border border-border"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">ðŸš€</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Fast Delivery
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Order is on the way!
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

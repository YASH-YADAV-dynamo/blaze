"use client";
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center mt-[-3.5rem] ">
      <div
        className=" min-h-screen 
      bg-[radial-gradient(85%_564px_at_50%_0%,rgba(140,205,196,0.35),transparent)] 
      md:bg-[radial-gradient(25%_564px_at_50%_0%,rgba(140,205,196,0.35),transparent)] 
      flex  items-center justify-center"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{ backgroundImage: `url('/assets/background2.png')` }}
        />

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-2 relative z-10  flex justify-center flex-col items-center">
          <div className="md:text-center sm:text-left ">
            <h1 className="text-[clamp(4rem,18vw,12rem)] font-poppins font font-bold text-white tracking-tight md:mx-auto sm:mx-0  leading-[4.75rem] md:leading-none mb-12 md:mb-16">
              Cyromics
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.2,
                delay: 0.2,
                ease: "circInOut",
                type: "spring",
                stiffness: 30,
                damping: 20,
              }}
            >
            <p className=" text-center text-[clamp(1rem,4vw,1.35rem)] font-poppins mt-[-2.5rem] text-white mb-4 max-w-[756px] md:mx-auto sm:mx-0 sm:pr-4">
              on-chain digital reader for believers
            </p>
            </motion.div>

            
          </div>
          <Link href="/marketplace" >
          <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.2,
                delay: 0.3,
                ease: "circInOut",
                type: "spring",
                stiffness: 30,
                damping: 20,
              }}
            >
          <button className="md:mt-6 text-sm  bg-[#F88509] text-white px-4 py-2 rounded-md w-[137px] h-[41px] block">
              Read Comics
            </button>
            </motion.div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

"use client";
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import HeroSection from "@/components/home/home";
import { motion } from "framer-motion";
import Link from "next/link";

// import { currentUser } from "@clerk/nextjs/server";
const HomePage = async () => {
  //   const user = await currentUser();

  return (
    <div className=" scrollbar-hide size-full">
      <HeroSection />

      {/* Our work */}
      <MaxWidthWrapper>
        <div className="min-h-screen py-16" id="ourwork">
          <div className="flex flex-col justify-between items-start py-6">
            <div className="flex gap-4 items-center flex-row ">
              <p className="text-4xl font-bold">Great range of comics</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.2,
                delay: 0.1,
                ease: "circInOut",
                type: "spring",
                stiffness: 30,
                damping: 20,
              }}
            >
              <p className="max-w-full py-6 text-xl font-normal">
                At <span className="text-orange">Cyro Studios</span>, we
                understand how valuable your time is. That&apos;s why we focus
                on delivering streamlined and captivating storytelling. Whether
                it&apos;s comics or short films, our skilled team handles
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-between items-center py-6">
            <AnimationContainer delay={0.2}>
              <img
                src="/assets/home/blaise.png"
                className="w-full h-auto object-cover"
                alt=""
              />
            </AnimationContainer>
            <AnimationContainer delay={0.4}>
              <img
                src="/assets/home/blank.png"
                className="w-full h-auto object-cover"
                alt=""
              />
            </AnimationContainer>
            <AnimationContainer delay={0.6}>
              <img
                src="/assets/home/blank.png"
                className="w-full h-auto object-cover"
                alt=""
              />
            </AnimationContainer>
            <AnimationContainer delay={0.8}>
              <img
                src="/assets/home/blank.png"
                className="w-full h-auto object-cover"
                alt=""
              />
            </AnimationContainer>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Copyright Section */}
      <MaxWidthWrapper>
        <div className="min-h-screen py-16" id="ourwork">
          <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-8 xl:gap-32 py-6">
            <div>
              <div className="mb-4">
                <p className="text-4xl font-bold">Copyright your work</p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                  ease: "circInOut",
                  type: "spring",
                  stiffness: 30,
                  damping: 20,
                }}
              >
                <p className="max-w-full py-6 text-xl font-normal">
                  At <span className="font-semibold">Cyro Studios</span>, we
                  understand how valuable your time is. That&apos;s why we focus
                  on delivering streamlined and captivating storytelling.
                  Whether it&apos;s comics or short films, our skilled team
                  handles everything—from concept and scriptwriting to design
                  and production—so you can enjoy the results without the hassle
                  of overseeing every detail.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.2,
                  delay: 0.1,
                  ease: "circInOut",
                  type: "spring",
                  stiffness: 30,
                  damping: 20,
                }}
              >
                <p className="max-w-full py-6 text-xl font-normal">
                  Concept and scriptwriting to design and production—so you can
                  enjoy the results without the hassle of overseeing every
                  detail.
                </p>
              </motion.div>
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
                <Link href="/marketplace">
                  <button
                    className=" p-3 py-2 rounded-md w-[185px] font-semibold text-lg"
                    style={{
                      borderImageSource:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0) 100%)",
                      background:
                        "radial-gradient(68.04% 300.23% at 30.28% 22.92%, #F9C61F 0%, #F85507 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                  >
                    Start creating
                  </button>
                </Link>
              </motion.div>
            </div>

            <div className="md:px-16 xl:px-0">
              <img
                src="/assets/home/homecopyright.png"
                className="w-full h-auto object-cover p-0  xl:p-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePage;

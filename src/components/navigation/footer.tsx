import { AnimationContainer, Icons } from "@/components";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="hidden md:flex flex-col relative items-center justify-center  pt-8 pb-[-18vh] overflow-y-clip px-6 w-full max-w-full md:max-w-screen-2xl md:px-12 lg:px-24 mx-auto lg:pt-16 bg-[#191919] ">
        <div className="grid gap-8 xl:grid-cols-2 md:grid-cols-2 xl:gap-8 w-full md:pb-4 lg:pb-0">
          <AnimationContainer delay={0.1}>
            <div className="flex flex-col items-start justify-start md:max-w-[300px]">
              <img src="/assets/logofull.png" className="py-4 w-[160px]" alt="" />
              <p className=" mt-4 text-base text-start">
                Sam & Drac Enterprise, Uttar Pradesh, India - 243122
              </p>
            </div>
            <AnimationContainer delay={0.4}>
              <div className="flex flex-row gap-6 mt-4">
                <Link href="https://x.com/cyro_studios"><img src="/assets/x.svg" className="py-4" alt="" /></Link>
                {/* <img src="/assets/discord.svg" className="py-4" alt="" /> */}
                <img src="/assets/tele.svg" className="py-4" alt="" />
              </div>
            </AnimationContainer>
          </AnimationContainer>
          {/* <div className="gap-8 flex flex-col md:flex-row mt-4 xl:mt-0 justify-end  text-base md:text-xs lg:text-base">
            <AnimationContainer delay={0.2}>
              <div className="">
                <Link href="#about">
                  <h3 className="font-medium text-white">About</h3>
                </Link>
              </div>
            </AnimationContainer>
            <AnimationContainer delay={0.3}>
              <div className="mt-10 md:mt-0 flex flex-col">
                <Link href="#ourwork">
                  <h3 className="font-medium text-white">Our Work</h3>
                </Link>
              </div>
            </AnimationContainer>
            <AnimationContainer delay={0.4}>
              <div className="">
                <Link href="#partners">
                  <h3 className="font-medium text-white">Partners</h3>
                </Link>
              </div>
            </AnimationContainer>
            <AnimationContainer delay={0.5}>
              <div className="mt-10 md:mt-0 flex flex-col">
                <Link href="#team">
                  <h3 className="font-medium text-white">Team</h3>
                </Link>
              </div>
            </AnimationContainer>
          </div> */}
        </div>
        <div>
          <p className="md:hidden lg:block lg:text-[16vh] lg:mb-[-10vh] xl:mb-[-14vh] 2xl:mb-[-18vh] xl:text-[22vh] 2xl:text-[26vh] mb-[-18vh] font-bold opacity-[0.08]">
            Cyromics
          </p>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className=" md:hidden flex flex-col relative justify-center  pt-2 pb-[-18vh] overflow-y-clip px-6 w-full max-w-full md:max-w-screen-2xl md:px-12 lg:px-24 mx-auto lg:pt-16 bg-[radial-gradient(95%_564px_at_50%_0%,rgba(250,137,6,0.25),transparent)]">
        <div className="grid gap-8 xl:grid-cols-2 xl:gap-8 w-full justify-start ">
          
          {/* <div className="gap-8 flex flex-row  mb-8  justify-center items-end">
            <AnimationContainer delay={0.2}>
              <div className="">
                <h3 className="text-sm font-medium text-white">Our Work</h3>
              </div>
            </AnimationContainer>
            <AnimationContainer delay={0.3}>
              <div className="mt-10 md:mt-0 flex flex-col">
                <h3 className="text-sm font-medium text-white">About</h3>
              </div>
            </AnimationContainer>
            <AnimationContainer delay={0.4}>
              <div className="">
                <h3 className="text-sm font-medium text-white">Partners</h3>
              </div>
            </AnimationContainer>
            <AnimationContainer delay={0.5}>
              <div className="mt-10 md:mt-0 flex flex-col">
                <h3 className="text-sm font-medium text-white">Team</h3>
              </div>
            </AnimationContainer>
          </div> */}
        </div>
        <div>
          <div className="mb-16">
            <AnimationContainer delay={0.1}>
              <div className="flex flex-col items-start justify-start md:max-w-[300px]">
                <img src="/assets/logofull.png" className="py-4  w-[160px]" alt="" />
                <p className=" mt-4 text-base text-start">
                Sam & Drac Enterprise, Uttar Pradesh, India - 24312
                </p>
              </div>
              <AnimationContainer delay={0.4}>
                <div className="flex flex-row gap-6 mt-4">
                  <img src="/assets/x.svg" className="py-4" alt="" />
                  <img src="/assets/discord.svg" className="py-4" alt="" />
                  <img src="/assets/tele.svg" className="py-4" alt="" />
                </div>
              </AnimationContainer>
            </AnimationContainer>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

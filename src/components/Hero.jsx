import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className="w-full h-screen bg-[#f1f1f1] pt-1">
      <div className="txt mt-44 px-14 uppercase">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex gap-3">
                {index === 1 && (
                  <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className="w-[9vw] rounded h-[5.4vw] relative -top-[1.2vw] bg-red-400 overflow-hidden">
                    <img
                      className="bg-cover w-full h-full"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="flex items-center uppercase text-[8.5vw] leading-[6.3vw] font-bold text-[#212121]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] mt-24 border-slate-400 flex justify-between items-center py-3 px-14">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="font-medium tracking-tight leading-none text-md">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="py-1 px-4 border-[1px] rounded-full border-black font-normal text-md uppercase">
            start the project
          </div>
          <div className="w-9 h-9 border-[1px] rounded-full border-black flex items-center justify-center ">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

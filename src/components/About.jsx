import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-speed="-.11" className="w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className='para font-["Neue Montreal"] text-[4vw] leading-[4.1vw] tracking-normal'>
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain commplex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] border-[#869c39] mt-20 pt-10">
        <div className="approach w-1/2">
          <h1 className="text-6xl">Our approach:</h1>
          <button className="flex items-center gap-10 px-6 py-4 mt-6 bg-zinc-900 uppercase text-white rounded-full">Read More
            <div className="w-3 h-3 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#a2bc43]"></div>
      </div>
    </div>
  );
};

export default About;

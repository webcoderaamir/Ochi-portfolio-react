import { motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap/all";
import React from "react";

const Featured = () => {

  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({y: "0"})
  }

  const handleHoverEnd = (index) => {
    cards[index].start({y: "100%"})
  }

  return (
    <div className="w-full py-20 bg-[#f1f1f1]">
      <div className="w-full px-14 border-b-[1px] pb-6">
        <h1 className="ftr text-[3.7vw]">Featured projects</h1>
      </div>

      <div className="px-14">

        <div className="cards w-full flex gap-4 mt-8">

          <motion.div onHoverStart={()=> handleHover(0)} onHoverEnd={()=> handleHoverEnd(0)} className="cardcontainer w-1/2 mt-5 relative">
            <h1 className="fyde absolute flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter font-bold text-[#cdea68] z-[9] text-8xl overflow-hidden">
              {"FYDE".split("").map((item, index) => (<motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}} className="inline-block z-[9]">{item}</motion.span>))}
            </h1>

            <div className="flex items-center gap-2">
            <div className="w-[.8vw] h-[.8vw] rounded-full bg-orange-300"></div>
            <h1 className="trw text-md uppercase">fyde</h1>
            </div>
            <div className="cardcontainer2 w-full h-[85vh] mt-3 overflow-hiddden">
                <motion.div  whileHover={{ scale: .96 }} whileTap={{ scale: 1 }} className="card w-full h-full bg-green-300 rounded-2xl overflow-hidden">
                    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </motion.div>
            </div>
          </motion.div>

          <motion.div onHoverStart={()=> handleHover(1)} onHoverEnd={()=> handleHoverEnd(1)} className="cardcontainer w-1/2 mt-5 relative">
          <h1 className="fyde absolute flex right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter font-bold text-[#cdea68] z-[9] text-8xl overflow-hidden">
          {"VISE".split("").map((item, index) => (<motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}} className="inline-block">{item}</motion.span>))}
          </h1>
            <div className="flex items-center gap-2">
            <div className="w-[.8vw] h-[.8vw] rounded-full bg-orange-300"></div>
            <h1 className="trw text-md uppercase">vise</h1>
            </div>
            <div className="cardcontainer2 w-full h-[85vh] mt-3">
                <motion.div whileHover={{ scale: .96 }} whileTap={{ scale: 1 }} className="card w-full h-full bg-green-300 rounded-2xl overflow-hidden">
                    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Featured;

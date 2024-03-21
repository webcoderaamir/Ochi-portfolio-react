import { motion } from 'framer-motion'
import React from 'react'

const Ochi = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]'>
        <div className='text border-t-[1px] border-b-[1px] border-zinc-500 text-white flex gap-8 whitespace-nowrap'>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: "linear", duration: 10, repeat: Infinity}} className='text-[25vw] leading-none font-semibold uppercase pt-5 -mb-[7.5vw]'>We are Ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: "linear", duration: 10, repeat: Infinity}} className='text-[25vw] leading-none font-semibold uppercase pt-5 -mb-[7.5vw]'>We are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Ochi
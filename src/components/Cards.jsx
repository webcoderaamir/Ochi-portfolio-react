import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex items-center px-14 gap-5 bg-[#f1f1f1]'>
        <div className="cardscontainer w-1/2 h-[55vh]">
            <div className="card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004d43]">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='cpy absolute left-10 bottom-10 px-5 py-1 border-[2px] rounded-full font-semibold border-[#98c15f] text-[#98c15f]'>©2020-2024</button>
            </div>
        </div>

        <div className="cardscontainer w-1/2 h-[55vh] flex gap-5">
            <div className="card relative w-full rounded-xl h-full flex items-center justify-center bg-[#212121]">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='cpy absolute left-10 bottom-10 px-5 py-1 border-[2px] rounded-full font-semibold text-white'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="card relative w-full rounded-xl h-full flex items-center justify-center bg-[#212121]">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='cpy absolute left-10 bottom-10 px-5 py-1 border-[2px] rounded-full font-semibold text-white'>BUISNESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
    </div>
  )
}

export default Cards


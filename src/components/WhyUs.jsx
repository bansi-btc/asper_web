import React from 'react'

const WhyUs = () => {
  return (
    <div className='bg-[#121212] wrapper box-border'>
        <div className="container max-w-[1200px] mx-auto relative">
        <h1 className='text-[#ce373e] text-4xl sm:text-5xl tracking-wide text-center py-4 font-semibold'>Why <span className='font-bold text-[#FF151F]'>CHOOSE US</span></h1>

        <div className='w-full flex flex-col xl:flex-row items-center justify-center gap-2 sm:gap-10 py-4 sm:py-[3rem] '>
            <div className='xl:w-[40%]  w-full group'>
            <div className='left w-[300px] h-[300px] mx-auto flex flex-col items-center justify-center relative z-[1] rounded-md'>
                    <img src="comm.webp" alt=""  className='h-full w-full absolute top-0 left-0 z-[-1] opacity-20 rounded-md'/>
                    <h1 className='text-[8rem] text-[#FF151F] font-bold leading-[7rem]'>12</h1>
                    <p className='text-[#FBFBFB] text-2xl font-bold'>Years experience</p>
            </div>
            </div>


            <div className='xl:w-[60%] w-full'>
            <div className="right flex flex-row items-center justify-center flex-wrap gap-3 lg:gap-7 w-full">

                <div className='h-[100px] w-[240px] sm:h-[120px] sm:w-[300px] bg-[#050505] flex flex-col items-center justify-center gap-2 hover:bg-[#121212] border-2 hover:border-[#FF151F] border-[#0b0b0b] transition-all duration-500 rounded-sm'>
                    <h1 className='text-4xl font-bold text-[#FF151F]'>60+</h1>
                    <p className='text-[#FBFBFB] text-xl'>Clients</p>
                </div>
                <div className='h-[100px] w-[240px] sm:h-[120px] sm:w-[300px] bg-[#050505] flex flex-col items-center justify-center gap-2
                hover:bg-[#121212] border-2 hover:border-[#FF151F] border-[#0b0b0b] transition-all duration-500 rounded-sm'>
                    <h1 className='text-4xl font-bold text-[#FF151F]'>25+</h1>
                    <p className='text-[#FBFBFB] text-xl'>XXXX</p>
                </div>
                <div className='h-[100px] w-[240px] sm:h-[120px] sm:w-[300px] bg-[#050505] flex flex-col items-center justify-center gap-2
                hover:bg-[#121212] border-2 hover:border-[#FF151F] border-[#0b0b0b] transition-all duration-500 rounded-sm'>
                    <h1 className='text-4xl font-bold text-[#FF151F]'>80+</h1>
                    <p className='text-[#FBFBFB] text-xl'>Completed Projects</p>
                </div>
                <div className='h-[100px] w-[240px] sm:h-[120px] sm:w-[300px] bg-[#050505] flex flex-col items-center justify-center gap-2
                hover:bg-[#121212] border-2 hover:border-[#FF151F] border-[#0b0b0b] transition-all duration-500 rounded-sm'>
                    <h1 className='text-4xl font-bold text-[#FF151F]'>10+</h1>
                    <p className='text-[#FBFBFB] text-xl'>Achivements</p>
                </div>
               
            </div>
            </div>
        </div>

        <div className="cards-container pb-[2rem]  w-full box-border flex flex-col items-center justify-center px-4 lg:flex-row gap-6 flex-wrap">
            <div className='h-[340px] sm:h-[300px] w-[320px]  relative z-[4] hover:bg-[#121212] rounded-md   transition-all duration-500 border-2 border-[#121212] hover:border-red-600 bg-[#050505]'>
                        <div className='z-[3] absolute p-5 h-full w-full text-[#EEEEEE] flex flex-col items-start justify-center space-y-4 duration-500 transition-all box-border '>
                            <div><i class="fa-solid fa-spray-can text-[#FF151F] fa-2xl"></i></div>
                            <h1 className='text-3xl font-bold'>UI DESIGN</h1>
                            <p className='text-xl font-semibold text-[#a8a7a7]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, maxime!</p>
                            <button className="relative z-[4] btn bg-[#FF151F] text-white text-base hover:text-[#FF151F] py-1 px-4 rounded-md group font-semibold">
                    <div className='h-full w-full absolute bg-white rounded-md top-0 left-0 z-[-1] scale-x-0 group-hover:scale-x-100 transition-all duration-200 origin-left'></div>
                    <div>KNOW MORE</div>
                    </button>
                        </div>
                    </div>
            <div className='h-[340px] sm:h-[300px] w-[320px]  relative z-[4] hover:bg-[#121212] rounded-md   transition-all duration-500 border-2 border-[#121212] hover:border-red-600 bg-[#050505]'>
                        <div className='z-[3] absolute p-5 h-full w-full text-[#EEEEEE] flex flex-col items-start justify-center space-y-4 duration-500 transition-all box-border '>
                            <div><i class="fa-solid fa-spray-can text-[#FF151F] fa-2xl"></i></div>
                            <h1 className='text-3xl font-bold'>UI DESIGN</h1>
                            <p className='text-xl font-semibold text-[#a8a7a7]'>Explore Artificial Intelligence and Machine Learning at Asper.</p>
                            <button className="relative z-[4] btn bg-[#FF151F] text-white text-base hover:text-[#FF151F] py-1 px-4 rounded-md group font-semibold">
                    <div className='h-full w-full absolute bg-white rounded-md top-0 left-0 z-[-1] scale-x-0 group-hover:scale-x-100 transition-all duration-200 origin-left'></div>
                    <div>KNOW MORE</div>
                    </button>
                        </div>
                    </div>
            <div className='h-[340px] sm:h-[300px] w-[320px]  relative z-[4] hover:bg-[#121212] rounded-md   transition-all duration-500 border-2 border-[#121212] hover:border-red-600 bg-[#050505]'>
                        <div className='z-[3] absolute p-5 h-full w-full text-[#EEEEEE] flex flex-col items-start justify-center space-y-4 duration-500 transition-all box-border'>
                            <div><i class="fa-solid fa-spray-can text-[#FF151F] fa-2xl"></i></div>
                            <h1 className='text-3xl font-bold'>UI DESIGN</h1>
                            <p className='text-xl font-semibold text-[#a8a7a7]'>Explore Artificial Intelligence and Machine Learning at Asper.</p>
                            <button className="relative z-[4] btn bg-[#FF151F] text-white text-base hover:text-[#FF151F] py-1 px-4 rounded-md group font-semibold">
                    <div className='h-full w-full absolute bg-white rounded-md top-0 left-0 z-[-1] scale-x-0 group-hover:scale-x-100 transition-all duration-200 origin-left'></div>
                    <div>KNOW MORE</div>
                    </button>
                        </div>
                    </div>
        </div>
    </div>
    </div>
  )
}

export default WhyUs
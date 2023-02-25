import React from 'react'

const Founders = () => {
  return (
    <div className='wrapper overflow-x-hidden bg-[#121212]'>

        <div className="container max-w-[1200px] mx-auto h-full">
            <h1 className='text-[#ff000d] text-4xl sm:text-5xl  text-center pt-8 pb-[2rem] sm:pb-[4rem] font-bold tracking-wider'>THE FOUNDING MEMBERS</h1>

            <div className="card-container pb-[2rem] flex flex-col lg:flex-row items-center justify-center gap-[3rem] flex-wrap">

                
                <div className="card bg-gradient-to-br from-black to-[#212121] w-fit py-4 px-14 flex flex-col items-center justify-center gap-[2rem] border-2 border-[#3d3c3c] rounded-md relative group z-[4] hover:border-[#FF151F] transition-all duration-500 origin-top">
                    <div className='h-full w-full absolute bg-gradient-to-br from-black to-[#121212] scale-y-0 transition-all duration-300 origin-top group-hover:scale-y-100 z-[-1] rounded-md'></div>
                    <div className=''>
                        <div className='rounded-full overflow-hidden w-[12rem] h-[12rem] group-hover:scale-[1.02] transition-all duration-500'><img src="UserImage.png" alt="" className='object-cover object-center rounded-full w-full'/></div>
                    </div>

                    <div className='Info flex flex-col items-center justify-center gap-[1.2rem] text-white group-hover:scale-[1.04] transition-all duration-500'>
                        <h1 className='text-3xl font-bold'>Name</h1>
                        <p className='text-xl font-semibold text-gray-300'>Post</p>
                        <p className='text-xl font-semibold text-gray-300'>Contact</p>
                        <div className='flex my-[1.2rem] flex-row items-center justify-center gap-[1.2rem] text-[#FF151F]'>
                        <a href="/"><i class="fa-brands fa-github fa-2xl"></i></a>
                        <a href="/"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                        <a href="/"><i class="fa-brands fa-instagram fa-2xl"></i></a>

                        </div>
                    </div>
                </div>
                <div className="card bg-gradient-to-br from-black to-[#212121] w-fit py-4 px-14 flex flex-col items-center justify-center gap-[2rem] border-2 border-[#3d3c3c] rounded-md relative group z-[4] hover:border-[#FF151F] transition-all duration-500 origin-top">
                    <div className='h-full w-full absolute bg-gradient-to-br from-black to-[#121212] scale-y-0 transition-all duration-300 origin-top group-hover:scale-y-100 z-[-1] rounded-md'></div>
                    <div className=''>
                        <div className='rounded-full overflow-hidden w-[12rem] h-[12rem] group-hover:scale-[1.02] transition-all duration-500'><img src="UserImage.png" alt="" className='object-cover object-center rounded-full w-full'/></div>
                    </div>

                    <div className='Info flex flex-col items-center justify-center gap-[1.2rem] text-white group-hover:scale-[1.04] transition-all duration-500'>
                        <h1 className='text-3xl font-bold'>Name</h1>
                        <p className='text-xl font-semibold text-gray-300'>Post</p>
                        <p className='text-xl font-semibold text-gray-300'>Contact</p>
                        <div className='flex my-[1.2rem] flex-row items-center justify-center gap-[1.2rem] text-[#FF151F]'>
                        <a href="/"><i class="fa-brands fa-github fa-2xl"></i></a>
                        <a href="/"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                        <a href="/"><i class="fa-brands fa-instagram fa-2xl"></i></a>

                        </div>
                    </div>
                </div>
                <div className="card bg-gradient-to-br from-black to-[#212121] w-fit py-4 px-14 flex flex-col items-center justify-center gap-[2rem] border-2 border-[#3d3c3c] rounded-md relative group z-[4] hover:border-[#FF151F] transition-all duration-500 origin-top">
                    <div className='h-full w-full absolute bg-gradient-to-br from-black to-[#121212] scale-y-0 transition-all duration-300 origin-top group-hover:scale-y-100 z-[-1] rounded-md'></div>
                    <div className=''>
                        <div className='rounded-full overflow-hidden w-[12rem] h-[12rem] group-hover:scale-[1.02] transition-all duration-500'><img src="UserImage.png" alt="" className='object-cover object-center rounded-full w-full'/></div>
                    </div>

                    <div className='Info flex flex-col items-center justify-center gap-[1.2rem] text-white group-hover:scale-[1.04] transition-all duration-500'>
                        <h1 className='text-3xl font-bold '>Name</h1>
                        <p className='text-xl font-semibold text-gray-300'>Post</p>
                        <p className='text-xl font-semibold text-gray-300'>Contact</p>
                        <div className='flex my-[1.2rem] flex-row items-center justify-center gap-[1.2rem] text-[#FF151F]'>
                        <a href="/"><i class="fa-brands fa-github fa-2xl"></i></a>
                        <a href="/"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                        <a href="/"><i class="fa-brands fa-instagram fa-2xl"></i></a>

                        </div>
                    </div>
                </div>
                
                
                
            </div>

            </div>
    </div>
  )
}

export default Founders
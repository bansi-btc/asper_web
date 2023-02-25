import React from 'react'
const Card = (props) => {
  return (
    
    <div className='card max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-center text-white
    py-3 lg:py-[2rem] px-[1rem] lg:px-[4rem] gap-[1rem] lg:gap-[4rem] rounded-lg transition-all duration-700 relative border border-gray-600 shadow-gray-900 shadow-lg box-border z-[4]'>
        {/* <div style={{backgroundImage : `url(Project1.png)`}} className='bg-center bg-cover absolute w-full h-full top-0 left-0 z-[-1] opacity-5 hidden sm:block'></div> */}
        <div style={{backgroundImage: 'url(cardbg2.jpg)'}} className='h-full w-full bg-black absolute z-[2] opacity-10 bg-center bg-cover'></div>

        <div style={{backgroundImage : `url(${props.img})`}} className="left h-[15rem] w-[15rem] lg:h-[30rem] lg:w-[30rem] object-cover object-center rounded-md bg-cover bg-center duration-500 ">
                {/* <img src={props.img} alt="" className='h-full w-full rounded-md transition-all duration-500'/> */}
        </div>

        <div className="right flex flex-col items-start justify-center w-full lg:w-[60%] gap-2 lg:gap-[2rem]">
            <p className='text-base sm:text-lg font-semibold'>{props.heading}</p>
            <div className="headings flex flex-col gap-1 sm:gap-3">
            <h1 className='text-2xl sm:text-3xl font-bold'>Heading</h1>
            <h1 className='text-2xl sm:text-3xl font-bold'>Info:</h1>
            </div>
            <p className='text-base sm:text-lg text-[#dadada]'>{props.para}</p>

            <div className="dates">
                <div className='Timings text-base sm:text-lg font-semibold'>{props.time}</div>
                <div className="date text-base sm:text-lg font-semibold">{props.date}</div>
            </div>

            <button className="relative z-[4] btn bg-[#FF151F] text-white text-base hover:text-[#FF151F] py-1 px-4 rounded-md group font-semibold" >
                    <div className='h-full w-full absolute bg-white rounded-md top-0 left-0 z-[-1] scale-x-0 group-hover:scale-x-100 transition-all duration-200 origin-left'></div>
                    <div className='text-sm sm:text-base'>KNOW MORE</div>
                    </button>


        </div>
    </div>
    
         
  )
}

export default Card
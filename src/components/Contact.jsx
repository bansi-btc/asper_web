import React from 'react'

const Contact = () => {
  return (
    <div className='wrapper bg-[#121212] overflow-x-hidden pb-[2rem]'>

      <div className="container max-w-[1200px] h-full w-full mx-auto xl:px-0 px-4">
      
      <h1 className='text-[#ff000d] text-4xl sm:text-5xl  text-center pt-8 pb-[2rem] sm:pb-[4rem] font-bold tracking-wider'>STAY IN TOUCH</h1>

      <div className='main-section w-full flex flex-row items-center justify-between bg-[#050505] px-[2rem] py-2 relative'>
      <div style={{backgroundImage: 'url(cardbg.jpg)'}} className='h-full w-full bg-black absolute z-[2] opacity-10 bg-center bg-cover top-0 left-0 sm:hidden'></div>

      <div className='flex flex-col items-start justify-start space-y-10 text-white text-xl font-bold w-full'>
        <div className="no mx-auto sm:mx-0">+91 36295-14783</div>

        <div className='flex flex-col items-start space-y-2 mx-auto sm:mx-0'>
          <p>XXXX XXXX XXXX</p>
          <p>UIT RGPV</p>
          <p>INDIA</p>
          <p>abcde@gmail.com</p>
          <div className="accounts flex flex-row items-center justify-start space-x-4">
            <a href="/"><i class="fa-brands fa-github "></i></a>
            <a href="/"><i class="fa-brands fa-linkedin"></i></a>
            <a href="/"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>

        <form action="" className='flex flex-col items-start space-y-4 w-full sm:w-[80%] lg:w-[60%]'>
          <input type="text" name="" id=""  placeholder='Type Here' className='bg-[#121212] text-lg font-light px-2 py-1 w-full'/>
          <button className="relative z-[4] btn bg-[#FF151F] text-white text-base hover:text-[#FF151F] py-1 px-4 rounded-md group font-semibold mx-auto sm:mx-0">
                    <div className='h-full w-full absolute bg-white rounded-md top-0 left-0 z-[-1] scale-x-0 group-hover:scale-x-100 transition-all duration-200 origin-left'></div>
                    <div>SEND</div>
                    </button>
        </form>
      </div>
      <img src="logo192.png" alt="" className='cursor-pointer w-[65rem] sm:block hidden'/>
      </div>
    </div>
    </div>
  )
}

export default Contact
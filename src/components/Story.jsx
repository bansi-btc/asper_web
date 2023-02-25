import React, {useState} from 'react'

const Story = () => {
  const [cnt, setcnt] = useState(0);

  const handlecnt= ()=>{
    setcnt(cnt => !cnt);
  }


  return (
    <div className='wrapper bg-[#121212] overflow-x-hidden'>

        <div className='container max-w-[1200px] h-full w-full mx-auto xl:px-0 px-4'>
        <h1 className='text-[#ff000d] text-4xl sm:text-5xl  text-center pt-8 pb-[2rem] font-bold tracking-wider'>OUR STORY</h1>

        <div className='h-[300px] w-full object-cover object-center  relative rounded-sm'>

            <div style={{backgroundImage: 'url(bg3.jpeg)'}} className='overflow-hidden h-full w-full rounded-md hidden sm:block bg-center bg-cover'></div>
            {/* <img src="bg3.jpeg" alt="" className='overflow-hidden h-full w-full rounded-md hidden sm:block'/> */}
            
            <img src="sq2.jpg" alt="" className='h-full lg:h-[90%] lg:absolute block sm:hidden lg:block top-[45%] left-[70%] rounded-md mx-auto animate-scaling sm:animate-none'/>
        </div>

        <div className={`w-full lg:w-[50%] py-10 flex flex-col items-start gap-4`}>

              <div className='h-8 w-8 bg-white text-black flex items-center justify-center font-bold text-2xl p-5 rounded-sm'>01</div>

              <div className='text-3xl font-semibold text-white'>In The Beginning</div>

              <p className={`text-base sm:text-lg text-gray-300`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla doloribus minima commodi sunt voluptate delectus nesciunt magni. Ab laboriosam temporibus odit recusandae tempora qui quis voluptatibus ea, nihil consequuntur mollitia.
              {cnt && <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et a molestias architecto doloribus culpa eligendi quaerat adipisci iusto beatae minima suscipit odit voluptatem doloremque quisquam consequatur ad, earum consectetur!</span>}
              </p>
              <button className="relative z-[4] btn bg-[#FF151F] text-white text-base py-1 px-4 rounded-md group font-semibold" onClick={handlecnt}>
                    {/* <div className='h-full w-full absolute bg-white rounded-md top-0 left-0 z-[-1] scale-x-0 group-hover:scale-x-100 transition-all duration-200 origin-left'></div> */}
                    <div>Read More</div>
                    </button>
        </div>
        </div>
    </div>
  )
}

export default Story
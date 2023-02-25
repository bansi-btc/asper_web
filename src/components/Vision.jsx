import React from 'react'

const Vision = () => {
  return (
    <div className='wrapper bg-[#121212]'>
        <div className="container max-w-[1200px] mx-auto h-full px-4 lg:px-0">

        <h1 className='text-[#FF151F] text-4xl sm:text-5xl  text-center pt-8 pb-[2rem] sm:pb-[4rem] font-bold tracking-wider'>OUR VISION</h1>
        
        <div className="content w-full h-full  flex flex-row items-center justify-center space-x-[8rem] pb-10 px-2">

            <div className="left text-gray-300 flex flex-col items-center lg:items-start justify-center gap-[2rem] text-base sm:text-lg tracking-wide">
                
                <p className='relative'>
                
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia facilis consequuntur doloribus dicta facere vero quae officia delectus quisquam non obcaecati laboriosam odio deserunt, consequatur qui fuga est sapiente fugiat ut, dolorum accusantium! Sapiente dignissimos dolores impedit veniam atque placeat nostrum dolor, quae hic cupiditate corporis voluptas nisi eos totam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam non ducimus commodi officiis explicabo sit temporibus rerum qui
                </p>
                
                <div className="card-container  flex flex-row justify-center flex-wrap items-center gap-3 sm:gap-[3rem] w-fit">

                <div className="card h-[300px] w-[230px] bg-[#FF151F] text-white flex flex-col items-center justify-center space-y-3 px-3 rounded-md py-4 hover:bg-[#050505] border-2 border-[#121212] hover:border-[#FF151F] group transition-all duration-500 relative z-[3]">

                    <div style={{backgroundImage: 'url(brain.jpg)'}} className='h-full w-full bg-black absolute z-[2] opacity-0 group-hover:opacity-10 bg-center bg-cover transition-all duration-500'></div>
                    
                    <div className='flex flex-col items-center justify-center gap-4 z-[1]'>
                    <i class="fa-sharp fa-solid fa-graduation-cap fa-2xl text-gray-200 animate-pulse group-hover:text-[#FF151F] transition-all duration-300"></i>
                    <h1 className='text-3xl font-semibold text-white'>Heading</h1>
                    </div>

                    <p className='text-base leading-5 text-white z-[10]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sit eligendi ab, minima deserunt saepe natus sed eveniet . Lorem ipsum dolor sit amet consectetur Lorem ipsum </p>
                </div>
                <div className="card h-[300px] w-[230px] bg-[#FF151F] text-white flex flex-col items-center justify-center space-y-3 px-3 rounded-md py-4 hover:bg-[#050505] border-2 border-[#121212] hover:border-[#FF151F] group transition-all duration-500 relative z-[3]">

                    <div style={{backgroundImage: 'url(brain.jpg)'}} className='h-full w-full bg-black absolute z-[2] opacity-0 group-hover:opacity-10 bg-center bg-cover transition-all duration-500'></div>
                    
                    <div className='flex flex-col items-center justify-center gap-4 z-[1]'>
                    <i class="fa-sharp fa-solid fa-graduation-cap fa-2xl text-gray-200 animate-pulse group-hover:text-[#FF151F] transition-all duration-300"></i>
                    <h1 className='text-3xl font-semibold text-white'>Heading</h1>
                    </div>

                    <p className='text-base leading-5 text-white z-[10]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sit eligendi ab, minima deserunt saepe natus sed eveniet . Lorem ipsum dolor sit amet consectetur Lorem ipsum </p>
                </div>
                
                
                
                </div>
                

            </div>

            <div className="right h-fit hidden lg:block">
                <div style={{backgroundImage: 'url(cc.jpeg)'}} className='h-[350px] w-[350px] bg-cover bg-center rounded-sm'></div>
            </div>
            

        </div>

        </div>
    </div>
  )
}

export default Vision
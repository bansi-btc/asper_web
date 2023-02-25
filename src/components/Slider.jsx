import React,{useState} from 'react'
import Card from './Card'

export const Slider = () => {
    
    


    const [cnt, setcnt] = useState(0);

    const handleadd= ()=>{
        let idx=(cnt+1)%slides.length;
        setcnt(idx);
    }
    const handlesub= ()=>{
        // let idx=(cnt+1)%slides.length;
        let idx=cnt-1;
        if(idx===-1){
          idx=slides.length-1;
        }
        setcnt(idx);
    }

    const slides=[
      <Card img="UserImage.png" heading="Community Meet" handlesub={handlesub} handleadd={handleadd} time="10:00 A.M - 12:00 P.M" date="Monday/september 2023" para="Data structures are the problem-solving pillars of coding. Learn all the foundational knowledge about all of the popular data structure that you need, to be well-versed in interviews."/>,
      <Card img="comm.webp" heading="Web Dev" handlesub={handlesub} handleadd={handleadd} time="09:00 A.M - 11:00 A.M" date="Thursday/October 2023" para="Ace the placement interviews by being knowledgeable in all well-known data structures, popular problem-solving methods, and core computer sciences."/>,
      <Card img="logo192.png" heading="Fun Activities" handlesub={handlesub} handleadd={handleadd} time="04:00 P.M - 07:00 P.M" date="Saturday/November 2023" para="Get access to hand-picked coding interview questions across categories & difficulty levels that will prepare you for every interview you would encounter."/>,
  ]
  return (
    <div className='wrapper flex flex-col items-center justify-center bg-black transition-all duration-500'>

      <div className="container flex flex-col items-center justify-center gap-3 lg:gap-[1.5rem] h-full bg-black transition-all duration-500 max-w-[1200px] mx-auto px-4 xl:px-0">

        <h1 className='text-[#ff000d] text-4xl sm:text-5xl  text-center pt-0 pb-4 lg:pb-[2rem] font-bold tracking-wider'>Latest Events</h1>
        {slides[cnt]}
        <div className='text-[#FF151F] text-3xl tracking-widest font-bold py-4'>{cnt+1}/{slides.length}</div>

        </div>

    </div>
    
  )
}

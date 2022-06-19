import React from 'react'

import Technology from "../assets/data/tech.json"

const About = () => {

  return (
    <div name='about' className='w-full h-full mx-auto bg-[#f8f1ff] text-232c33'>
      
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='mt-[100px]'>
          <p className='text-4xl pl-0 pr-2 font-bold inline border-b-4 border-branch'>About</p>
          <p className='py-4 text-spareDark leading-7 font-[500] text-md'>
          I am passionate about developing excellent design and software that improves the lives of those around me, 
          and I think learning is a never-ending process. 
          I like to follow new trends and technologies, learn about them and make projects.
          </p>
          <p className='py-4 text-spareLight font-[500]'> These are the technologies I've worked with</p>
        </div>

          
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
           {Technology.map((item, index) => (
             <div key={index}>
               <div className='shadow-sm shadow-spareLight hover:scale-110 duration-500'>
                 <div className="w-20 h-20 mx-auto flex justify-center items-center">
                  <img src={`${item.image}`} alt={item.text} className="mt-4" /> 
                  </div>
                 <p className='py-4 font-bold text-secondary'>{item.text}</p>
               </div>
             </div>
           ))}
          </div>
      </div>

    </div>

  )
}

export default About
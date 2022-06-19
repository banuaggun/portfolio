import React from 'react'

import Designs from "../assets/data/design.json"

const Design = () => {
  return (
    <div name='design' className='w-full h-full text-pink-500 bg-[#f8f1ff] mx-auto'>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='mt-[100px]'>
          <p className='text-4xl font-bold inline border-b-4 border-[#87bba2] text-[#232c33]'>
            Design
          </p>
          <p className='py-6 text-[#637e92] font-medium'>Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* grid item */}

          {Designs.map((item, index) => (
            <div 
              key={index} 
              style={{backgroundImage:`url(${item.image})`}} 
              className='shadow-sm shadow-spareLight group container rounded-md flex justify-center items-center mx-auto content-div'
            >
 
              {/* hover effects */}
              <div className='opacity-0 group-hover:opacity-100 text-center mx-6 mt-16'>
                
                <span className='text-lg font-bold tracking-wider text-spareDark mx-auto'>
                  {item.title}
                </span>
 
                <div className='mt-4'>
                  <a href={item.url} target="_blank" rel="noreferrer noopenner">
                    <button className='text-center rounded-lg py-4 px-24 m-2 font-bold text-lg bg-branch border-2  text-secondary'>
                      View
                    </button>
                  </a>
                </div>
              </div>
 
            </div>
          ))}


        </div>

      </div>
      
    </div>
  )
}

export default Design
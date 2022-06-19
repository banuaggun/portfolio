import React from 'react'

import Code from "../assets/data/coding.json"

const Coding = () => {
  return (
    <div name='coding' className='w-full h-full text-secondary bg-primary mx-auto'>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='mt-[100px]'>
          <p className='text-4xl font-bold inline border-b-4 border-branch'>
            Coding
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* grid item */}

          {Code.map((item, index) => (
            <div 
              key={index} 
              style={{backgroundImage:`url(${item.image})`}} 
              className='shadow-sm shadow-spareLight group container rounded-md flex justify-center items-center content-div'
            >
 
              {/* hover effects */}
              <div className='opacity-0 group-hover:opacity-100 text-center mt-16 mx-0'>
                
                <span className='text-lg font-bold tracking-wider mx-auto text-spareDark'>
                  {item.title}
                </span>
 
                <div className='mt-4'>
                  <a href={item.url1} target="_blank" rel="noreferrer noopenner">
                    <button className='text-center rounded-lg py-4 px-8 my-2 mx-2 font-bold text-lg bg-branch hover:bg-spareLight  text-secondary hover:text-primary'>
                      View
                    </button>
                  </a>
                  <a href={item.url2} target="_blank" rel="noreferrer noopenner">
                    <button className='text-center rounded-lg py-4 px-8 my-2 mx-2 font-bold text-lg bg-branch hover:bg-spareLight  text-secondary hover:text-primary'>
                      GitHub
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

export default Coding
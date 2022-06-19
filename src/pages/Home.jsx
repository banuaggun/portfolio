import React from 'react'
//import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-primary'>

      {/* Container */}

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-branch font-[700] text-2xl mt-[60px]'>Hi, I'm</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-secondary'>Banu AĞGÜN,</h1>
        <h2 className='text-xl sm:text-7xl font-medium text-spareDark text-left'>
          Ui & Ux Designer, Frontend Developer
        </h2>
        <p className='text-spareLight font-[600] py-4 leading-7 max-w-[700px]'>
          I'm a Ui/Ux Designer specializing in building (and occasionally coding) 
          exceptional design experiences. Currently, I'm focused on building user 
          interface design and responsive frontend web applications.
        </p>
        
        {/*
        <div>
          <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <Link to="/work">
            View Work 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span> 
            </Link>
            
          </button>
        </div>

  */}
      </div>
    </div>
  )
}

export default Home
import React, {useState, useEffect} from 'react'

import {Link, useLocation} from 'react-router-dom'

import navbar from '../assets/data/navbar.js'

import {FaBars, FaTimes, FaGithub, FaLinkedinIn, FaBehance, FaDribbble} from "react-icons/fa"
import Logo from "../assets/logo/logob.png"

 const Navbar = (props) => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = navbar.findIndex((item) => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center pl-4 pr-8 bg-primary text-secondary  font-medium shadow-md shadow-subBranch'>
      <div>
        <img src={Logo} alt='logo' style={{width:'200px', height:'80px'}} />
       
      </div>

      {/* menu */}
        <ul className='hidden md:flex justify-end'>
          <li>
            {navbar.map((nav, index) => (
              <Link to={nav.link} key={`nav-${index}`} className={`navbar__item ${activeIndex === index && "active"}`}>
                <div className="p-4 text-md inline-flex mx-2 justify-center items-center">
                {nav.text}
                </div>
              </Link>
            ))}
          </li>
        </ul>
      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
    
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>
      {/* mobile menu*/}
      <ul className={!nav ? 'hidden' : 'absolute font-medium top-0 left-0 w-full h-screen bg-primary text-secondary flex flex-col justify-center items-center'}>
        <li>
        {navbar.map((nav, index) => (
              <Link to={nav.link} key={`nav-${index}`} className={`navbar__item ${activeIndex === index && "active"}`}>
                <div className="p-4 text-md flex flex-col pr-4 justify-center items-center">
                {nav.text}
                </div>
              </Link>
            ))}
        </li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 navbar__item'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] font-medium duration-300 bg-[#0e76a8]'>
            <a href="https://www.linkedin.com/in/banuaggun/?locale=en_US" target="_blank" rel="noreferrer noopenner" className='flex justify-between items-center w-full text-[#f2f2f2]'>
              LinkedIn <FaLinkedinIn size={30} />
            </a>
          </li>
          
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] font-medium duration-300 bg-[#ea4c89]'>
            <a href="https://dribbble.com/banuaggun" target="_blank" rel="noreferrer noopenner" className='flex justify-between items-center w-full text-[#f2f2f2]'>
              Dribbble <FaDribbble size={30}  />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] font-medium duration-300 bg-[#053eff]'>
            <a href="https://www.behance.net/banuaggun" target="_blank" rel="noreferrer noopenner" className='flex justify-between items-center w-full text-[#f2f2f2]'>
              Behance <FaBehance size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] font-medium duration-300 bg-[#171515]'>
            <a href="https://github.com/banuaggun" target="_blank" rel="noreferrer noopenner" className='flex justify-between items-center w-full text-[#f2f2f2]'>
              GitHub <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
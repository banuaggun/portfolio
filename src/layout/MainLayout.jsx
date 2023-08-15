import React from 'react'

import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import '../index.css';

const MainLayout = () => {
  return (
    <>
      <div className='container'>
        <div className="layout">

          <Navbar/>

          <div className="page">
            
            <Outlet/>
     
          </div>
        </div>
      </div>

    </>
  )
}

export default MainLayout
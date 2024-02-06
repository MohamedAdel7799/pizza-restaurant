import React, { useRef } from 'react'
import Navbar from '../../components/navbar/navbar'
import Home from '../home/home'
import Ourchefs from '../our chef/ourchefs'
import Menu from '../menu/menu'
import Aboutus from '../about us/aboutus'
import Footer from '../../components/footer/footer'

function MainPage() {

    const home=useRef()
    const menu =useRef()
    const ourchefs =useRef()
    const help =useRef()
    const aboutus=useRef()

  return (
    <div className='mainpage'>
        <div>
           <Navbar home={home} menu={menu} ourchefs={ourchefs} help={help} aboutus={aboutus} />
        </div>
        <div ref={home}>
           <Home/>
        </div>
        <div ref={ourchefs}>
            <Ourchefs/>            
        </div>
        <div ref={menu}>
            <Menu/>
        </div>
        <div ref={aboutus}>
            <Aboutus/>         
        </div>
        <div ref={help}>
           <Footer/>
        </div>
      
        



    </div>
  )
}

export default MainPage
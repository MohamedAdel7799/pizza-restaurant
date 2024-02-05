import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Home from '../home/home'
import Ourchefs from '../our chef/ourchefs'
import Menu from '../menu/menu'
import Aboutus from '../about us/aboutus'
import Footer from '../../components/footer/footer'

function MainPage() {

    

  return (
    <div className='mainpage'>
        <div>
           <Navbar/>
        </div>
        <div>
           <Home/>
        </div>
        <div>
            <Ourchefs/>            
        </div>
        <div>
            <Menu/>
        </div>
        <div>
            <Aboutus/>         
        </div>
        <div>
           <Footer/>
        </div>
      
        



    </div>
  )
}

export default MainPage
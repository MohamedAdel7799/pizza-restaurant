import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import {motion, useScroll} from "framer-motion"
export default function Navbar(props) {



    const scroll=(e)=>{
        window.scrollTo({
          top:e.current.offsetTop,
          behavior:"smooth"
        });
       };
    
  const[signin,Setsignin]=useState('')
  useEffect(()=>{
    Setsignin(JSON.parse( localStorage.getItem('signin')))
  })
  const {scrollYProgress}=useScroll()

  return (
    <div>
        <motion.nav initial={{opacity:0,
        scale:0}}
        animate={{opacity:1,
        scale:1}}
        transition={{duration:1}}
        viewport={{once:true}}
    
        className="navbar navbar-expand-lg fixed-top " style={{}} >
            <div className="container-fluid d-flex ">
                <img className='mx-3 ' src={require('./pngegg (11).png')} style={{width:"60px "}}></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-light"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end     " id="navbarNav">
                <ul className="navbar-nav    ">
                    <li className="nav-item">
                    <Link className="nav-link text-light  "  href="#" onClick={()=>{
                        scroll(props.home)
                    }} >Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" href="#" onClick={()=>{
                        scroll(props.aboutus)
                    }}>About us </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" href="#" onClick={()=>{
                        scroll(props.menu)
                    }}>Menu</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" href="#" onClick={()=>{
                        scroll(props.home)
                    }} >Ourchefs</Link>
                    </li>
                   
                    <li className="nav-item">
                    <Link className="nav-link text-light" href="#" onClick={()=>{
                        scroll(props.help)
                    }} >Help</Link>
                    </li>
                  
                </ul>              
                </div>
                {
                    signin?(<div className='collapse navbar-collapse justify-content-end   ' id='navbarNav' >
                   
                   <div className='mx-3 my-sm-1 '><button className='btn signup text-light  px-3'
                   onClick={()=>{
                    localStorage.removeItem('signin')
                   }}>logout</button></div>
              
               </div>):(<div className='collapse navbar-collapse justify-content-end   ' id='navbarNav' >
                   
                   <div className='mx-3 my-sm-1 '><button className='btn signup text-light  px-3'><Link to='/signin' className=' text-decoration-none text-light  ' >Signin</Link></button></div>
                   <div className='mx-1 my-sm-2 '><button className='btn  px-2 text-light'><Link to='/signup' className=' text-decoration-none text-light  ' >Signup</Link></button></div>
              
               </div>)
                }
                
           
            </div>
            <motion.div className='line' style={{height:5, position:"fixed", scaleX:scrollYProgress , transformOrigin:'0%' , top:0 , left:0, right:0}}></motion.div>
        </motion.nav>
    </div>
  )
}

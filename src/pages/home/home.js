import React from 'react'
import './home.css'
import { AiFillForward } from "react-icons/ai";
import {motion} from 'framer-motion'
export default function Home() {
  return (
    <div>
        <div className='vh-100 main  py-5     shadow-lg d-grid '>
            <div className='row row-cols-lg-2   h-100 py-5  g-0 my-auto  row-cols-sm-2   '>
                <div className='col d-grid  '>
                    <div  className='my-5 mx-auto text-light '>
                      <div className= ' my-5  text-start '>
                        <motion.h1
                        initial={{scale:0 , opacity:0}}
                        animate={{
                          y:[-900,0],
                          scale:1,
                          opacity:1
                        }}
                      
                        transition={{
                          delay:0,
                          duration:0.6,
                          ease:"easeInOut"
                          
                        }}
                        > Your <span>Favourit</span>
                        </motion.h1>
                        <motion.h1 
                        initial={{scale:0 , opacity:0}}
                        animate={{
                          x:[-900,0],
                          scale:1,
                          opacity:1
                        }}
                      
                        transition={{
                          delay:0,
                          duration:0.8,
                          ease:"easeInOut"
                          
                        }}><span>Meals</span> Deliverd</motion.h1>
                        <motion.h2
                        initial={{scale:0 , opacity:0}}
                        animate={{
                          x:[900,0],
                          scale:1,
                          opacity:1
                        }}
                      
                        transition={{
                          delay:0,
                          duration:1.3,
                          ease:"easeInOut"
                          
                        }}> To you Doorstep </motion.h2>
                        <motion.h3 
                        initial={{scale:0 , opacity:0}}
                        animate={{
                          y:[900,0],
                          scale:1,
                          opacity:1
                        }}
                      
                        transition={{
                          delay:0,
                          duration:2,
                          ease:"easeInOut"
                          
                        }}><span>good food is a gift,Unwrap it with a Click</span></motion.h3>
                      </div>
                      <div className=' d-flex justify-align-align-content-around    '>
                         <motion.div  initial={{scale:0 , opacity:0}}
                        animate={{
                          y:[900,0],
                          scale:1,
                          opacity:1
                        }}
                      
                        transition={{
                          delay:0,
                          duration:3,
                          ease:"easeInOut"
                          
                        }} className='order'> <button className='btn px-4 text-light '> Order now {<AiFillForward/>}</button> </motion.div>
                         <motion.div  initial={{scale:0 , opacity:0}}
                        animate={{
                          y:[900,0],
                          scale:1,
                          opacity:1
                        }}
                      
                        transition={{
                          delay:0,
                          duration:3.5,
                          ease:"easeInOut"
                          
                        }} className='serve mx-5'> <button className='btn   text-light w-100  '> how we can serve you?</button></motion.div>
                      </div>
                    </div>
                </div>
                <div className='col d-grid '>
                    <motion.div  initial={{scale:0 , opacity:0}}
                        animate={{
                          y:[900,0],
                          scale:1,
                          opacity:1
                        }}
                      
                        transition={{
                          delay:0,
                          duration:2,
                          ease:"easeInOut"
                          
                        }} className='   '>
                    <img src={ require('./pngegg (5).png') } className=' img-fluid my-5 mx-5 ' style={{width:"400px"}}/>
                    </motion.div>

                </div>


            </div>
        </div>
    </div>
  )
}

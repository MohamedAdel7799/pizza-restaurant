import React, {  useEffect, useState } from 'react'
import {food} from './db'
import'./menu.css'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import {motion}from 'framer-motion'
export default function Menu() {
 
     const[data,Setdata]=useState([])

     useEffect(()=>{

        Setdata(food.pizza)
     })

     

  return (
    <div>
        <div className='title h-auto my-3 text-dark text-center '>
            <h1 className=' p-0 m-0 '> Best Special Menue </h1>
        </div>       
        <div className='container row g-3 my-3 row-cols-lg-4 row-cols-sm-2  mx-auto'>
      
            {data.slice(0,8).map((e)=>{
                return(
                    <motion.div variants={{hidden:{opacity:0},
                    show:{opacity:1, transition:{staggerChildren:0.25,} }}}
                     initial="hidden"
                     animate="show"
                    className='col meal   '>
                        <motion.div 
                        initial={{opacity:0, scale:0}}
                        whileInView={{
                            scale:1,
                            opacity:1,
                            
                        }} 
                         transition={{
                            duration:0.4,
                            delay:0.1
                         }}
                        className='card ' key={e.id}>
                            <div className='card-image h-75 w-100 '>
                                 <img src={e.image} className=' img-fluid '  ></img>
                            </div>
                            <div className='card-info py-3   '>
                                <div className='text-start text-light mx-3'>
                                    <h5>{e.name}</h5>
                                     <ReactStars
                                     count={5}
                                     size={26}
                                     Color="#ffd700"
                                     edit={false}
                                     value={5}
                                     />
                                    <h6> <span>{e.price} EP</span> </h6>
                                    <div className='text-center'>
                                       <button className='btn px-3 py-1  text-light  rounded-3   '
                                       onClick={()=>{
                                        localStorage.setItem('mypizza',JSON.stringify([e]))
                                       }}> <Link to={`/${e.id}`} className=' text-decoration-none text-danger ' > order now </Link></button>
                                    </div>                             
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )})}




        </div>
    </div>
  )
}

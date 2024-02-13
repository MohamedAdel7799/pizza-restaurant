import React, { useEffect, useState } from 'react'
import './myorder.css'
import { Link, useParams } from 'react-router-dom'
import {food} from './db'
import{motion} from 'framer-motion'

function Myorder() {

    const {id}=useParams()
    const [meals ,Setmeals]=useState([])  
    const [mypizza,Setpizza]=useState([])
    const [myorder,Setmyorder]=useState([])
    const [totalprice,Settotalprice]=useState([])
    

 
    

    useEffect(()=>{
        Setpizza(food.pizza)
    })



   


  return (
    <div className=' vh-auto  orderpage bg-dark py-5 '>
        <div className='my-auto  w-75 mx-auto  '>
        {
            mypizza.map((e)=>{

                if(e.id == id){
                    return(
                     
                        <motion.div    initial={{opacity:0,scale:0}}
                        whileInView={{opacity:1,scale:1}}
                        transition={{ duration:0.5}}
                        
                           className='row my-5 shadow-lg rounded-5 bg-light '>
                            <div className='row row-cols-lg-2 row-cols-sm-1'>
                                <div className='col text-center  '>
                                           <img src={e.image} className='img-fluid rounded-5 '  ></img>
                                </div>
                                <div className='col text-center  '>
                                    <div className='my-5'>
                                    <h4 className='title'>{e.name}</h4>
                                            <div className='mx-5 title  ' >
                                              <h5 className='text-start' >ingredients</h5>
                                              <ul className='text-start '>
                                                 {
                                                    e.ingredients.map((x)=>{
                                                        return(
                                                            <li className='fw-bold'>{x}</li>
                                                        )
                                                    })
                                                 }
                                              </ul>
                                            </div>
                                            <div className='price text-danger '>
                                                {e.price} EP
                                            </div>   
                                            <div> <button className='orderbutton  my-2 px-3 rounded-3 py-1 ' > Order Now</button>  </div>                                   
                                    </div>                                                                         
                                </div>
                            </div>                   
                        </motion.div>
                    
                    )} })}

            <div className='row  mx-auto py-2 text-center shadow-lg  rounded-5  '>
                <div className='py-2  w-75 mx-auto my-2   '>
                    <div className='d-flex justify-content-around w-75 mx-auto bg-light rounded-5 py-3 '>
        
                        <div className='text-light'>
                              <Link className=' text-decoration-none text-dark ' onClick={()=>{
                                Setmeals(food.pasta)
                              }} >pasta</Link>
                        </div>
                        <div className='text-light'>
                              <Link className=' text-decoration-none text-dark ' onClick={()=>{
                                Setmeals(food.salads)
                              }} >salads</Link>
                        </div>
                        <div className='text-light'>
                                <Link className=' text-decoration-none text-dark' onClick={()=>{
                                Setmeals(food.dessert)
                              }} >dessert</Link>                       
                        </div>
                        <div className='text-light'>
                              <Link className=' text-decoration-none text-dark '
                    onClick={()=>{
                        Setmeals(food.drinks)
                      }}>drinks</Link>                      
                        </div>
                        <div className='text-light'>
                              <Link className=' text-decoration-none text-dark ' onClick={()=>{
                                Setmeals(food.sauces)
                              }}>sauces</Link>
                        </div>
                        <div className='text-light'>
                             <Link className=' text-decoration-none text-dark ' onClick={()=>{
                                Setmeals(food.sides)
                              }}>sides</Link>
                        </div>
                    </div>
                </div>
                <div className=' mx-auto '>
                <div className='row ordermenu row-cols-lg-3 py-5 px-2 gx-2  gy-3 row-cols-sm-3  text-center  justify-content-center  '>
                    {
                     meals==''?(<h3 className='text-light'>Some delicious additions to your meal</h3>):(meals.map((e)=>{
                        return(
                           
                                
                                    <motion.div    initial={{opacity:0,scale:0}}
                                    animate={{opacity:1, scale:1}}
                                    transition={{ duration:0.6}}
                                    exit={{opacity:0 , scale:0}}
     className='col text-center  py-3 rounded-4   '>
                                        <div className='img   h-75 '  >
                                                <img src={e.image} className='img-fluid   ' style={{width:"200px"}} ></img>
                                        </div>
                                        <div className='info  py-2 '>

                                            <h4 className=''>{e.name}</h4>
                                            <h5>{e.price} EP</h5>
                                     
                                            <button className='orderbutton px-3 rounded-3 ' onClick={()=>{
                                                                Setmyorder([...myorder , e ])
                                                                localStorage.setItem('myorder',JSON.stringify(myorder))
                                                                Settotalprice([...totalprice ,  ]) 
                                                                }}>Add</button>                                                                                                                                                                       
                                        </div>
                                    </motion.div>            
                        )
                     }))
                    }
                     </div>
                </div>
                                          
            </div>
            <div className='mx-auto text-stert'>
              {
                          myorder.length == 0?(''):(<div className='text-center'>
                            <h1 className='ordertitle text-light  '> Your order  </h1>
                          </div>)
                        }
              </div>
            <div className='row  shadow-lg row-cols-lg-4 rounded-5  my-2   mx-auto  text-center '>
              
                              
                        { myorder.map((e)=>{

                            return(
                                <motion.div 
                                 
                                initial={{opacity:0,scale:0}}
                                animate={{opacity:1, scale:1}}
                                transition={{ duration:0.5}}
                                exit={{opacity:0 , scale:0}}

                                
                                className='col py-5 rounded-4 '>
                                  <div className='img h-75'>
                                     <img className='
                                      img-fluid ' src={e.image} style={{width:"200px"}} ></img>
                                  </div> 
                                  <div className='info py-2 '>
                                          <h6>{e.name}</h6>
                                          <h5>{e.price} EP</h5>
                                          
                                          <button className='orderbutton px-3 rounded-3    '  onClick={()=>{
                                          myorder.map((element)=>{
                                            if(element.name==e.name){
                                                myorder.splice(element,1)
                                                Setmyorder([...myorder]) }})
                                          }} > remove</button>
                                        
                                    </div>  
                                
                           
                            </motion.div>

                             
                            )
                     })} 
                   
                           
            </div>
            </div>
    </div>
  )
}

export default Myorder
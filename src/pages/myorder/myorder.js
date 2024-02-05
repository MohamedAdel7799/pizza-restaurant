import React, { useEffect, useState } from 'react'
import './myorder.css'
import { useParams } from 'react-router-dom'
import {food} from './db'

function Myorder() {


    const [mypizza,Setpizza]=useState([])
    useEffect(()=>{
        Setpizza(food.pizza)
    })

    const {id}=useParams()

  return (
    <div className=' d-grid vh-100 '>
        {
            mypizza.map((e)=>{

                if(e.id == id){
                    return(
                     <div className='container  my-auto '>
                        <div className='row '>
                            <div className='row row-cols-lg-2 row-cols-sm-1'>
                                <div className='col text-center  '>
                                           <img src={e.image} className='img-fluid'  ></img>
                                </div>
                                <div className='col text-center  '>
                                    <div className='my-5'>
                                    <h4>{e.name}</h4>
                                            <div className='mx-5 ' >
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
                                            <div className='fw-bold'>
                                                {e.price} EP
                                            </div>
                                        
                                    </div>                              
                                            
                                </div>
                            </div>
                            <div className='row bg-success mx-auto py-5 text-center '>
                                            2
                            </div>
                            <div className='row  mx-auto py-5 text-center '>
                            <img src={e.image} className='img-fluid' style={{width:'200px'}} ></img>

                            </div>
                        </div>
                    </div>

                    )}
                
                     })
        }
        
    </div>
  )
}

export default Myorder
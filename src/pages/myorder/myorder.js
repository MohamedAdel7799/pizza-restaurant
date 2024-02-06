import React, { useEffect, useState } from 'react'
import './myorder.css'
import { Link, useParams } from 'react-router-dom'
import {food} from './db'




   




function Myorder() {


    const {id}=useParams()
    const [meals ,Setmeals]=useState([])
    const [count,Setcount]=useState(1)
    const [mypizza,Setpizza]=useState([])


    useEffect(()=>{
        Setpizza(food.pizza)
    })

    
   


  const  alladds = new Array
  const adds =alladds.push(JSON.parse(localStorage.getItem('additions')))  



  return (
    <div className=' d-grid vh-100 '>
        <div className='  my-auto  w-75 mx-auto  '>
        {
            mypizza.map((e)=>{

                if(e.id == id){
                    return(
                     
                        <div className='row my-5 shadow-lg rounded-5 '>
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
                        </div>
                    
                    )} })}

            <div className='row  mx-auto py-2 text-center shadow-lg  rounded-5  '>
                <div className='py-2  w-75 mx-auto    '>
                    <div className='d-flex justify-content-around w-75 mx-auto bg-light rounded-5 py-2 '>
        
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
                <div className='row row-cols-lg-3 py-4 px-2 gx-2  gy-3 row-cols-sm-3  text-center  justify-content-center  '>
                    {
                     meals==''?('  Some delicious additions to your mea '):(meals.map((e)=>{
                        return(
                           
                                
                                    <div className='col  rounded-3  '>
                                        <div className='img py-2 '>
                                                <img src={e.image} className=' img-fluid rounded-circle  ' style={{width:"200px"}}></img>

                                        </div>
                                        <div className='py-2  '>
                                            <h4>{e.name}</h4>
                                            <h5>{e.price} EP</h5> 
                                            <button className='btn btn-light' onClick={()=>{
                                                localStorage.setItem('additions',JSON.stringify([e]))
                                                console.log(adds)}}>Add</button>

                                        </div>
                                    </div>            
                        )
                     }))
                    }
                     </div>
                </div>
                                          
            </div>
            <div className='row  shadow-lg  rounded-5  my-5   mx-auto py-5 text-center '>
                 
            </div>
            </div>
    </div>
  )
}

export default Myorder
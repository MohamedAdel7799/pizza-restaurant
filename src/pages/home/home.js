import React from 'react'
import './home.css'
import { AiFillForward } from "react-icons/ai";

export default function Home() {
  return (
    <div>
        <div className='vh-100 main shadow-lg  '>
            <div className='row row-cols-2 h-100  '>
                <div className='col d-grid    '>
                    <div  className='my-5 mx-auto text-light '>
                      <div className= ' my-5  text-start '>
                        <h1> Your <span>Favourit</span></h1>
                        <h1><span>Meals</span> Deliverd</h1>
                        <h2> To you Doorstep </h2>
                        <h3><span>good food is a gift,Unwrap it with a Click</span> </h3>
                      </div>
                      <div className=' d-flex justify-align-align-content-around    '>
                         <div className='order'> <button className='btn px-4 text-light '> Order now {<AiFillForward/>}</button> </div>
                         <div className='serve mx-5'> <button className='btn  mx-4 text-light   '> how we can serve you?</button></div>
                      </div>
                    </div>
                </div>
                <div className='col d-grid  '>
                    <div className='   '>
                    <img src={ require('./pngegg (5).png') } className=' img-fluid my-5 ' style={{width:"400px"}}/>
                    </div>

                </div>


            </div>
        </div>
    </div>
  )
}

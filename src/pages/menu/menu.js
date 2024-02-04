import React, { useEffect, useState } from 'react'
export default function Menu() {
 
     const[data,Setdata]=useState([])
     const response= import( './db' )

     useEffect(()=>{

        Setdata(response.food.pizza)
     })





    
    


  return (
    <div>
        <div className='title text-dark text-center '>
            <h1 className=' p-0 m-0 '> Best Special Menue </h1>
            <button >hi</button>
        </div>       
        <div className='container row g-3  row-cols-lg-4 bg-danger mx-auto'>
      
            {data.map((e)=>{
                return(
                    <div className='col '>
                        <h4>{e.name}</h4>
 
                    </div>

                )
               
            })


            }



        </div>
    </div>
  )
}

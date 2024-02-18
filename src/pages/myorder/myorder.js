import React, { useEffect, useState } from 'react'
import './myorder.css'
import {  Link, useParams } from 'react-router-dom'
import {food} from './db'
import { useDispatch, useSelector } from 'react-redux'
import { addtooredr, removefromorder } from '../../redux/orderslice'
import { FcSearch } from "react-icons/fc";
import { MdDelete } from "react-icons/md";





function Myorder() {
    
    const {id}=useParams()
    const [meals ,Setmeals]=useState([])  
    const [mypizza,Setpizza]=useState([]) 
    const orderlist= useSelector((state)=>state.order.order)
    const dispatch = useDispatch()
    const ordernum =Math.floor(Math.random() * 10000);
    const [additionsprice , setadditionsprice]=useState([])

    let sum = 0
    additionsprice.forEach(element => {
      sum += element
      
    });

    

 
    
    useEffect(()=>{
        Setpizza(food.pizza)
        Setmeals(food.pasta)
        
    },[])



   


  return (
    <div className=''>
      <div className='d-flex'>
        <div className='d-grid vh-100  sidebar   ' style={{width:"30px"}}>
          <ul className='my-auto mx-auto list-unstyled text-light '>
            <li className='my-3'>1</li>
            <li className='my-3'>2</li>
            <li className='my-3'>3</li>
            <li className='my-3'>4</li>
            <li className='my-3'>5</li>
          </ul>
        </div>



        <div className='w-75 main '>
          <div className=' container-fluid  '>
              <div className='d-flex justify-content-between mx-3 my-3 text-light'>
                  <div>
                   <h3>pizza</h3>
                   <h5>date</h5>
                  </div>
                  <div>
                      <div class="input-group ">
                        <input type="text" class="form-control" placeholder="search " aria-label="Username" aria-describedby="basic-addon1"></input>
                        <div class="input-group-prepend">
                          <span class="input-group-text py-3 rounded-0  " id="basic-addon1"><FcSearch/></span>
                        </div>
                      </div>
                  </div>
              </div>
              <div className='text-danger fw-bold  d-flex justify-content-between my-3'>
                <div>
                    <Link className='mx-4 text-decoration-none text-light  ' onClick={()=>{Setmeals(food.pasta)}}>pasta</Link>
                    <Link className='mx-4 text-decoration-none text-light' onClick={()=>{Setmeals(food.drinks)}} > drinks </Link>
                    <Link className='mx-4 text-decoration-none text-light' onClick={()=>{Setmeals(food.dessert)}}>dessert</Link>
                    <Link className='mx-4 text-decoration-none text-light'onClick={()=>{Setmeals(food.salads)}}>salads</Link>
                    <Link className='mx-4 text-decoration-none text-light' onClick={()=>{Setmeals(food.sauces)}}>sauces</Link>
                    <Link className='mx-4 text-decoration-none text-light' onClick={()=>{Setmeals(food.sides)}}>sides</Link>
                </div>
                <div>
                    <select class="form-select form-select-sm"  style={{width:"80px"}} aria-label=".form-select-sm example">
                      <option  disabled selected>filter</option>
                      <option value="1">price</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>                      
                </div>
                
              </div>      
              <div className='container  my-4  '>
                <div className='row row-cols-lg-3 g-3 text-center  ' >
                  {meals.map((meal)=>{return(

                       <div class="card mx-auto h-100 p-0  " style={{width: "18rem"}}>
                          <img class="card-img-center mx-auto my-2 h-75" src={meal.image} style={{width: "100px"}} ></img>
                          <div class="card-body h-25  ">
                            <h6 class="card-title fw-bold  ">{meal.name}</h6>
                            <p class="card-text ">{meal.price} EP</p>
                            <button className='btn btn-danger' onClick={()=>{
                              dispatch(addtooredr(meal))            
                              setadditionsprice([...additionsprice , meal.price])
                            }} > add </button>
                          </div>
                       </div>

                  )})}
             
                  
                
                </div>
                
              </div>
          </div>
        </div>




        <div className='w-25 bg-dark text-light '>
          <div className='mx-3 vh-100 '>
             <div className='h-25 d-grid  '>
                <div className=''>
                  <h5 className='my-3'># {ordernum}</h5>
                </div>
                <div className='d-flex justify-content-start '>
                  <div><button className='btn btn-danger '>Dine In</button></div>
                  <div><button className='btn btn-danger mx-3'>To Go</button></div>
                  <div><button className='btn btn-danger mx-1'>Delivery</button></div>
                </div>
                <div className='d-flex  justify-content-between my-auto '>
                  <h4>your order</h4>
                
             </div>
             </div>
            
             <div className='  h-50 totaloreder  overflow-y-scroll bg-dark text-light  '>
                <div className=''>
                  { mypizza.map((pizza)=>{
                    if (pizza.id == id) {                 
                      return(                                    
                      <div className='d-flex justify-content-between  '> 
                          <div className='my-1 d-flex align-content-center  '>
                          <img src={pizza.image} className=' img-fluid rounded-circle  ' style={{height:"50px"}} ></img>
                          <p className='mx-2'>{pizza.name}</p>
                           </div>
                          <div className='d-flex text-center '> 
                            <div className='mx-3'>
                                1
                            </div>
                            <div className='mx-3 '>
                                {pizza.price} EP
                            </div>
                          </div>
                      </div>  
                    )}})}                    
                </div>
                <div className='my-4'>
                  
                  {orderlist.map((e)=>{
                    return(
                    <div className='my-4 d-flex  justify-content-between '>
                      <div className='my-1 d-flex align-content-center  '>
                          <img src={e.image} className=' img-fluid rounded-circle  ' style={{height:"50px"}} ></img>
                          <p className='mx-2'>{e.name}</p>
                      </div>
                      <div className='d-flex'>
                       
                        <div className='mx-2'>
                          {e.price} EP
                        </div>
                        <div className='mx-3 ' >
                         <button className='bg-dark' onClick={()=>{
                            dispatch(removefromorder(e))
                            setadditionsprice(additionsprice.filter(item=> item !==e.price))}}>
                             <MdDelete/>
                        </button>
                        </div>
                      </div>
                       

                    </div>
                  )})
                    }



                </div>        
             </div>
             <div className='h-25 d-grid fw-bold  '>
                <div className='d-flex my-3 justify-content-between '>
                  <div > discount</div>
                  <div> 0 EP</div>
                </div>
                <div className='d-flex  justify-content-between '>
                  <div>total price</div>
                  <div> {sum} EP</div>
                </div>
                <div className='text-center '> 
                  <button className='btn btn-danger px-5'>order</button>
                </div>
             </div>

          </div>
        </div>
      </div>
      
        
    </div>
  )
}

export default Myorder
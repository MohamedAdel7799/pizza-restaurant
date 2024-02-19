import React, { useEffect, useState } from 'react'
import './myorder.css'
import {  Link, useParams } from 'react-router-dom'
import {food} from './db'
import { useDispatch, useSelector } from 'react-redux'
import { addtooredr, removefromorder } from '../../redux/orderslice'
import { FcSearch } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FcFilledFilter } from "react-icons/fc";
import { Button } from 'bootstrap'





function Myorder() {
    
    const {id}=useParams()
    const [meals ,Setmeals]=useState([])  
    const [mypizza,Setpizza]=useState([]) 
    const orderlist= useSelector((state)=>state.order.order)
    const dispatch = useDispatch()
    const ordernum =Math.floor(Math.random() * 10000);
    const [additionsprice , setadditionsprice]=useState([])
    const[searchitem,setsearchitem]=useState('')
   

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
                   <img src={require('./pizza.png')} className=' img-fluid ' style={{width:"50px"}}  ></img>
                  </div>
                  <div>
                      <div class="input-group ">
                        <input type="text" class="form-control" placeholder="search "   onChange={(event)=>{
                             setsearchitem(event.target.value)
                        }}></input>
                        <div class="input-group-prepend">
                          <span class="input-group-text py-3 rounded-0  " id="basic-addon1"><FcSearch/></span>
                        </div>
                      </div>
                  </div>
              </div>
              <div className='text-danger addbar py-3 fw-bold  d-flex justify-content-between my-4'>
                <div>
                    <Link className='mx-4 text-decoration-none text-light  ' onClick={()=>{Setmeals(food.pasta)}}>pasta</Link>
                    <Link className='mx-4 text-decoration-none text-light' onClick={()=>{Setmeals(food.drinks)}} > drinks </Link>
                    <Link className='mx-4 text-decoration-none text-light' onClick={()=>{Setmeals(food.dessert)}}>dessert</Link>
                    <Link className='mx-4 text-decoration-none text-light'onClick={()=>{Setmeals(food.salads)}}>salads</Link>
                    <Link className='mx-4 text-decoration-none text-light' onClick={()=>{Setmeals(food.sauces)}}>sauces</Link>
                    <Link className='mx-4 text-decoration-none text-light' onClick={()=>{Setmeals(food.sides)}}>sides</Link>
                </div>
                <div>
                    <select class="form-select form-select-sm mx-3"  style={{width:"80px"}} aria-label=".form-select-sm example">
                      <option  disabled selected> filter</option>
                      <option value="1">price</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>                      
                </div>
                
              </div>      
              <div className='container  my-4  '>
                <div className='row row-cols-lg-3 g-3 text-center  ' >

                  {meals.filter(item =>{
                 
                      if (searchitem == '' && searchitem !=item.name) {
                        return item
                        
                      }
                      else if(item.name.toLowerCase().includes(searchitem.toLocaleLowerCase())){
                        return item

                      }
                    
                  }).map((meal)=>{
                    return(
                      <div className="col  mb-4  ">
                      <div className="card h-100 w-75 mx-auto  border-0  ">
                        <div className="h-75" >
                          <img src={meal.image}  className="w-50  img-fluid  "/>                                           
                            
                            <div className="hover-overlay">
                              <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                            </div>                                         
                        </div>
                        <div className="card-body d-flex justify-content-between align-items-center bg-dark ">
                          <div className=' text-start '>
                              <h5 className="card-title mb-3 fw-bolder text-light">{meal.name}</h5>                                  
                              <h6 className="mb-3 text-danger fw-bold">{meal.price} EP</h6>

                          </div>
                          <div className=''>
                          <button className='addbutton  fw-bolder text-light' onClick={()=>{
                                            dispatch(addtooredr(meal))            
                                            setadditionsprice([...additionsprice , meal.price])
                                          }} > <IoIosAddCircleOutline/> </button>                                                         
                          </div>                                            
                        </div>
                      </div>                                  
                </div>
                    )

                  })













                 /* {meals.map((meal)=>{return(  
                                  

                            
                 

                                                          )})}                */}
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
                      <div className='d-flex justify-content-between  align-items-center '> 
                          <div className='my-1 d-flex align-items-center  '>
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
                      <div className='my-1 d-flex align-items-center  '>
                          <img src={e.image} className=' img-fluid rounded-circle  ' style={{height:"50px"}} ></img>
                          <p className='mx-2'>{e.name}</p>
                      </div>
                      <div className='d-flex align-items-center '>
                       
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
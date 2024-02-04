import React from 'react'
import './footer.css'
import { FaFacebookF ,FaWhatsapp  } from "react-icons/fa";
import { FaInstagram,FaSnapchat,FaLocationDot   } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";


export default function Footer() {
  return (
    <div>
        <div className='footer '>
            <div className=' row row-col-lg-4   p-0  m-0       '>
                <div className='col text-light d-grid my-auto '>
                    <div className='mx-5'>
                        <div className='text-start'><h3> {<FaLocationDot/>} Location</h3></div>
                        <div className='text-start my-3 mx-4'>
                            <ul className=' list-unstyled '>
                                <li>cairo</li>
                                <li>alexandria</li>
                                <li>tanta</li>
                            </ul>
                        </div>
                    </div>
                
                </div>
                <div className='col text-light '>
                    <div>
                        <img src={require('./pngegg (9).png') } style={{width:"90px"}} ></img>
                    </div>
                    <div className='text-start my-3'>
                        <h6>Subscrib & get 10% discount . Get E-mail update</h6>
                        <h6 cl>about our latest shop and special offers</h6>
                    </div>
                    <div className='d-flex justify-content-start  '>
                        <div><input type='email' placeholder='Enter your mail here' ></input></div>
                        <div> <button className='mx-3 px-4 text-light '>SUBSCRIBE</button></div>

                    </div>
                    <div className='text-start '>
                        <h6 className='fw-bolder'>OPPENING</h6>
                        <h6>Week Days 1.00 pm to 12.00 pm</h6>
                        <h6>Week End 10.00 Am to 12.00 pm</h6>

                    </div>
                  

                </div>
                <div className='col  text-center d-grid my-auto  text-light   '>
                    <div className=' text-center '>
                        <h5>REACH US</h5>
                        <div className='d-flex my-3 justify-content-around mx-auto  w-75 text-center  '>
                            <div className=' icon ' >{<FaFacebookF />}</div>
                            <div className=' icon '>{<FaInstagram/>}</div>
                            <div className=' icon '>{<FaSnapchat />}</div>
                            <div className=' icon '>{<FaWhatsapp  />}</div>
                        </div>
                        <div className='mx-auto '>{<IoCall/>} +786 8798795 </div>

                    </div>
                
                </div>
                <div className='col  text-end '>
                    <img src={ require('./pngegg (4).png')} className='image-fluid' style={{width:"200px"}} />
                </div>

            </div>

        </div>
    </div>
  )
}

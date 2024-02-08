import React from 'react'
import './footer.css'
import { FaFacebookF ,FaWhatsapp  } from "react-icons/fa";
import { FaInstagram,FaSnapchat,FaLocationDot   } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";


export default function Footer() {
  return (
    <div>
        <div className='footer container py-3  '>
            <div className='row footer-info row-cols-lg-3 row-cols-sm-2 g-1 py-5  '>
               <div className='col text-center '>
                      <div >
                           <h4>ADRESS</h4>
                           <h6>570 8th Nasr City ,Cairo</h6>
                           <h6> Egypt </h6>

                      </div>
               </div>
               <div className='col text-center '>
               <div >
                           <h4>BOOK A TABLE</h4>
                           <h6>Dogfood och Sliders foodtruck</h6>
                           <h6> Under Om oss Kan ni lsas </h6>


                      </div>
               </div>
               <div className='col text-center '>
               <div >
                           <h4>ADRESS</h4>
                           <h6>Monday - Friday</h6>
                           <h6> 10.00 AM - 11 PM </h6>


                      </div>
               </div>
            </div>
            <div className='row my-3  '>
                <div className='mx-auto py-2 social text-center  ' >
                     <h5 className='my-3'>CONTACT WITH US</h5>
                     <div className='d-flex social-icon  mx-auto justify-content-around w-25 '>
                            {<FaFacebookF/>}
                            {<FaInstagram/>}
                            {<FaWhatsapp/>}
                            {<FaSnapchat/>}
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

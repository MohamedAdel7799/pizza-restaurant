import React from 'react'
import './aboutus.css'

import {motion} from "framer-motion"
export default function Aboutus() {
  return (
    <div>
        <div className='aboutus py-5  h-auto  shadow-lg   '>
          <div className='row g-0 h-auto  py-4 row-cols-2       '>
            <div className='col  d-grid'>
              <div className='row    row-cols-lg-2 row-cols-sm-1   '>
                <div className='col'>
                  <div className='aboutus-image  '>
                     <img src={ require('./download (1).jpg') } className=' img-fluid w-100 ' style={{width:'200px'}}></img>
                  </div>
                </div>
                <div className='col'>
                <div className='aboutus-image  '>
                     <img src={ require('./download (3).jpg') } className=' img-fluid w-100 ' ystyle={{width:'200px'}}></img>
                  </div>
                 
                </div>
              </div>

              <div className='row  m-2 row-cols-lg-2 row-cols-sm-1  '>
              <div className='col'>
                   <div className='aboutus-image  '>
                        <img src={ require('./download.jpg') } className=' img-fluid w-100 ' style={{width:'200px'}}></img>
                    </div>
                </div>
                <div className='col'>
                <div className='aboutus-image  '>
                      <img src={ require('./download (2).jpg') } className=' img-fluid w-100 ' style={{width:'200px'}}></img>
                  </div>
                    
                </div>


              </div>
                   
            </div>
            <div className='col  mx-0'>
                  <div className='text-start  container text-light   '>
                     <h4> About Our Reaturant </h4>
                     <p className=' fw-bold text-light  '>This is one of Cairo’s most popular Italian restaurants boasting some of the best pizzas in town. It’s a charming restaurant that offers you deliciously cheesy pizzas that will leave you totally satisfied. There are no wacky or bizarre pizzas here. Instead, Porta D’oro focuses on serving beautiful classic pizzas including the Margherita and Napolitano. Staff is friendly, and service is prompt. A good overall experience we’d recommend to all .</p>
                      <button className='btn px-3 btn-danger '> read more </button>
                  </div>
            </div>
        </div>             
        </div>
        <div className='service'>
          <div className='h-auto py-5  ' >
            <div className='row g-0 text-center mx-auto  '>
              <h3 className='py-3'> <span> WHAT WE SERVE </span> </h3>
              <h4 className='text-light' > Your Favourit Food Delivery Partner </h4>
            </div>
            <div className='row row-cols-3 g-0  my-5' >
              <div className='col text-center '>
                 <div className='service-image' >
                    <img src={require('./about us/pngegg (7).png')} className=' img-fluid ' style={{width:"130px"}}  ></img>
                 </div>
                  <div className='service-info my-3'>
                     <h4 className='text-light'>Easy To Order</h4>
                     <h6 className='text-light'> You only need a few steps in ordering food</h6>
                  </div>
              </div>
              <div className='col text-center '>
                 <div className='service-image' >
                    <img src={require('./about us/pngegg (1).png')} className=' img-fluid ' style={{width:"210px"}}  ></img>
                 </div>
                  <div className='service-info my-3'>
                     <h4 className='text-light'>Fastest Delivery </h4>
                     <h6 className='text-light'> Delivery that is always ontime even faster</h6>
                  </div>
              </div>
              <div className='col text-center '>
                 <div className='service-image g-0 ' >
                    <img src={require('./about us/pngegg (10).png')} className=' img-fluid ' style={{width:"130px"}}  ></img>
                 </div>
                  <div className='service-info my-3'>
                     <h4 className='text-light'>Best Quality</h4>
                     <h6 className='text-light'> Not only fast for us quality is also number one</h6>
                  </div>
              </div>
            </div>
          </div>

        </div>
       
    </div>
  )
}

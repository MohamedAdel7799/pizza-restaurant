import React from 'react'
import './ourchefs.css'
import {motion} from 'framer-motion'
export default function Ourchefs() {
  return (
    <div className='h-auto py-5  ourchefs  bg-light   '>
        <div className='container'>
            <motion.div
             initial={{opacity:0,
            scale:0
          }}
          whileInView={{
            scale:1,
            opacity:1
          }}
          transition={{
            
            duration:0.3
          }}
          viewport={{once:true}}
            className='title py-3 text-center  '>
                 <h1 >Our Chefs </h1>
                 <h5>We have the best pizza makers in the world</h5>
            </motion.div>
     
          <div class="container ">
          <div class="row justify-content-center ">
            <div class="col">
            <div class=" p-1 chefs shadow-lg ">
                <div className='chef'>
                  <div className='chef-image shadow-lg text-center '  >
                    <img src={ require('./our chef/pngegg (12).png')  } className='img-fluid w-auto '  style={{width:'100px', height:'300px'}} ></img>
                  </div>
                  <div className='chef-info py-2 text-light text-center '>
                    <h3> Jamie Oliver </h3>
                    <h5> head chef </h5>
                  </div>
                </div>
            </div>
            </div>
            <div class="col ">
              <div class=" p-1 chefs shadow-lg">
              <div className='chef  '>
                <div className='chef-image shadow-lg text-center  ' >
                   <img src={ require('./our chef/pngegg (15).png')  } className=' img-fluid  w-auto  ' style={{width:'100px', height:'300px'}}  ></img>
                </div>
                <div className='chef-info py-2 text-light text-center '>
                  <h3>  Angela Hartnett</h3>
                  <h5> sous chef </h5>

                </div>
              </div>
              </div>
            </div>
            <div class="col ">
              <div class=" p-1 chefs shadow-lg ">
              <div className='chef  '>
                <div className='chef-image shadow-lg  h-75  text-center  '   >
                   <img src={ require('./our chef/pngegg (13).png')  } className=' img-fluid'  style={{width:'100px', height:'300px'}} ></img>
                </div>
                <div className='chef-info py-2 text-light text-center '>
                  <h3> Nigella Lawson </h3>
                  <h5> Pastry chefs </h5>
                </div>
              </div>
              </div>
            </div>
          </div>
</div>



        </div>
        
    </div>
  )
}

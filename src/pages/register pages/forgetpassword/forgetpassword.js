import React, { useState } from 'react'
import './forgetpassword.css'
import { Link } from 'react-router-dom'

function Forgetpassword() {


    const [userdata,Setuserdata]=useState({

        newpassword:"",     
        confirmepassword:""
       })

      function collectuserdata(e){
         let myuser ={...userdata}
         myuser[e.target.name]=e.target.value
         Setuserdata(myuser)
    
      }
    
      function seduserdata(){
      }

  return (
    <div className='vh-100 signin text-dark d-grid '>
    <div className='container row row-cols-lg-1 row-cols-sm-6 mx-auto    my-auto   '>
        <div className='col mx-auto text-center rounded-5  w-25 signcol  py-2 '>
            <div className='my-5 signin-title'>
                <h3 className='text-center'>Reset your password</h3>
            </div>
            <div className=' my-4 text-center  '>
                <input className='px-3 py-1' type='password' name='newpassword'  placeholder='New Password' onChange={collectuserdata} ></input>
            </div>
            <div className='text-center py-2  '>
                <input className='px-3 py-1' type='password' name='confirmepassword'  placeholder='Confirm Passwoerd' onChange={collectuserdata}></input>            
            </div>
            <div className='my-3 text-center py-2 '>
                <button className='px-5 py-1 rounded-2' onClick={seduserdata}> Reset </button>
            </div>
            <div className='text-center px-2 py-2 '>
                <Link className='link text-decoration-none ' to='/signin'> signin </Link>
            </div>


        </div>
    </div> 
</div>
  )
}

export default Forgetpassword
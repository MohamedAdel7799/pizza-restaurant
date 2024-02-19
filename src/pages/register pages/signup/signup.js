import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./signup.css"
function Signup() {
    

    const navigate = useNavigate()
   const [userdata,Setuserdata]=useState({

    username:"",
    email:"",
    password:""
   })
  function collectuserdata(e){
     let myuser ={...userdata}
     myuser[e.target.name]=e.target.value
     Setuserdata(myuser)
  }

  function seduserdata(){
    localStorage.setItem('signin',JSON.stringify(userdata))
    navigate('/')  }


  return (
    <div className='vh-100 signin text-dark d-grid '>
    <div className='container row row-cols-lg-1 row-cols-sm-6 mx-auto    my-auto   '>
        <div className='col mx-auto text-center rounded-5  w-25 signcol  py-2 '>
            <div className='my-5 signin-title'>
                <h3 className='text-center'>Signup</h3>
            </div>
            <div className=' my-4 text-center  '>
                <input className='px-3 py-1' type='text' name='username'  placeholder='user name' onChange={collectuserdata} ></input>
            </div>
            <div className=' my-4 text-center  '>
                <input className='px-3 py-1' type='email ' name='email'  placeholder='your email'  onChange={collectuserdata} ></input>
            </div>
            <div className='text-center py-2  '>
                <input className='px-3 py-1' type='password' name='password'  placeholder='password' onChange={collectuserdata}  ></input>            
            </div>
            <div className='my-3 text-center py-2 '>
                <button className='px-5 py-1 account rounded-2 ' onClick={seduserdata}> Create Account </button>
            </div>
            <div className='text-center px-2 py-2 '>
                <Link className='link text-decoration-none ' to='/signin'> Aready Have Account </Link>
                
            </div>
        </div>
    </div> 
</div>
  )
}

export default Signup
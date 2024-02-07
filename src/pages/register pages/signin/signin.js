import React, { useState } from 'react'
import './signin.css'
import { Link, useNavigate } from 'react-router-dom'
function Signin() {
   
    const navigate=useNavigate()
    const[userdata,Setuserdata]=useState({
        username:"",
        password:""
    })

    
    function getuserdata(e){
        let myuser ={...userdata}
        myuser[e.target.name]=e.target.value
        Setuserdata(myuser)
    }

    function senddata(){
        localStorage.setItem('signin',JSON.stringify(userdata))
        navigate('/')
    }

  return (
    <div className='vh-100 signin text-dark d-grid '>
        <div className='container row row-cols-lg-1 row-cols-sm-6 mx-auto    my-auto   '>
            <div className='col mx-auto text-center rounded-5  w-25 signcol  py-2 '>
                <div className='my-5 signin-title'>
                    <h3 className='text-center'>Signin</h3>
                </div>
                <div className=' my-4 text-center  '>
                    <input className='px-3 py-1' type='text' name='username' onChange={getuserdata}  placeholder='user name' ></input>
                </div>
                <div className='text-center py-2  '>
                    <input className='px-3 py-1' type='password' name='password' onChange={getuserdata}  placeholder='password'   ></input>            
                </div>
                <div className='my-3 text-center py-2 '>
                    <button className='px-5 py-1 rounded-2 ' onClick={senddata} > signin </button>
                </div>
                <div className='text-center px-2 py-2 '>
                    <Link className='link text-decoration-none ' to='/forgerpassword'> Forget password? </Link>
                    <div className='my-3' >
                       <Link className='link my-3 text-decoration-none ' to='/signup'> create account  </Link>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Signin
import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar(props) {



    const scroll=(e)=>{
        window.scrollTo({
          top:e.current.offsetTop,
          behavior:"smooth"
        });
       };
    

  return (
    <div>
        <nav className="navbar navbar-expand-lg        " style={{}} >
            <div className="container-fluid d-flex ">
                <img className='mx-3 ' src={require('./pngegg (11).png')} style={{width:"60px "}}></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-light"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end     " id="navbarNav">
                <ul className="navbar-nav    ">
                    <li className="nav-item">
                    <Link className="nav-link text-light  "  href="#" onClick={()=>{
                        scroll(props.home)
                    }} >Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" href="#" onClick={()=>{
                        scroll(props.aboutus)
                    }}>About us </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" href="#" onClick={()=>{
                        scroll(props.menu)
                    }}>Menu</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" href="#" onClick={()=>{
                        scroll(props.home)
                    }} >Ourchefs</Link>
                    </li>
                   
                    <li className="nav-item">
                    <Link className="nav-link text-light" href="#" onClick={()=>{
                        scroll(props.help)
                    }} >Help</Link>
                    </li>
                  
                </ul>              
                </div>
                <div className='collapse navbar-collapse justify-content-end   ' id='navbarNav' >
                   
                    <div className='mx-3 my-sm-1 '><button className='btn signup text-light  px-3'>signup</button></div>
                    <div className='mx-1 my-sm-2 '><button className='btn  px-2 text-light'>signin</button></div>
                   

                </div>
           
            </div>
        </nav>
    </div>
  )
}

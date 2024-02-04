import React from 'react'
import './navbar.css'

export default function Navbar() {
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
                    <a className="nav-link text-light  "  href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="#">About us </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="#">Menu</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="#" >Help</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="#" >Service</a>
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

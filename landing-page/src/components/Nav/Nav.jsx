import React from 'react';
import "./Nav.css";


const Nav = () => {
  return (
    <div>
        <nav className="navbar background">
            <div className='nav-right'>
                <p >Re: <span style={{ color: "#5D5FEF"}}>skale</span></p>
            </div>
            <div>
            <ul className="nav-list">
                    <li><a href="#courses">Home |</a></li>
                    <li><a href="#tutorials">Hows it works |</a></li>
                    <li><a href="#jobs">Testimonials</a></li>
                </ul>
            </div>
            <div>
                <button className='btn'>Download</button>
            </div>
            </nav>
  
           
            
      
    </div>
  )
}

export default Nav

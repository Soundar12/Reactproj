import React from 'react'
import { Link } from 'react-router-dom'
import logoimg from './images/logo.png'
import { RiWhatsappFill, RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill } from 'react-icons/ri'


const Navbar = () => {
    return (
        <div>
            <div className='logo'>
                <img src={logoimg} alt='logoimg'></img>
                <h1>My Bank</h1>
            </div>
            <div className='navbar'>
            <Link to="Homepage"> Home</Link>
                 <Link to="Personal"> Personal</Link>
                <Link to="Banking">Banking</Link>
                <Link to="Services">Services</Link>
                <Link to="Aboutus">About us</Link>
                
            </div>
            
        </div>

        
    )
}

export default Navbar
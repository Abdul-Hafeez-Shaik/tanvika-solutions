import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../Styles/NavBar.css'
// import logo from '../Assets/Images/coding.png.png'
import logo from '../Assets/Images/machine-learning-white.png'

function NavBar() {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate("/");
    }
    
  return (
    <nav className='nav-bar'>
        <img onClick={goToHome} className='logo-img' src={logo} alt="" />
        <div className='nav-item-container'>
            <NavLink className='nav-item' to="/">Home</NavLink>
            <NavLink className='nav-item' to="/">About Us</NavLink>
            <NavLink className='nav-item' to="/">Services</NavLink>
            <NavLink className='nav-item' to="/">Careers</NavLink>
            <NavLink className='nav-item' to="/contactus">Contact Us</NavLink>
        </div>
    </nav>
  )
}

export default NavBar
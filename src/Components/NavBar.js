import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../Styles/NavBar.css'
import logo from '../Assets/Images/TanvikaLogo1-removebg-preview.png'
// import logo from '../Assets/Images/machine-learning.png'
// import logo from '../Assets/Images/TanvikaLogo1.jpg'

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
            <NavLink className='nav-item' to="/aboutUs">About Us</NavLink>
            <NavLink className='nav-item' to="/services">Services</NavLink>
            <NavLink className='nav-item' to="/careers">Careers</NavLink>
            <NavLink className='nav-item' to="/contactUs">Contact Us</NavLink>
        </div>
    </nav>
  )
}

export default NavBar
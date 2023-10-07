import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../Styles/NavBar.css'
import logo from '../Assets/Images/TanvikaLogo1-removebg-preview.png'
// import logo from '../Assets/Images/machine-learning.png'
// import logo from '../Assets/Images/TanvikaLogo1.jpg'
// import tanvikaLogo from '../../public/tanvikaLogo.png'

function NavBar() {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate("/");
    }
    
  return (
    <nav className='nav-bar'>
        <img onClick={goToHome} className='logo-img' src={logo} alt="" />
        <div className='nav-item-container'>
            <NavLink activeClassName="active" className='nav-item' to="/">Home</NavLink>
            <NavLink activeClassName="active" className='nav-item' to="/aboutUs">About Us</NavLink>
            <NavLink activeClassName="active" className='nav-item' to="/services">Services</NavLink>
            <NavLink activeClassName="active" className='nav-item' to="/careers">Careers</NavLink>
            <NavLink activeClassName="active" className='nav-item' to="/contactUs">Contact Us</NavLink>
        </div>
    </nav>
  )
}

export default NavBar
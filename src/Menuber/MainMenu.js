import React,{useRef} from 'react';
import {NavLink} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './MainMenu.css';

const MainMenu = ()=>{
    const navRef = useRef();
    const showNav = ()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>   
            <h3>Logo</h3>
            <nav ref={navRef}>
                <NavLink to="/home" className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/service" className="nav-link">Service</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                <button className="nav-btn nav-close-btn" onClick={showNav}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNav}>
                <FaBars/>   
            </button>
        </header>
    )
}
export default MainMenu;
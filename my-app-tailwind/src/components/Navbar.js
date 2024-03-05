'use client'
import { useState, useEffect } from 'react'
import NavLink from "./NavLink"

const Navbar = () => {
    const [backgroundNavbar, setBackgroundNavbar] = useState("")
    const [lastScrollY, setLastScrollY] = useState(0);


    const controlNavbar = () => {
        if (window.scrollY == 0) { // if scroll down hide the navbar
            setBackgroundNavbar("bg-transparent")
        } else { // if scroll up show the navbar
            setBackgroundNavbar("bg-black")
        }
    
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
    
        // cleanup function
        return () => {
           window.removeEventListener('scroll', controlNavbar);
        };
      }, [lastScrollY]);

    return (
        <div className={`navbar shadow-none navbar-sticky transition ease-out duration-300 ${backgroundNavbar}`}>
            <div className="navbar-start">
                <a className="navbar-item">Ripple UI</a>
            </div>
            <div className="navbar-center">
                <NavLink className="navbar-item" exact href="/">Home</NavLink>
                <NavLink className="navbar-item" exact href="/about">About</NavLink>
                <NavLink className="navbar-item" exact href="/about/profile">Profile</NavLink>
            </div>
            <div className="navbar-end">
                <a className="navbar-item">Home</a>
            </div>
        </div>
    )
}

export default Navbar
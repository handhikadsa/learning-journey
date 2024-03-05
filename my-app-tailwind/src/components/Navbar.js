'use client'
import { useState, useEffect } from 'react'
import NavLink from "./NavLink"

const Navbar = () => {
    const [backgroundNavbar, setBackgroundNavbar] = useState("bg-transparent")

    useEffect(() => {
        window.onscroll = function () { 
            if (window.scrollY > 50 ) {
                setBackgroundNavbar("bg-black");
            } 
            else {
                setBackgroundNavbar("bg-transparent");
            }
        };
    }, [backgroundNavbar]);

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
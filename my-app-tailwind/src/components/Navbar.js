'use client'
import NavLink from "./NavLink"

const Navbar = () => {
    return (
        <div className="navbar shadow-none navbar-sticky bg-transparent">
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
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
        <>
            <div className={`hidden md:flex navbar shadow-none navbar-sticky transition ease-out duration-300 ${backgroundNavbar}`}>
                <div className="navbar-start">
                    <a className="navbar-item">Ripple UI</a>
                </div>
                <div className="navbar-center">
                    <NavLink className="navbar-item list-none" exact href="/">Home</NavLink>
                    <NavLink className="navbar-item list-none" exact href="/about">About</NavLink>
                    <NavLink className="navbar-item list-none" exact href="/about/profile">Profile</NavLink>
                </div>
                <div className="navbar-end">
                    <a className="navbar-item">Home</a>
                </div>
            </div>

            <div className={`md:hidden py-5 navbar shadow-none navbar-sticky transition ease-out duration-300 ${backgroundNavbar}`}>
                 <div className="navbar-start">
                    <input type="checkbox" id="drawer-left" className="drawer-toggle" />

                    <label htmlFor="drawer-left" className="p-4 space-y-2 bg-white/50 rounded shadow">
                        <span className="block w-8 h-0.5 bg-gray-100"></span>
                        <span className="block w-8 h-0.5 bg-gray-100"></span>
                        <span className="block w-8 h-0.5 bg-gray-100"></span>
                    </label>
                    <label className="overlay" htmlFor="drawer-left"></label>
                    <div className="drawer">
                        <div className="drawer-content pt-10 flex flex-col h-full">

                            <label htmlFor="drawer-left" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>

                            <section className="sidebar-title items-center p-4">
                                <svg fill="none" height="42" viewBox="0 0 32 32" width="42" xmlns="http://www.w3.org/2000/svg">
                                    <rect height="100%" rx="16" width="100%"></rect>
                                    <path clipRule="evenodd" d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                                <div className="flex flex-col">
                                    <span>Acme</span>
                                    <span className="text-xs font-normal text-content2">Team Plan</span>
                                </div>
                            </section>

                            <section className="sidebar-content h-fit min-h-[20rem] overflow-visible">
                                <nav className="menu rounded-md">
                                    <section className="menu-section px-4">
                                        <span className="menu-title">Main menu</span>
                                        <ul className="menu-items">
                                            <NavLink htmlFor="drawer-left" isMobile={true} exact href="/" className="menu-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>Home</span>
                                            </NavLink>

                                            <NavLink htmlFor="drawer-left" isMobile={true} exact href="/about" className="menu-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <span>About</span>
                                            </NavLink>

                                            <label htmlFor="drawer-left" className="menu-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                                </svg>
                                                <span>Billing</span>
                                            </label>
                                            <li>
                                                <input type="checkbox" id="menu-1" className="menu-toggle" />
                                                <label className="menu-item justify-between" htmlFor="menu-1">
                                                    <div className="flex gap-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        </svg>
                                                        <span>Account</span>
                                                    </div>

                                                    <span className="menu-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </label>

                                                <div className="menu-item-collapse">
                                                    <div className="min-h-0">
                                                        <label className="menu-item-disabled menu-item ml-6">Accounts</label>
                                                        <label className="menu-item ml-6">Billing</label>
                                                        <label className="menu-item ml-6">Security</label>
                                                        <label className="menu-item ml-6">Notifications</label>
                                                        <label className="menu-item ml-6">Integrations</label>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </section>
                                </nav>
                            </section>

                            <section class="sidebar-footer h-full justify-end pt-2">
                                <div class="divider my-0"></div>
                                <div class="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
                                    <div class="flex flex-row gap-4 p-4">
                                    <label htmlFor="drawer-left" class="btn btn-ghost">Cancel</label>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
'use client'

import { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLink from "./NavLink";
 
export function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
              <NavLink exact href="/" className="flex items-center hover:text-blue-500 transition-colors">
                Home
              </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Account
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                Blocks
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
              <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                Docs
              </a>
            </Typography>
        </ul>
    );  
}
 
export default function NavbarComponent() {
  const [openNav, setOpenNav] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

    const handleWindowScroll = () => {
      if (window.scrollY > 0) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    }
 
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
 
    return () => {
      window.removeEventListener("scroll", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className={`rounded-none sticky top-0 z-[99] h-max max-w-full px-4 py-2 lg:px-8 lg:py-4 transition-colors duration-500 ${scrollNav ? "bg-white" : "bg-white/50"}`}>
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
            Material Tailwind
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
  );
}
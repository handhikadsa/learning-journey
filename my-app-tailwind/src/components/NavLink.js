'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link"


const NavLink = ({ isMobile, href, exact, children, ...props }) => {
    const pathname  = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        if (isMobile) {
            props.className += ' menu-active';
        } else {
            props.className += ' bg-dark-500 text-red-500';
        }
    }

    return (
        <Link href={href}>
            {
                isMobile ?
                <label {...props}>
                    {children}
                </label>
                :
                <li {...props}>
                    {children}
                </li>
            }
        </Link>
    )
}

export default NavLink
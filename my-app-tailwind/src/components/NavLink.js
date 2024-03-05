'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link"


const NavLink = ({ href, exact, children, ...props }) => {
    const pathname  = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += ' bg-dark-500 text-white-500';
    }

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    )
}

export default NavLink
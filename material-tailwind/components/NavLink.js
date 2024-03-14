'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink ({ component, exact, href, children, ...props }) {
    const pathName = usePathname()
    const isActive = exact ? pathName === href : pathName.startsWith(href);
  
    if (isActive) {
        if (component == "sidebar") {
            props.className += ' text-blue-500';  
        } else if (component == "navbar") {
            props.className += ' text-blue-500';
        }
    }
  
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    )
}
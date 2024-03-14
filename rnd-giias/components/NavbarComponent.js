'use client'

import { Card, CardBody } from "@material-tailwind/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ href, exact, children, ...props }) => {

  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " text-red-500"
  } else {
    props.className += ""
  }

  return (
    <Link href={href} {...props} >
      {children}
    </Link>
  )
}


const NavbarComponent = () => {
  return (
    <div className="absolute w-full z-[99]">
      <Card className="rounded-none">
        <CardBody>
          <div className="flex justify-center items-center gap-5">
            <NavLink href="/" exact className="hover:text-gray-500 transition-colors">Home</NavLink>
            <NavLink href="/about" exact className="hover:text-gray-500 transition-colors">About</NavLink>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default NavbarComponent
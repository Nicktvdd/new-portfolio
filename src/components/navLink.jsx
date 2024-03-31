"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

const NavLink = ({ link }) => {
	const pathName = usePathname()
	return (
		<Link className={`rounded p-1 ${pathName === link.href && "bg-black text-white"}`} href={link.href}>{link.name}</Link>
	)
}

export default NavLink
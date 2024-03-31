"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px48">
            {/* LINKS */}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link=>(
                    <NavLink link={link} key={link.name} />
                ))}
            </div>
            {/* LOGO */}
            <div className="md:hidden lg:flex w-1/3 justify-center">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1">Nickvandendungen</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.com</span>
                </Link>
            </div>
            {/* SOCIALS */}
            <div className="hidden md:flex gap-4 w-1/3">
                    <Link href="https://www.linkedin.com/in/nick-van-den-dungen/">
                    <Image src="/linkedin.png" alt="" width={50} height={50} />
                    </Link>
                    <Link href="https://github.com/Nicktvdd">
                    <Image src="/github.png" alt="" width={50} height={50} />
                    </Link>
                    <Link href="mailto:nicktvdd@gmail.com">
                    <Image src="/mail.png" alt="" width={50} height={50} />
                    </Link>
            </div>
            {/* RESPONSIVE MENU */}
            <div className="md:hidden">
                {/* MENU BUTTON*/}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative"  onClick={(()=>setOpen(!open))}>
                    <div className="w-10 h-1 bg-white rounded"> </div>
                    <div className="w-10 h-1 bg-white rounded"> </div>
                    <div className="w-10 h-1 bg-white rounded"> </div>
                </button>
                {/* MENU LIST*/}
                {open && (
                <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
                    {links.map((link) => (
                        <Link href={link.href} key={link.name}>
                            {link.name}
                        </Link>
                    ))}
                </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
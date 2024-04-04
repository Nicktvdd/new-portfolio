"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import NavLink from "./navLink"
import { motion } from "framer-motion"

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const topVariants = {
        open: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)",
        },
        closed: {
            rotate: 0,
        },
    }
    const centerVariants = {
        open: {
            opacity: 0,
        },
        closed: {
            opacity: 1,
        },
    }
    const bottomVariants = {
        open: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)",
        },
        closed: {
            rotate: 0,
        },
    }

    const listVariants = {
        open: {
            x: 0,
            transition:{
                when:"beforeChildren",
                staggerChildren: 0.2,
            }
        },
        closed: {
            x: "100vw",
        },
    }
    const listItemVariants = {
        open: {
            x:0,
            opacity: 1,
        },
        closed: {
            x:-20,
            opacity: 0,
        },
    }

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px48 text-xl">
            {/* LINKS */}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link => (
                    <NavLink link={link} key={link.name} />
                ))}
            </div>
            {/* LOGO */}
            <div className="md:hidden lg:flex xl:-1/3 xl:justify-center">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1">Nickvandendungen</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.com</span>
                </Link>
            </div>
            {/* SOCIALS */}
            <div className="hidden md:flex gap-5 w-1/3 justify-end">
                <Link href="https://www.linkedin.com/in/nick-van-den-dungen/">
                    <Image src="/linkedin.svg" alt="" width={30} height={30} />
                </Link>
                <Link href="https://github.com/Nicktvdd">
                    <Image src="/github.svg" alt="" width={30} height={30} />
                </Link>
                <Link href="mailto:nicktvdd@gmail.com">
                    <Image src="/mail.svg" alt="" width={30} height={30} />
                </Link>
            </div>
            {/* RESPONSIVE MENU */}
            <div className="md:hidden">
                {/* MENU BUTTON*/}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <motion.div
                        variants={topVariants}
                        animate={open ? "open" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left">
                    </motion.div>
                    <motion.div
                        variants={centerVariants}
                        animate={open ? "open" : "closed"}
                        className="w-10 h-1 bg-black rounded">
                    </motion.div>
                    <motion.div
                        variants={bottomVariants}
                        animate={open ? "open" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left">
                    </motion.div>
                </button>
                {/* MENU LIST*/}
                {open && (
                    <motion.div variants={listVariants} initial="closed" animate="open" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
                        {links.map((link) => (
                            <motion.div variants={listItemVariants} className="" key={link.name}>
                                <Link href={link.href} key={link.name}>
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
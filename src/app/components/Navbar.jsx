'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdClose, MdMenuOpen } from "react-icons/md";
import "./styles.css"
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const navLinks = <>
        <li><Link href={"#about"} className='hover:text-white'>About</Link></li>
        <li><Link href={"#about"} className='hover:text-white'>Projects</Link></li>
        <li><Link href={"#contact"} className='hover:text-white'>Contact</Link></li>
    </>

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-[#121212] py-4 border-b-2'>
            <div className='flex items-center mx-auto justify-between w-11/12'>
                <Link href={"/"} className='text-white text-4xl sm:text-5xl font-bold permanent'>Shakhawat</Link>
                {/* Burger Menu */}
                <div className='sm:hidden text-white text-4xl'>
                    {
                        navbarOpen ? (
                            <button className='transition-transform transform hover:scale-110' onClick={() => setNavbarOpen(false)}><MdClose /></button>
                        ) :
                            (
                                <button className='transition-transform transform hover:scale-110' onClick={() => setNavbarOpen(true)}><MdMenuOpen /></button>
                            )
                    }
                </div>
                {/* large screen */}
                <div className='menu max-sm:hidden'>
                    <ul className='flex gap-5 text-xl text-slate-200 border-slate-200 '>
                        {navLinks}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <div>
                    <ul className='flex flex-col mt-5 justify-center items-center gap-5 text-xl text-slate-200 border-slate-200 '>
                        {navLinks}
                    </ul>
            </div> : null}
        </nav>
    )
}

export default Navbar

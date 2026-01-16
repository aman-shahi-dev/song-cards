import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Navbar() {

    const navItems = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'About',
            href: '/about',
        },
        {
            title: 'Contact',
            href: '/contact',
        },
        {
            title: 'Login',
            href: '/login',
        },
    ]

    const [hovered, setHovered] = useState(null)

    return (
        <div className='py-40 bg-white h-screen'>
            <nav className='max-w-xl mx-auto bg-gray-100 rounded-full px-2 py-1 flex'>
                {
                    navItems.map((navItem, idx) => (
                        <Link
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                            className='w-full relative group text-center text-xs py-3 text-neutral-500'
                            to={navItem.href}
                            key={navItem.title}
                        >
                            {hovered === idx && (
                                <motion.div 
                                    layoutId="hover"
                                    className='absolute inset-0 rounded-full w-full h-full bg-black'
                                ></motion.div>
                            )}
                            <span className='relative group-hover:text-white'>
                                {navItem.title}
                            </span>
                        </Link>
                    ))
                }
            </nav>
        </div>
    )
}

export default Navbar
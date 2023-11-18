'use client'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import '../style/style.css'
import { usePathname } from 'next/navigation'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Navbar = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    const pathname = usePathname()


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={`
        ${pathname === '/' && ' border-b border-black/30 '}  
        ${pathname === '/about' && ' border-b border-black/30 '}  
        ${pathname === '/login' && 'border-b border-black/20'} 
        ${pathname === '/signup' && 'border-b  border-black/20'}
        ${pathname === '/apartment' && '  border-b border-black/20 '}
        `}>

            <div className={`py-2  h-[12vh] opacity-90 flex items-center justify-between px-8`}>
                <div className='flex justify-center items-center gap-4'>
                    <Link href='/'  className='ml-0 sm:ml-9 tracking-widest font-semibold text-3xl text-[#5D12D2] ' >
                        HOMIES
                    </Link>
                    
                </div>
                
                <div className='hidden lg:flex mr-0 sm:mr-9'>
                    <ul className={`ml-4 flex items-center justify-between gap-8  `}>
                        <li ><Link href='/' className={` relative border_transition  ${pathname === '/' && ''}`}>Home</Link></li>
                        <li ><Link href='/about' className={` relative border_transition  ${pathname === '/about' && ''}`}>About Us</Link></li>
                        <li ><Link href='/apartment' className={`relative border_transition  ${pathname === '/apartment' && ''}`}>Apartments</Link></li>
                        <li><Link href='/login'>
                            <button style={{
                                // backgroundImage: "linear-gradient(to bottom, #ff4495 0%, #ff6d6d 100%)",
                                
                            }} className={` text hover:shadow-lg rounded-lg  bg-purple-600 text-white  transition ease-out duration-1500     delay-150  -z-10  font-normal text-base px-8 py-2 text-center  -1 tracking-wider`} > 
                                Login

                            </button>
                        </Link>

                        </li>


                    </ul>
                </div>
                <div className='lg:hidden  flex'>
                    <Button className=' ' variant="outlined" color='secondary' size='large' sx={{}}
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Link href='/about'><MenuItem onClick={handleClose}>About Us</MenuItem></Link>
                        <Link href='/apartment'><MenuItem onClick={handleClose}>Apartments</MenuItem></Link>
                        <Link href='/login'><MenuItem onClick={handleClose}>Login</MenuItem></Link>
                        <Link href='/signup'><MenuItem onClick={handleClose}>SignUp</MenuItem></Link>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Navbar

'use client'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import '../style/style.css'
import { usePathname } from 'next/navigation'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Navbar = () => {
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
        ${pathname === '/about' && 'bg-black text-gray-200 '}  
        ${pathname === '/login' && 'bg-black text-gray-200'} 
        ${pathname === '/signup' && 'bg-black text-gray-200 '}
        ${pathname === '/apartment' && 'bg-black text-gray-200 '}
        
        `}>

            <div className={`py-2 ${(pathname === '/') && ' border-b border-b-gray-500'}  ${(pathname === '/apartment') && ' bg-black '} ${pathname === '/about' && ' bg-black '} ${pathname === '/login' && ' bg-black'}  text-[#e5e7eb] opacity-90 flex items-center justify-between px-8`}>
                <div className='flex justify-center items-center gap-4'>
                    <Link href='/'>
                        <Image src={`${pathname === '/about' | '/apartment' ? '/logo_final.png' : '/logo_final.png'}`} height={90} width={90} alt='Homies' />
                    </Link>
                    {/* <Link href='/'>
                    <Image src="/insta.jpeg" height={30} width={30} alt='Instagram' />
                </Link>
                <Link href='/' className=''>
                    <Image src="/facebook.png" height={30} width={30} alt='facebook' />
                </Link> */}
                </div>
                {/* <div className="text-md flex justify-around items-center border-2 p-1 ml-20  rounded-full font-semibold w-1/3 hover:shadow-lg cursor-pointer">
                    <div className='mx-2'> Anywhere </div>
                    <div className='mx-2 border-l border-gray-300 '> <span className='mx-4'>Any week</span> </div>
                    <div className='mx-2 border-l border-gray-300'> <span className='mx-4'>Add guests</span></div>
                    <div className=' bg-orange-500 rounded-full   flex justify-around items-center'>
                        <SearchIcon className=' text-white scale-75' />
                    </div>
                </div> */}
                <div className='hidden lg:flex'>
                    <ul className={`ml-4 ${(pathname === '/about') && 'text-gray-50'} ${(pathname === '/apartment') && 'text-gray-50'}  flex items-center justify-between gap-8  `}>
                        <li ><Link href='/' className={` relative border_transition  ${pathname === '/' && 'text-blue-400'}`}>Home</Link></li>
                        <li ><Link href='/about' className={` relative border_transition  ${pathname === '/about' && 'text-blue-400'}`}>About Us</Link></li>
                        <li ><Link href='/apartment' className={`relative border_transition  ${pathname === '/apartment' && 'text-blue-400'}`}>Apartments</Link></li>
                        <li><Link href='/login'>


                            <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-8 py-2.5 text-center  '

                            >
                                Login

                            </button>
                        </Link>

                        </li>


                    </ul>
                </div>
                <div className='lg:hidden  flex'>
                    <Button className=' ' variant="" size='large' sx={{}}
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
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

'use client'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
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
        ${pathname === '/' && ' text-white '}  
        ${pathname === '/about' && ' border-b border-black/30 '}  
        ${pathname === '/login' && 'border-b border-black/20'} 
        ${pathname === '/signup' && 'border-b  border-black/20'}
        ${pathname === '/apartment' && '  border-b border-black/20 '}
        `}>

            <div className={`py-2  h-[12vh] opacity-90 flex items-center justify-between px-8`}>
                <div className='flex justify-center items-center gap-4'>
                    <Link href='/' className='tracking-widest font-semibold text-3xl text-[#ff6d6d]'>
                        HOMIES
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
                    <ul className={`ml-4 flex items-center justify-between gap-8  `}>
                        <li ><Link href='/' className={` relative border_transition  ${pathname === '/' && ''}`}>Home</Link></li>
                        <li ><Link href='/about' className={` relative border_transition  ${pathname === '/about' && ''}`}>About Us</Link></li>
                        <li ><Link href='/apartment' className={`relative border_transition  ${pathname === '/apartment' && ''}`}>Apartments</Link></li>
                        <li><Link href='/login'>
                            <button style={{
                                // backgroundImage: "linear-gradient(to bottom, #ff4495 0%, #ff6d6d 100%)",
                                
                            }} className={`${pathname !== '/' && 'border hover:shadow-lg rounded-lg border-[rgba(0,0,0,0.1)]'} ${pathname === '/' && 'rounded-full border-2 hover:bg-gradient-to-b from-[#ff4495] to-[#ff6d6d]'}  transition ease-out duration-1500     delay-150  -z-10  font-normal text-base px-8 py-2 text-center  -1 tracking-wider`} > 
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

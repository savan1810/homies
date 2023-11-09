'use client'

import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div className='h-[100vh] w-[100vw]' style={{ backgroundImage: "url(/login_bg.svg)" }}>
        {/* <Image src="/login_bg.svg"  alt='login_bg'/> */}

        <div className='grid lg:grid-cols-2 grid-cols-1 h-full w-full'>
          <div className=' text-white w-full h-full hidden lg:flex lg:flex-col ml-20 justify-center '>
            <p className='text-xl font-medium '>HOMIES</p>
            <p className='text-4xl mt-4 font-bold'>Login to continue</p>
          </div>
          <div className=' lg:w-3/5   bg-white mx-auto flex justify-center items-center  sm:my-10 my-16 rounded-xl'>
            <div className=' z-10 px-4   mx-auto flex flex-col items-center justify-center sm:gap-12 gap-20 '>
              <div className='text-2xl   mb-4 text-center  tracking-wide'>
                <p className='font-semibold'>HOMIES</p>
                <p className="mt-4 text-xl">Let&lsquo;s Login</p>
              </div>
              <form className=" mx-auto  ">
                <input type="email" name="" id="" value={email} placeholder='Username' className='outline-0 w-full my-2 px-4 py-4 border border-gray-400 rounded-xl' onChange={event => setEmail(event.target.value)} />
                <input type="password" name="" id="" value={password} className='outline-0 w-full my-2 px-4 py-4 border border-gray-400  rounded-xl' placeholder='Password' onChange={event => setPassword(event.target.value)} />
                <button className='  w-full bg-green-500 hover:bg-green-400 text-xl p-4 my-2 outline-0 text-white rounded-xl' >Login</button>
                <div className='text-center mt-2 text-gray-400'>
                  <span>Don&lsquo;t have registered yet? </span>
                  <Link href="/signup"><span className='underline    text-[#363062]'>Sign up</span></Link>
                </div>
              </form>
              <div>
                <p className='text-center   text-sm text-gray-400'>Powered by HOMIES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page

import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'
import TextField from '@mui/material/TextField';

const Page = () => {
 

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div className='h-[88vh] w-[100vw] ' >
       <div aria-hidden="true" class="flex overflow-x-hidden absolute -z-10 -top-96 start-1/2 transform -translate-x-1/2">
    <div class="bg-gradient-to-r overflow-x-hidden from-violet-300/50 to-purple-100 blur-3xl   h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]  "></div>
    <div class="bg-gradient-to-tl from-blue-50 overflow-x-hidden via-blue-50 to-blue-50 blur-3xl  w-[98vw] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] "></div>
  </div> 

        <div className='grid lg:grid-cols-2 grid-cols-1 h-full w-full'>
          <div className='  w-full h-full hidden lg:flex lg:flex-col ml-20 justify-center '>
            <p className='text-xl font-medium '>HOMIES</p>
            <p className='text-4xl mt-4 font-semibold text-black'>Login to continue</p>
          </div>
          <div className=' lg:w-3/5 w-full border  bg-white shadow-xl  rounded-2xl mx-auto flex justify-center items-center  sm:my-10 mt-8 mb-32 '>
            <div className=' z-10 px-4  w-full mx-auto flex flex-col items-center justify-center sm:gap-10 gap-20  '>
              <div className='text-2xl   mb-4 text-center  tracking-wide'>
                <p className='font-semibold'>HOMIES</p>
                <p className="mt-4 text-xl">Let&lsquo;s Login</p>
              </div>
              <form className=" mx-auto w-full ">
                 <div className='mb-2'>
                    <TextField fullWidth label="Username" color="" id="fullWidth" />
                 </div> 
                 <div className='mt-2'>
                    <TextField fullWidth label="Password" id="fullWidth" className=''/>
                 </div>
                
                <div className='w-full py-4 text-center'>
                                <button className='w-full bg-gradient-to-r from-[#00A9FF] to-[#A0E9FF]  my-2 text-xl p-4  outline-0 text-white rounded-md' >Login</button>
                            </div>
                

                {/* <button className='w-full bg-gradient-to-r from-[#2980B9] to-[#6DD5FA] text-xl p-4 my-4 outline-0 text-white rounded-md' >Login</button> */}
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

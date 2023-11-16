'use client'
import Link from 'next/link'
import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import '@/style/style.css'
import Navbar from '@/components/Navbar';

// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


const Page = () => {

    // const navigate = useNavigate();
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')




    // const handleLogin=async (ev)=>{
    //   try{
    //     ev.preventDefault()

    //     await axios.post(`/api/auth/login`,{email,password},{
    //       headers: {
    //           'Access-Control-Allow-Origin': '*', 
    //           'Content-Type': 'application/json'
    //       }})
    //     // console.log(token)
    //     alert('Login Successful.')
    //     setEmail('')
    //     setPassword('')
    //     navigate('/home')
    //   }
    //   catch(e){
    //     alert('Login Failed,Please enter valid credentials.')
    //   }
    // }



    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <div className=' w-[100vw] bg-[#0A0A0A] ' >

                <div className='  z-10 flex   lg:w-2/3  justify-center items-center mx-auto  '>
                    <div className='bg-white px-4 py-4 my-10 mx-auto rounded-xl border shadow-2xl flex-col items-center justify-center z-10 '>
                        <div className='text-2xl  mb-4 text-center  tracking-wide'>
                            <p className='font-semibold'>HOMIES</p>
                            <p className="mt-4 text-xl">Let&lsquo;s Sign up</p>
                        </div>
                        <form className="mt-2 mx-auto flex-col justify-center items-center ">
                            <label for="name" className="font-medium opacity-90  ">Name<span className="text-red-500 align-top">*</span></label><br />
                            <input type="text" id="name" className="outline-none w-full px-3 py-2 border  border-gray-300 rounded-lg mb-2" placeholder="John" />
                            <label for="email" className="font-medium opacity-90  ">Email<span className="text-red-500 align-top">*</span></label><br />
                            <input type="email" id="email" placeholder="abc@gmail.com" className="outline-none w-full px-3 py-2 border  border-gray-300 rounded-lg mb-2" />

                            <label for="phone" className="font-medium opacity-90  ">Phone<span className="text-red-500 align-top">*</span></label><br />
                            <input type="text" id="phone" className="outline-none w-full px-3 py-2 border  border-gray-300 rounded-lg mb-2" placeholder="+91 1234567890" />
                            <label for="address" className="font-medium opacity-90  ">Address<span className="text-red-500 align-top">*</span></label><br />
                            <input type="text" id="address" className="outline-none w-full px-3 py-2 border  border-gray-300 rounded-lg mb-2" placeholder="India" />


                            <label for="country" className="font-medium opacity-90  ">Country<span className="text-red-500 align-top">*</span></label><br />
                            <input type="text" id="country" className="outline-none w-full px-3 py-2 border  border-gray-300 rounded-lg mb-2" placeholder="India" />
                            <label for="School" className="font-medium opacity-90  ">School<span className="text-red-500 align-top">*</span></label><br />
                            <input type="text" id="School" placeholder="abc" className="outline-none w-full border-gray-300 px-3 py-2  border rounded-lg mb-2" />
                            <label for="line" className="font-medium opacity-90  ">Line at school<span className="text-red-500 align-top">*</span></label><br />
                            <input type="text" id="line" className="outline-none w-full px-3 py-2 border  border-gray-300 rounded-lg mb-2 text-left" placeholder="Computer Enginnering" />
                            <label for="sign" className="font-medium opacity-90  ">Signature from your school<span className="text-red-500 align-top">*</span></label><br />
                            <div className='border border-gray-300 rounded-lg py-[3px] mb-2  flex items-center'>

                                <Button component="label" variant="" className="flex justify-start   hover:border-gray-200 hover:bg-white  text-gray-400 rounded-lg" startIcon={<CloudUploadIcon className='text-gray-400'
                                />}>
                                    <span className='text-gray-400'>Upload file</span>
                                    <VisuallyHiddenInput type="file" />
                                </Button>
                            </div>
                            <label for="imageCard" className="font-medium opacity-90  ">Image of student card<span className="text-red-500 align-top">*</span></label><br />
                            <div className='border border-gray-300 rounded-lg py-[3px] mb-2  flex items-center'>

                                <Button component="label" variant="" className=" flex justify-start   hover:border-gray-200 hover:bg-white  text-gray-400 rounded-lg" startIcon={<CloudUploadIcon className='text-gray-400'
                                />}>
                                    <span className='text-gray-400 '>Upload file</span>
                                    <VisuallyHiddenInput type="file" />
                                </Button>
                            </div>


                            <div className='py-4 text-center'>
                                <button className='w-full bg-green-500 hover:bg-green-400 text-xl p-2  outline-0 text-white rounded-xl' >Sign Up</button>
                            </div>
                            <div className='text-center mt-2 text-gray-400'>
                                <span>Already a member? </span>
                                <Link href="/login"><span className='underline    text-[#363062]'>Login</span></Link>
                                <p className='text-center lg:mt-14 mt-28  text-sm text-gray-400'>Powered by HOMIES</p>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page

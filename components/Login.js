'use client'
import Link from 'next/link'
import React,{useState} from 'react'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


const Page = () => {

  // const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 
  

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
    <div className='z-10 back_image h-[80vh] md:w-2/5 lg:w-1/3 sm:1/2 w-4/5 flex justify-center items-center mx-auto'>
    <div className='bg-white z-10 p-4 mx-auto rounded-2xl border shadow-xl flex-col items-center justify-center '>
      <p className="md:text-2xl text-xl font-medium text-center  tracking-wider">Login</p>
      <form className="mt-8 mx-auto  ">
        <input type="email" name="" id=""  value={email} placeholder='Username' className='outline-0 w-full my-2 px-4 py-2 border rounded-xl' onChange={event=>setEmail(event.target.value)}/>
        <input type="password" name="" id="" value={password} className='outline-0 w-full my-2 px-4 py-2 border rounded-xl' placeholder='Password'  onChange={event=>setPassword(event.target.value)}/>
        <button className='  w-full bg-red-500 hover:bg-red-400 text-xl p-2 my-2 outline-0 text-white rounded-2xl' >Login</button>
        <div className='text-center mt-2 text-gray-500'>
          <span>Don&lsquo;t have registered yet? </span>
          <Link href="/signup"><span className='underline md:text-xl text-lg  text-[#363062]'>Sign up</span></Link>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Page

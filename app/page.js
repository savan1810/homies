
import Link from 'next/link'
import '../style/style.css'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='w-full  back_image ' >

        <div className=' flex justify-center items-center w-full h-[85vh]' >

          <div className='flex-col justify-center items-center  '>
            <p className='text-gray-300 text-center  font-medium tracking-widest mb-6  ' style={{fontFamily: "josefin sans", lineHeight: "normal"}}>WELCOME TO</p>
            <p className='mb-2 text-center  text-[#F7EFE5] text-6xl  md:text- tracting-wide' style={{ fontFamily: "josefin sans" }}>HOMIES</p>
            <p className='text-center  text-xl tracking-wider text-gray-200' style={{fontFamily: "josefin sans", lineHeight: "normal"}}>ABOUT HOMIES</p>
            <p className='mx-auto mt-6 w-4/5 text-sm  text-center text-gray-300 tracking-wide'>
              HOMIES is a platform where exchange students can exchange housing with each other.HOMIES offers an easy and safe way to find housing in Europe.
            </p>
            <p className='text-center mt-10'>
              <Link href='/about' className='py-3 px-10 text-white tracking-wide   rounded-full  bg-gradient-to-b from-[#ff4495] to-[#ff6d6d]  transition ease-out duration-500 text-[16px] ' id='login'>View More</Link>
            </p>
          </div>
        </div>
          <div className='fadeBottom -mt-[200px]'></div>
        
      </div>
    </div>
  )
}

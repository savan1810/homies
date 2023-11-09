
import Link from 'next/link'
import '../style/style.css'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='w-full  back_image ' >

        <div className=' flex justify-center items-center w-full h-[85vh]' >

          <div className='flex-col justify-center items-center '>
            <p className='text-gray-300 text-center  font-medium tracking-widest mb-6 '>WELCOME TO</p>
            <p className='mb-2 text-center  text-[#F7EFE5] text-6xl  md:text- tracting-wide' style={{ fontFamily: "josefin sans" }}>HOMIES</p>
            <p className='text-center  text-xl tracking-wider text-gray-300'>ABOUT HOMIES</p>
            <p className='mx-auto mt-6 w-4/5 text-sm  text-center text-gray-400 tracking-wide'>
              HOMIES is a platform where exchange students can exchange housing with each other.HOMIES offers an easy and safe way to find housing in Europe.
            </p>
            <p className='text-center mt-10'>
              <Link href='/about' className='py-2 px-6 tracking-wide  text-gray-50 bg-[#1d4ed8] rounded-sm  '>View More</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

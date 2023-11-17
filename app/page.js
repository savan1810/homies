
import Link from 'next/link'
import '../style/style.css'
import Navbar from '@/components/Navbar'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';



export default function Home() {
  
  return (
    <div>
      <Navbar />


      <div className='w-full  back_image ' >


        <div className='  mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8"
> h-[88vh]' >

          <div className='flex-col justify-center items-center  ' style={{ fontFamily: "josefin sans" }}>
            <h1 className="text-lg font-bold  sm:text-xl  text-[#363062]" style={{ fontFamily: "josefin sans" }}>
              WELCOME TO

              <strong className="block font-extrabold  text-5xl text-orange-400" style={{ fontFamily: "josefin sans" }}>
                HOMIES
              </strong>
            </h1>

            <p className="mt-4 sm:text-lg text-base max-w-lg  text-black/80" style={{ fontFamily: "lexend deca" }}>
              HOMIES is a platform where exchange students can exchange housing with each other.HOMIES offers an easy and safe way to find housing in Europe.
            </p>

            <div className="mb-3">
              <div className="mt-10 relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className=" relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-400 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1" />


                <button
                  className=" relative z-[2] flex items-center rounded-r bg-gray-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
        <div className='fadeBottom -mt-[200px]'></div>
        <div className='z-20'>

        </div>
      </div>
      <div className='flex  absolute bottom-0 w-full'>
      <div className='w-full flex justify-between  items-center'>

        <div className='ml-10 flex gap-4 text-gray-500 underline'>
          <span>Privacy & policy</span>
          <span className=''>Cookie setting</span>
        </div>
        <div className='mr-5 flex gap-2'>

        <Link href='/'>
          <InstagramIcon  fontSize="large" className='text-gray-700' />
        </Link>
        <Link href='/' className=''>
          <FacebookIcon color="" fontSize="large"  className='text-gray-700'/>
        </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

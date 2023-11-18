
import Link from 'next/link'
import '../style/style.css'
import Navbar from '@/components/Navbar'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Image from 'next/image';



export default function Home() {

  return (
    <div className='bg-gradient-to-r h-full w-full from-[#DFCCFB] to-[#E0F4FF]'>
      <Navbar />
      <div class=" ">
        <div className='w-[95%] mx-auto ' >
          <div className='  mx-auto max-w-screen px-4 pt-[98px] pb-[20px] sm:px-6 lg:flex lg:gap-20  flex-wrap lg:items-center lg:px-8' >
            <div className='flex-col justify-center items-center' >
              <h1 className="text-lg font-medium  text-center lg:text-left lg:text-xl text-[rgb(7,16,45)]  " >
                WELCOME TO
                <strong className="block font-semibold  text-5xl textGrad " >
                  HOMIES
                </strong>
              </h1>

              <p className="mt-4 sm:text-lg text-base text-center mx-auto lg:text-left  max-w-lg  text-[rgb(131,136,155)]"  >
                HOMIES is a platform where exchange students can exchange housing with each other.HOMIES offers an easy and safe way to find housing in Europe.
              </p>

              <div className="mb-3">
                <div className="mt-10 relative mb-4 flex w-full flex-wrap items-stretch">
                  <input
                    type="search"
                    className=" relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-400 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3]  focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_purple-400] focus:outline-none "
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon1" />


                  <button
                    className=" relative z-[2] flex items-center rounded-r bg-purple-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
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

            <div className=' overflow-x-hidden overflow-y-hidden rounded-xl  lg:mt-0 mt-16 '>
              <Image className=" will-change-transform shadow-2xl hover:scale-125 transition-all duration-1000 " height={500} width={600} src='/home.jpeg' alt="home" />
            </div>
           
          </div>
          <div className='sm:flex hidden  w-full'>
          <div className='w-full flex justify-between  '>

            <div className='ml-10 flex gap-4 items-end text-[rgb(150,153,166)] underline'>
              <span>Privacy & policy</span>
              
            </div>
            <div className=' flex  flex-col gap-2'>

              <Link href='/'>
                <InstagramIcon fontSize="large" className='text-[rgb(150,153,166)]' />
              </Link>
              <Link href='/' className=''>
                <FacebookIcon color="" fontSize="large" className='text-[rgb(150,153,166)]' />
              </Link>
            </div>
          </div>
        </div>

          

          
        </div>


      </div>
    </div>
  )
}

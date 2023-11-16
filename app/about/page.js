import Navbar from '@/components/Navbar'
import React from 'react'
import '@/style/style.css'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen  ">

                <div className="flex flex-col bg-gradient-to-b from-[#EBE3D5] to-[#F3EEEA]">

                    <div className="flex flex-col mt-8 ">

                        <div className="container max-w-7xl mx-auto px-4 ">

                            <div className="relative mx-auto max-w-5xl text-center">
                                <span className="text-gray-900 my-3 text-3xl flex items-center justify-center font-medium uppercase tracking-wider">
                                    Meet Our Team
                                </span>

                            </div>

                            <div className="flex flex-wrap justify-center mt-20">

                                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                    <div className="flex flex-col">

                                        <Link href="/" className="mx-auto">
                                            <Image height={100} width={100} className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                src="/avtar.jpeg" />
                                        </Link>

                                        <div className="text-center mt-6">
                                            <h1 className="text-gray-800 text-xl font-bold mb-1">
                                                Anna Louise Ravn Poulsen
                                            </h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                    <div className="flex flex-col">
                                        <Link href="/" className="mx-auto">
                                            <Image height={100} width={100} className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                src="/avtar.jpeg" />
                                        </Link>

                                        <div className="text-center mt-6">
                                            <h1 className="text-gray-800 text-xl font-bold mb-1">
                                                Mathilde Deela Christensen
                                            </h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                    <div className="flex flex-col">

                                        <Link href="/" className="mx-auto">
                                            <Image height={100} width={100} className="rounded-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                src="/avtar.jpeg" />
                                        </Link>

                                        <div className="text-center mt-6">
                                            <h1 className="text-gray-800 text-xl font-bold mb-1">
                                                Louise Bergkrantz
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='  w-[4/5] mx-auto'>
                                <p className='text-center'>

                                    We are the minds behind the HOMIES.We are three friends who founded HOMIES together.Our idea with HOMIES is to make it easier and safer for exchange student to swap homes with each other.We are a brand-new startup that was established in 2023.
                                </p>
                            </div>
                            <div className='flex flex-wrap gap-10 mt-10 justify-center'>
                                <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2 ">Email us</button>
                                <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2 ">Call us</button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <section id="features"
                            className="relative block px-6 py-10 md:py-20 md:px-10  ">
                            <div className="relative mx-auto max-w-5xl text-center">
                                <span className="text-gray-900 my-3 text-3xl flex items-center justify-center font-medium uppercase tracking-wider">
                                    About HOMIES
                                </span>

                            </div>


                            <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="rounded-md border bg-gray-50  p-8 text-center shadow-lg">
                                    <div className="button-text mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 flex h-12 w-12 items-center justify-center rounded-md border "
                                        style={{ backgroundImage: ""}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="24"
                                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                                            <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                                            <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                                            <line x1="17" y1="17" x2="17" y2="17.01"></line>
                                        </svg>
                                    </div>
                                    {/* <h3 className="mt-6 text-gray-400">Customizable</h3> */}
                                    <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-500">We understand that exchange students often face challenges when searching for temporary accomodations in foreign country.With HOMIES, we aim to eliminate these barriers and provide a safe and reliable network for home exchange.Our platform enables students to connect with potential home exchange partners from around the world and customize their housing search to meet their individual needs.
                                    </p>
                                </div>


                                <div className="rounded-md border  bg-gray-50 p-8 text-center shadow-lg">
                                    <div className="button-text mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 flex h-12 w-12 items-center justify-center rounded-md border "
                                        style={{ backgroundImage: "" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools" width="24"
                                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                                            <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                                            <polyline points="12 8 7 3 3 7 8 12"></polyline>
                                            <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                                            <polyline points="16 12 21 17 17 21 12 16"></polyline>
                                            <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                                        </svg>
                                    </div>
                                    {/* <h3 className="mt-6 text-gray-400">Fast Performance</h3> */}
                                    <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-500">We prioritize the safety and quality of home exchanges through carefully selected security measures and quality checks.This ensures that our users cn trust that they are exchaning homes with dependaple partners and receive the support they need throughtout the process.
                                    </p>
                                </div>


                                <div className="rounded-md border bg-gray-50 p-8 text-center shadow-lg">
                                    <div className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                                        style={{  }}>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bolt" width="24"
                                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                                        </svg>
                                    </div>
                                    {/* <h3 className="mt-6 text-gray-400">Fully Featured</h3> */}
                                    <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-500">
                                        HOMIES is not just about finding a place to live;it is also abou buildingconnections and sharing cultures.We believe that by helping students find homely atmosphere in a new country,We can contribute to a more enriching and memorable exchange experience.
                                    </p>
                                </div>


                            </div>

                            <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
                                style={{ backgroundImage: "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)", borderColor: "rgba(92, 79, 240, 0.2)" }}>
                            </div>
                            <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
                                style={{ backgroundImage: "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)", borderColor: "rgba(92, 79, 240, 0.2)" }}>
                            </div>

                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page

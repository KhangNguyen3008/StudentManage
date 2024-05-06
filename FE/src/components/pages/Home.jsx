import Link from 'next/link'
import React from 'react'

export default function Home() {
    return (
        <>
   
                <div className='mt-4 w-full relative'>
                    <div className=''>
                        <div className=' w-full bg-black opacity-50 absolute top-0 bottom-0 z-2' ></div>
                        <img src="https://wallpapers.com/images/hd/magazine-background-698y8kr8ut9l7r6p.jpg" alt="Placeholder Image" className="w-full max-h-[100vh]  " />
                        <div className="absolute w-full top-1/3 bottom-auto sm:text-3xl xl:text-4xl font-extrabold text-white text-center">
                            <h1 className='mb-10'>Welcome to Univercity Megazine website</h1>
                            <Link href='/login' className="p-3 bg-rose-600 rounded-2xl sm:text-2xl xl:text-3xl hover:bg-rose-700 hover:no-underline hover:text-white transition-all duration-500">View Megazine</Link>
                        </div>
                    </div>
                </div>
   

        </>
    )
}

'use client'
import Link from 'next/link';
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
  return (
    <>
      <ToastContainer />
      <div className=' '>
        <div className='mx-[300px] mt-2 flex justify-between items-center px-20 '>
          <img src="/home/images/logo.png" alt="" className='max-w-[200px]' />
          <div>
            <Link href={'/login'} className='text-3xl font-bold'>Login</Link>
          </div>
        </div>
        <div className=' border-y-2 px-[300px] text-3xl font-bold  py-3  '>
          <Link href='/home' className='! text-black hover:border-red-300 '>Home</Link>
        </div>
      </div>
    </>
  )
}

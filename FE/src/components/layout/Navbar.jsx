'use client'
import instance from '@/data/Instance';
import AuthService from '@/services/AuthService';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
  const [user, setUser] = useState()
 
  useEffect(()=>{
    AuthService.profile().then(x => setUser(x.data)).catch(e=>console.log(e))
    return ()=>{
      
    }
  },[])
  return (
    <>
      <ToastContainer />
      <div className=' '>
        <div className='mx-[300px] mt-2 flex justify-between items-center px-20 '>
          <img src="/home/images/logo.png" alt="" className='max-w-[200px]' />
          {
            !user ? <div>
              <Link href={'/login'} className='text-3xl font-bold'>Login</Link>
            </div> :

              <div className='flex items-center gap-4'>
                <button className='text-3xl font-bold'>{user && user.fullName}</button>
                <button onClick={(e)=>{localStorage.removeItem('token')}} className='text-3xl font-bold'>logout</button>
              </div>
          }
        </div>
        <div className=' border-y-2 px-[300px] text-3xl font-bold  py-3  '>
          <Link href='/home' className='! text-black hover:border-red-300 '>Home</Link>
        </div>
      </div>
    </>
  )
}

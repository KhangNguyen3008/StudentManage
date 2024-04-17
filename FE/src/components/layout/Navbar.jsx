'use client'
import instance from '@/data/Instance';
import AuthService from '@/services/AuthService';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './header.css';
export default function Navbar() {
  const [user, setUser] = useState()
  const [isAuth, setIsAuth] = useState()

  useEffect(() => {

    AuthService.profile().then(x => setUser(x.data)).catch(e => console.log(e))
    return () => {

    }
  }, [])
  return (
    <>

      <ToastContainer />
      <div className='border-y-2 px-[180px] text-3xl font-bold py-3'>
      <div className='flex justify-between items-center px-20'>
        {/* Container cho Logo và Home */}
        <div className='flex items-center space-x-8'>
          <img src="/home/images/logo.png" alt="Logo" className='max-w-[180px]' />
          <Link href='/home' className='text-black hover:border-red-300'>Home</Link>
        </div>
          {
            !user ? <div>
              <div>
          <Link href='/login' className='text-black hover:border-red-300'>Login</Link>
        </div>
              
            </div> :

              <div className='flex items-center gap-4'>
                <button className='text-3xl font-bold'>{user && user.fullName}</button>
                <button onClick={(e) => { localStorage.removeItem('token'); setUser() }} className='text-3xl font-bold'>logout</button>
              </div>
          }
        </div>
      </div>

    </>
  )
}

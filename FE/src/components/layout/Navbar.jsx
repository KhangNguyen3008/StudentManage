'use client'
import instance from '@/data/Instance';
import AuthService from '@/services/AuthService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
  const [user, setUser] = useState()
  const [path, setPath] = useState()
  const router = useRouter()
  useEffect(() => {

    AuthService.profile().then(x => {
      setUser(x.data)

      switch (x.data.roleId) {
        case 1:
          setPath('admin')
          break
        case 2:
          setPath('Manager/Index')

          break
        case 3:
          setPath('coordinator/index')
          break
        case 4:
          setPath('Student/index')

          break
        case 5:
          setPath('guest/index')
          break
      }

    }).catch(e => console.log(e))
    return () => {

    }
  }, [path])
  return (
    <>

      <ToastContainer />
      <div className='border-y-2 px-[180px] text-3xl font-bold py-3'>
        <div className='flex justify-between items-center px-20'>
          {/* Container cho Logo và Home */}
          <div className='flex items-center space-x-8'>
            <img src="/home/images/logo.png" alt="Logo" className='max-w-[180px]' />
            <Link href='/home' className='text-black hover:border-red-300'>Home</Link>
            <Link href={`/${path}`} className='text-black hover:border-red-300'>Dashboard</Link>
          </div>
          {
            !user ? <div>
              <div>
                <Link href='/login' className='text-black hover:border-red-300'>Login</Link>
              </div>

            </div> :

              <div className='flex items-center gap-4'>
                <Link href={'/profile'} className='text-3xl font-bold'>{user && user.fullName}</Link>
                <button onClick={(e) => { localStorage.removeItem('token'); setUser();router.push('/login') }} className='text-3xl font-bold'>logout</button>
              </div>
          }
        </div>
      </div>

    </>
  )
}

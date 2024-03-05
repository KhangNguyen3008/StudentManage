'use client'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Link from 'next/link';
export default function Login() {
  const [isActive, setIsActive] = useState(true)
  return (
    <div className='login-bg h-[100vh] w-full relative'>
      <div className=' absolute top-40 w-full flex justify-center'>
        <div className='w-[400px] bg-white rounded-md p-5'>
          <h1 className='flex justify-center font-bold text-3xl'>Login Form</h1>
          <div className='text-black flex justify-center text-xl mt-10'>
            <button onClick={(e) => { setIsActive(true) }} className={`${isActive ? "login-bg text-white" : ""} p-3 rounded-md `}>Login</button>
            <button onClick={(e) => { setIsActive(false) }} className={`${isActive ? "" : "login-bg text-white"} p-3 rounded-md`}>SignUp</button>
          </div>
          <form action="" className='mt-5 flex flex-col gap-4'>
            <TextField id="email" type='email' label="Email" variant="outlined" />
            <TextField id="password" type='password' label="Password" variant="outlined" />
            <button type='button' className='text-pink-500'>Forgot password?</button>
            <button type='submit' className='login-bg py-3 rounded-md'>
              Login
            </button>
          </form>
          <h2 className='flex justify-center gap-2 mt-5'>
            Not a member <Link href={'signup'} className='text-pink-500'> Sign Up</Link>
          </h2>
        </div>
      </div>
    </div>
  )
}

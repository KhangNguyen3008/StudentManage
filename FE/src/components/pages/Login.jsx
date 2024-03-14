'use client'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import instance from '@/data/Instance';
import { InputLabel, MenuItem, Select } from '@mui/material';
export default function Login() {
  const [data, setData] = useState()
  useEffect(() => {

    instance.get('/role').then(x => { setData(x.data) }).catch(() => {

    })
    return () => {

    }
  }, [])

  return (
    <div className='login-bg h-[100vh] w-full relative'>
      <div className=' absolute top-40 w-full flex justify-center'>
        <div className='w-[400px] bg-white rounded-md p-5'>
          <h1 className='flex justify-center font-bold text-3xl'>Login Form</h1>

          <form action="" className='mt-5 flex flex-col gap-4'>
            <TextField id="email" type='email' label="Email" variant="outlined" />
            <TextField id="password" type='password' label="Password" variant="outlined" />
            <InputLabel id="role" className='text-center'>Select Role</InputLabel>
            <Select
              labelId="role"
              id="roleid"
              name='role'
              defaultValue={4}
              label="Age"
            >
              {data && data.map((item,i)=>{
                return <MenuItem key={i} value={item.id}>{item.name}</MenuItem>
              })}
         
            </Select>

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

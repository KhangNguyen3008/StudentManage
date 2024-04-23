'use client'
import AuthService from '@/services/AuthService'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function layout({children}) {
  const [user, setUser] = useState()
  const router = useRouter()
  useEffect(() => {
      AuthService.profile().then(x => setUser(x.data)).catch(e => router.push('/login'))
  },[])
  if (user) {
      if (user?.roleId !== 3) {
          router.push('/login')
      }
  }
  return (
    <div>{children}</div>
  )
}

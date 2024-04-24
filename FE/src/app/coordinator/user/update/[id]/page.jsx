

import React from 'react'

import UpdateFaculty from '@/components/pages/UpdateFaculty'
import UpdateUser from '@/components/pages/UpdateUser'
import UpdateUserCo from '@/components/pages/UpdateUserCo'

export default function  page({params}) {
  return (
    <div> <UpdateUserCo id={params.id}/></div>
  )
}

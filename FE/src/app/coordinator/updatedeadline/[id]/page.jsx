

import React from 'react'


import UpdateDeadline from '@/components/pages/UpdateDeadline'

export default function  page({params}) {
  return (
    <div> <UpdateDeadline id={params.id}/></div>
  )
}

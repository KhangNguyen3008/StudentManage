import FacultyDetail from '@/components/pages/FacultyDetail'
import React from 'react'

export default function page({params}) {
  return (
    <FacultyDetail id={params.id}/>
  )
}

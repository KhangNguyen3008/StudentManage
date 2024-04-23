

import React from 'react'
import UpdateContribution from '../../../../../components/pages/UpdateContribution'
import UpdateAcademicyear from '@/components/pages/UpdateAcademicyear'

export default function  page({params}) {
  return (
    <div> <UpdateAcademicyear id={params.id}/></div>
  )
}

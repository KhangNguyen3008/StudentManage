

import React from 'react'
import UpdateContribution from '../../../../../components/pages/UpdateContribution'
import UpdateDeadlineAdmin from '@/components/pages/UpdateDeadlineAdmin'

export default function  page({params}) {
  return (
    <div> <UpdateDeadlineAdmin id={params.id}/></div>
  )
}

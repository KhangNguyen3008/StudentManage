import ContributionDetail from '@/components/pages/ContributionDetail'
import React from 'react'

export default function page({params}) {
  return (
    <ContributionDetail id={params.id}/>
  )
}

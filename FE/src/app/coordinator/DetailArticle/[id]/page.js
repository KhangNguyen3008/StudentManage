
import ContributionDetailCo from '@/components/pages/ContributionDetailCo'
import React from 'react'

export default function page({params}) {
  return (
    <ContributionDetailCo id={params.id}/>
  )
}

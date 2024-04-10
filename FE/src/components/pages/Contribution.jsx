import React from 'react'
import TableCustom from '../ui/TableCustom'
import { Button } from '@mui/material'

import ContributionTable from './ContributionTable'

export default function Contribution() {
  return (
    <div>
        <Button href='/admin/contribution/create' variant='outlined' color='primary'>Create new Contribution</Button>
        <ContributionTable />
    </div>
  )
}

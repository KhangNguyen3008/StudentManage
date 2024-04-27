import React from 'react'
import TableCustom from '../ui/TableCustom'
import { Button } from '@mui/material'

import ContributionTable from './ContributionTable'
import DeadlineTable from './DeadlineTable'

export default function Deadline() {
  return (
    <div>
        <Button href='/admin/deadline/create' variant='outlined' color='primary'>Create new Deadline</Button>
        <DeadlineTable />
    </div>
  )
}

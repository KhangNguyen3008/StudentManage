import React from 'react'
import TableCustom from '../ui/TableCustom'
import { Button } from '@mui/material'

export default function Faculty() {
  return (
    <div>
        <Button variant='outlined' color='primary'>Create new Falcuty</Button>
        <TableCustom />
    </div>
  )
}

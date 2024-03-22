import React from 'react'
import TableCustom from '../ui/TableCustom'
import { Button } from '@mui/material'
import FacultyTable from './FacultyTable'

export default function Faculty() {
  return (
    <div>
        <Button href='/admin/faculty/create' variant='outlined' color='primary'>Create new Falcuty</Button>
        <FacultyTable />
    </div>
  )
}

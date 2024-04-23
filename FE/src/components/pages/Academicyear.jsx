import React from 'react'
import TableCustom from '../ui/TableCustom'
import { Button } from '@mui/material'
import FacultyTable from './FacultyTable'
import AcademicyearTable from './AcademicyearTable'

export default function Academicyear() {
  return (
    <div>
        <Button href='/admin/academicyear/create' variant='outlined' color='primary'>Create new Acadenic Year</Button>
        <AcademicyearTable />
    </div>
  )
}

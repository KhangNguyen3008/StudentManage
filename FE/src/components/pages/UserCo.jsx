import React from 'react'
import TableCustom from '../ui/TableCustom'
import { Button } from '@mui/material'
import UserTable from './UserTable'

export default function UserCo() {
  return (
    <div>
        <Button href='/coordinator/user/create' variant='outlined' color='primary' >Create new User</Button>
        <UserTable />
    </div>
  )
}

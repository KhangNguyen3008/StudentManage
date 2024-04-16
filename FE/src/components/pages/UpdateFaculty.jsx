
'use client'
import React, { useEffect, useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button, MenuItem, Select } from '@mui/material';
import SelectRole from '../ui/SelectRole';
import UserService from '@/services/UserService';
import { toast } from 'react-toastify';
import SelectMc from '../ui/SelectMc';
import FacultyService from '@/services/FacultyService';


export default function UpdateFaculty({id}) {
  const [faculty,setFaculty] = useState()
  const onSubmit = (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    FacultyService.updateFaculty(id,formdata).then(x => {
      toast.success('Update success')

    }).catch(err => {
      console.log(err)
      toast.error('Update failed')
    })
  }
  useEffect(()=>{
    FacultyService.getFacultyById(id).then(x=>[
      setFaculty(x.data)
    ])
  },[])
  if(!faculty) return
  console.log(faculty)
  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={3} >
        <Grid item xs={12} md={6} className='flex !flex-col' >
          <FormLabel htmlFor="name" required>
            Name
          </FormLabel>
          <OutlinedInput
            id="name"
            name="name"
            type="text"
            placeholder="enter name"
            autoComplete="name"
            required
            defaultValue={faculty?.name||""}
          />
        </Grid>
        {/* <Grid item xs={12} md={6} className='flex !flex-col'>
          <FormLabel htmlFor="name" required>
            Closure Date
          </FormLabel>
          <OutlinedInput
            id="closuredate"
            name="closuredate"
            type="datetime-local"
            placeholder="Select closure date"
          
            required
          />
        </Grid>
        <Grid item xs={12} md={6} className='flex !flex-col'>
          <FormLabel htmlFor="finalclosuredate" required>
            Final Closure Date
          </FormLabel>
          <OutlinedInput
            id="finalclosuredate"
            name="finalclosuredate"
            type="datetime-local"
            placeholder="Select final closure date"
    
            required
          />
        </Grid> */}
        <Grid item xs={12} md={6} className='flex !flex-col item'>
          <SelectMc defaultValue={faculty?.user.find(x=>x.roleId==3).id}/>
        </Grid>
        <Grid item xs={12} md={12} className='flex !flex-col'>
          <FormLabel htmlFor="isrequest" required>
            Is Request
          </FormLabel>
          <div className='flex justify-start'>
            <Checkbox name="isrequest" defaultChecked={faculty?.isrequest} className=' justify-start' />
          </div>
        </Grid>
        <Grid item xs={6} md={3} className='flex !flex-col'>
          <Button type='submit' variant='contained' className='bg-primary'>Update</Button>
        </Grid>
        <Grid item xs={6} md={3} className='flex !flex-col'>
          <Button href='/admin/faculty' type='button' variant='contained' color='error' className='bg-error'>Cancel</Button>
        </Grid>
      </Grid>
    </form >
  )
}

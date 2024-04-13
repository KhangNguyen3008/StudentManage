'use client'
import React, { useEffect, useState } from 'react'
import { FormLabel, InputLabel, MenuItem, Select } from '@mui/material'
import FacultyService from '@/services/FacultyService'

export default function SelectFac({defaultValue}) {
    const [data, setData] = useState()
 
    useEffect(() => {
    
        FacultyService.getFaculty().then(x => { setData(x.data)}).catch(() => {
        })
        return () => {
        }
    }, [])
    if(!data) 
    return (
       <>
        <FormLabel id="faculty" >Select Faculty</FormLabel>
       </>
    )
    return (
       <>
        <FormLabel htmlFor="faculty" >Select Faculty</FormLabel>
        <Select
            labelId="faculty"
            id="facultyid"
            name='facultyid'
            label="Faculty"
            defaultValue={defaultValue?defaultValue:data?data[0].id:null}
        >
            {data && data.map((item, i) => {
                return <MenuItem key={i} value={item.id}>{item.name}</MenuItem>
            })}

        </Select>
        </>
    )
}

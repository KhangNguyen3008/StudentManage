'use client'
import ContributionService from '@/services/ContributionService';
import FacultyService from '@/services/FacultyService';
import { Button } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaWeight } from 'react-icons/fa';
import Time from '../ui/Time';
import AuthService from '@/services/AuthService';


export default function ContributionDetailCo({ id }) {
    const [contribution, setContribution] = useState()

    useEffect(() => {
        ContributionService.getContributionById(id).then(x => setContribution(x.data)).catch(e => {
            console.log(e)
        })
       
    }, [])
    if (!contribution) {
        return "Don't have Contribution this"
    }
    return (
        <div className='container'>
            <div>
                <h1><b>{contribution.name}</b></h1>

                {/* <h2>Closure date: {faculty.closureDate && new Date(faculty.closureDate).toLocaleString()}</h2>
                <h2>Final Closure date: {faculty.closureDate && new Date(faculty.finalclosureDate).toLocaleString()}</h2> */}
                <h2> {contribution.description}</h2>
            </div>

            <div>
                <div className='mb-[50px]'>
                    <h1 style={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}>Deadline List</h1>
                     <Link className='bg-primary p-3 ' href={`/coordinator/newdeadline/${contribution.id}`}>New Deadline</Link>
                </div>
                {contribution && contribution.deadline.map((x, i) => {

                    return <details>
                        <summary className="summary"><div className='flex justify-between items-center'><h1 className=''>Submission no {i+1}.#</h1><Link href={`/coordinator/submission/detail/${x.id}`}>View Submission</Link> </div></summary>
                        <div className="table-container">
                            <table>
                                <tbody>
                                    <tr>
                                    <td className="left-column">Name:</td>
                                    <td className="right-column">{x.name}</td>
                                </tr> 
                                    <tr>
                                        <td className="left-column">closure Date :</td>
                                        <td className="right-column">{<Time string={x.closureDate} />}</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">FInal Closure Date:</td>
                                        <td className="right-column">{<Time string={x.finalClosureDate} />}</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Total Submission:</td>
                                        <td className="right-column">{x.submission.length}</td>
                                    </tr>
                                    {/* <tr>
                                        <td className="left-column">Comment:</td>
                                        <td className="right-column">
                                            <form action=""><textarea name="" id="" cols="10" rows="4">
                                            </textarea>
                                                <Button variant='contained' className=' bg-primary'>Comment</Button>
                                            </form>
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </details>
                })}

            </div >
        </div >

    )
}

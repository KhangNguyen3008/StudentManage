'use client'
import ContributionService from '@/services/ContributionService';
import FacultyService from '@/services/FacultyService';
import { Button } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaWeight } from 'react-icons/fa';
import Time from '../ui/Time';
import AuthService from '@/services/AuthService';
import { toast } from 'react-toastify';


export default function ContributionDetailCo({ id }) {
    const [contribution, setContribution] = useState()

    useEffect(() => {
        ContributionService.getContributionById(id).then(x => setContribution(x.data)).catch(e => {
            console.log(e)
        })
         
    }, [])
    const downloadfile = async(e)=>{
        e.preventDefault()
        let result = await ContributionService.downloadfile(id)
        const url = window.URL.createObjectURL(new Blob([result.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${contribution.name}.zip`);
        document.body.appendChild(link);
        link.click();
        toast.success(`export success`)
    }
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
                <button className='bg-primary p-3' onClick={downloadfile}>Download All File</button>
            </div>

            <div>
                <div className='mb-[50px]'>
                    <h1 style={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}>Deadline List</h1>
                     <Link className='bg-primary p-3 ' href={`/coordinator/createdeadline/${contribution.id}`}>New Deadline</Link>
                </div>
                {contribution && contribution.deadline.map((x, i) => {

                    return <details>
                        <summary className="summary"><div className='flex justify-between items-center'><h1 className=''>Submission no {i+1}.#</h1><div className='flex gap-3'><Link href={`/coordinator/submission/detail/${x.id}`}>View Submission
                        </Link><Link href={`/coordinator/updatedeadline/${x.id}`}>Update</Link></div> </div></summary>
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
                                        <td className="right-column">{<Time string={x.finalclosureDate} />}</td>
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

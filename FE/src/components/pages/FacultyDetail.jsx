'use client'
import ContributionService from '@/services/ContributionService';
import FacultyService from '@/services/FacultyService';
import { Button } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaWeight } from 'react-icons/fa';
import Time from '../ui/Time';


export default function FacultyDetail({ id }) {
    const [contribution, setContribution] = useState()
    const [faculty, setFaculty] = useState()
    useEffect(() => {
        FacultyService.getFacultyById(id).then(x => setFaculty(x.data)).catch(e => {
            console.log(e)
        })
        ContributionService.getContributionByStudent(id).then(x => setContribution(x.data)).catch(e => { })
    }, [])
    if (!faculty) {
        return "Don't have Faculty this"
    }
    return (
        <div className='container'>
            <div>
                <h1><b>{faculty.name}</b></h1>

                <h2>Closure date: {faculty.closureDate && new Date(faculty.closureDate).toLocaleString()}</h2>
                <h2>Final Closure date: {faculty.closureDate && new Date(faculty.finalclosureDate).toLocaleString()}</h2>
                <h2> {faculty.description}</h2>
            </div>

            <div>
                <div className='mb-[50px]'>
                    <h1 style={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}>Submission List</h1>
                    <Link className='bg-primary p-3 ' href={`/Student/NewArticle/${id}`}>New Submission</Link>
                </div>
                {contribution && contribution.map((x, i) => {

                    return <details>
                        <summary className="summary">Submission no {i}.#</summary>
                        <div className="table-container">
                            <table>
                                <tbody>
                                    {/* <tr>
                                    <td className="left-column">Status:</td>
                                    <td className="right-column">Selected</td>
                                </tr> */}
                                    <tr>
                                        <td className="left-column">Submit At:</td>
                                        <td className="right-column">{<Time string={x.createdAt} />}</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Update:</td>
                                        <td className="right-column">{<Time string={x.updatedAt} />}</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">File Submission:</td>
                                        <td className="right-column"><a href={`/${x.filePath}`}>{x.fileName}</a></td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Comment:</td>
                                        <td className="right-column">
                                            <form action=""><textarea name="" id="" cols="10" rows="4">
                                            </textarea>
                                                <Button variant='contained' className=' bg-primary'>Comment</Button>
                                            </form>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </details>
                })}

            </div >
        </div >

    )
}

'use client'
import ContributionService from '@/services/ContributionService';
import FacultyService from '@/services/FacultyService';
import { Button } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaWeight } from 'react-icons/fa';
import Time from '../ui/Time';
import AuthService from '@/services/AuthService';


export default function ContributionDetail({ id }) {
    const [contribution, setContribution] = useState()

    const [user, setUser] = useState()
    useEffect(() => {
        ContributionService.getContributionById(id).then(x => setContribution(x.data)).catch(e => {
            console.log(e)
        })
        AuthService.profile().then(x => setUser(x.data)).catch(e => { })
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
                    {user && user.roleid == 3 && <Link className='bg-primary p-3 ' href={`/Student/NewArticle/${id}`}>New Deadline</Link>}
                </div>
                {contribution && contribution.deadline.map((x, i) => {

                    return <details>
                        <summary className="summary">Submission no {i+1}.#</summary>
                        <div className="table-container">
                            <table>
                                <tbody>
                                    <tr>
                                    <td className="left-column">Name:</td>
                                    <td className="right-column">{x.name}</td>
                                </tr> 
                                    <tr>
                                        <td className="left-column">Closure Date</td>
                                        <td className="right-column">{<Time string={x.closureDate} />}</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Final Closure Date</td>
                                        <td className="right-column">{<Time string={x.finalclosureDate} />}</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Status</td>
                                        <td className="right-column">{user&& x.submission.filter(z=>z.userId ==user?.id).length>0?'submmited':'Not submitted'}</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Submit</td>
                                        <td className="right-column">{new Date().getTime() > new Date(x.closureDate).getTime()?"You can't submmit":user&& x.submission.filter(z=>z.userId ==user?.id).length>0?<Link href={`/Student/updatearticle/${x.id}`} className='p-3 text-white bg-primary rounded-md'>Update</Link>:<Link href={`/Student/NewArticle/${x.id}`} className='p-3 text-white bg-primary rounded-md'>submit</Link>}</td>
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

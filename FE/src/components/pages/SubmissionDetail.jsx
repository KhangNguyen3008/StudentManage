'use client'
import SubmissionService from '@/services/SubmissionService'
import React, { useEffect, useState } from 'react'
import Time from '../ui/Time'
import { Button } from '@mui/material';
export default function SubmissionDetail({ id }) {
    const [submission, setSubmission] = useState()
    useEffect(() => {
        SubmissionService.getSubmissionBydeadline(id).then(x => setSubmission(x.data)).catch(e => { })
    }, [])
    console.log(submission)
    return (
        <div>
            <button>Download All File</button>
            {submission && submission.map(x => {
                return (
                    <details>
                        <summary className="summary">{x.user.fullName} - {x.title}</summary>
                        <div className="table-container">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="left-column">Student Email:</td>
                                        <td className="right-column">{x.user.email}</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Title</td>
                                        <td className="right-column">{x.title}</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Content</td>
                                        <td className="right-column">{x.content}</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Submited Date</td>
                                        <td className="right-column">{<Time string={x.createdAt} />}</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Update Date</td>
                                        <td className="right-column">{<Time string={x.updatedAt} />}</td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">File Submission</td>
                                        <td className="right-column">

                                            {x.fileupload.map(z=>{
                                                return <p>{z.fileName}</p>
                                            })}

                                        </td>
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
                )
            })}
        </div>
    )
}

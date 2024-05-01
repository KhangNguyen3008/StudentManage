'use client'
import SubmissionService from '@/services/SubmissionService'
import React, { useEffect, useState } from 'react'
import Time from '../ui/Time'
import { Button, Grid } from '@mui/material';
import CommentService from '@/services/CommentService';
import SelectStatus from '../ui/SelectStatus';
import { toast } from 'react-toastify';
export default function SubmissionDetail({ id }) {

    const [submission, setSubmission] = useState()

    const submitComment = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target)
        CommentService.createComment(formdata).then(x => {
            SubmissionService.getSubmissionBydeadline(id).then(x => {
                setSubmission(x.data)


            }).catch(e => { })
        })
    }
    const changeStatus = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target)
        SubmissionService.updateStatus(id, formdata).then(x => {
            toast.success(`update success`)
            SubmissionService.getSubmissionBydeadline(id).then(x => {
                setSubmission(x.data)


            }).catch(e => { toast.error(`update failed`) })
        })

    }
    const updateComment = (idcm) => (e) => {
        console.log(1)
        e.preventDefault();
        const formdata = new FormData(e.target)
        CommentService.updateComment(idcm, formdata).then(x => {
            SubmissionService.getSubmissionBydeadline(id).then(x => {
                
                setSubmission(x.data)


            }).catch(e => { })
        })
    }

    useEffect(() => {
        SubmissionService.getSubmissionBydeadline(id).then(x => {
            setSubmission(x.data)


        }).catch(e => { })
    }, [])

    return (
        <div>
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
                                        <td className="left-column">Status</td>
                                        <td className="right-column"><form action="" onSubmit={changeStatus}>
                                            <Grid item xs={12} md={6} className='flex !flex-col'>
                                                <SelectStatus defaultValue={x?.statusId} />
                                                <button type='submit' className='bg-primary mt-4 p-2 text-white'>save</button>
                                            </Grid>
                                        </form></td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">File Submission</td>
                                        <td className="right-column">

                                            {x.fileupload.map(z => {
                                                return <p>{z.fileName}</p>
                                            })}

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="left-column">Comment:</td>

                                        <td className="right-column">
                                            {x.comment.length > 0 ? <form action="" onSubmit={updateComment(x.comment[0].id)}>
                                                <p></p>
                                                <input type="hidden" name="submissionid" value={x.id} />
                                                <textarea name="content" id="" cols="10" rows="4" defaultValue={x.comment[0].content}>
                                                </textarea>
                                                <Button type='submit' variant='contained' className=' bg-primary'>Update</Button>
                                            </form> : <form action="" onSubmit={submitComment}>

                                                <input type="hidden" name="submissionid" value={x.id} />
                                                <textarea name="content" id="" cols="10" rows="4">
                                                </textarea>
                                                <Button type='submit' variant='contained' className=' bg-primary'>Comment</Button>
                                            </form>}


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

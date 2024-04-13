'use client'
import React, { useEffect, useState } from 'react'
import '../../app/globals.css'
import FacultyService from '@/services/FacultyService'
import ContributionService from '@/services/ContributionService'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import SubmissionService from '@/services/SubmissionService'
import DeadlineService from '@/services/DeadlineService'
import { MdDeleteSweep } from "react-icons/md";
import UploadFileService from '@/services/UploadFileService'
export default function UpdateArticle({ id }) {
    const [deadline, setDeadline] = useState()
    const [submission, setSubmission] = useState()
    const router = useRouter()
    useEffect(() => {
        SubmissionService.getSubmissionById(id).then(x => {
            setSubmission(x.data)
            DeadlineService.getDeadlineById(x.data.deadlineId).then(x => setDeadline(x.data)).catch(e => {

            })
        })

        return () => {

        }
    }, [])
    const onSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target)
        SubmissionService.updateSubmission(id, formdata).then(x => { toast.success(`Update success`); router.push(`/Student/DetailArticle/${id}`) }).catch(e => {
            console.log(e)
            toast.error(`Update failed`)
        })

    }
    const deleteFile = (idp) => (e) => {
        UploadFileService.deleteFile(idp).then(x => {
            SubmissionService.getSubmissionById(id).then(x => {
                setSubmission(x.data)
                DeadlineService.getDeadlineById(x.data.deadlineId).then(x => setDeadline(x.data)).catch(e => {

                })
            })
            toast.success('Delete Success')
        }).catch(e => {
            toast.error('Error deleting file')
        })
    }
    if (!deadline) {
        return
    }
    if (!submission) return
    return (
        <>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            <meta
                name="description"
                content="magazine"
            />
            <meta name="author" content="Kodinger" />
            <meta
                name="keyword"
                content="magz, html5, css3, template, magazine template"
            />
            {/* Shareable */}
            <meta
                property="og:title"
                content="HTML5 & CSS3 magazine template is based on Bootstrap 3"
            />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="http://github.com/nauvalazhar/Magz" />
            <meta
                property="og:image"
                content="https://raw.githubusercontent.com/nauvalazhar/Magz/master//home/images/preview.png"
            />
            <title>Add New Artical  &amp; -Student </title>
            {/* Bootstrap */}
            <link rel="stylesheet" href="/home/scripts/bootstrap/bootstrap.min.css" />
            {/* IonIcons */}
            <link rel="stylesheet" href="/home/scripts/ionicons//home/css/ionicons.min.css" />
            {/* Toast */}
            <link rel="stylesheet" href="/home/scripts/toast/jquery.toast.min.css" />
            {/* OwlCarousel */}
            <link
                rel="stylesheet"
                href="/home/scripts/owlcarousel/dist/assets/owl.carousel.min.css"
            />
            <link
                rel="stylesheet"
                href="/home/scripts/owlcarousel/dist/assets/owl.theme.default.min.css"
            />
            {/* Magnific Popup */}
            <link
                rel="stylesheet"
                href="/home/scripts/magnific-popup/dist/magnific-popup.css"
            />
            <link rel="stylesheet" href="/home/scripts/sweetalert/dist/sweetalert.css" />
            {/* Custom style */}
            <link rel="stylesheet" href="/home/css/style.css" />
            <link rel="stylesheet" href="/home/css/skins/all.css" />
            <link rel="stylesheet" href="/home/css/demo.css" />
            <div className="container2">
                <h1 className="mt-5" style={{ fontSize: '24px', color: 'darkslategray', lineHeight: '2.5' }}>Add New Article For This Year Magazine</h1>
                <h1 className="mt-5" style={{ fontSize: '1.5rem' }}>Closure Date:  {deadline.closureDate && new Date(deadline.closureDate).toLocaleString()}</h1>
                <h1 className="mt-5" style={{ fontSize: '1.5rem' }}>Closure Date:  {deadline.finalclosureDate && new Date(deadline.finalclosureDate).toLocaleString()}</h1>
                <h1 className="faculty" style={{ fontSize: '1.5rem' }}>{deadline.name}</h1>
                <form className="mt-3" onSubmit={onSubmit}>
                    <input type="hidden" name='deadlineid' value={deadline.id} />
                    <div className="mb-3">
                        <label htmlFor="articleTitle" className="form-label">Article Title:</label>
                        <div className="textbox-container">
                            <input type="text" name='title' defaultValue={submission?.title} placeholder="Enter your article Title" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ArticleContent" className="form-label">Article Content:</label>
                        <div className="textbox-container">

                            <input type="text" name='content' defaultValue={submission?.content} placeholder="Enter your article content" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="articlePhoto" className="form-label">File Submission:</label>
                        {submission && submission.fileupload.map(x => {
                            return <div className='flex gap-10 item-center justify-between border-2 border-gray-300 p-2'>
                                <p >{x.fileName}</p> <button type='button' onClick={deleteFile(x.id)}><MdDeleteSweep className='text-3xl' /></button>
                            </div>
                        })}
                        <input type="file" name='file' className="form-control" id="articlePhoto" accept="image/png, image/jpeg, application/msword" multiple />
                    </div>
                    <div>Accepted file formats:</div>
                    <div className="mb-3 document-files">
                        Document files: <span>.doc .docx .epub .gdoc .odt .oth .ott .pdf .rtf</span>
                    </div>
                    <div className="mb-3 image-files">
                        Image files: <span>.jpg .jpeg .png</span>
                    </div>
                    <div className="mb-3">--------------------------------</div>

                    <button type="submit" className="btn bg-primary mr-2">Submit</button>
                    <button type="button" onClick={(e)=>{router.push(`/Student/DetailArticle/${deadline?.id}`)}} className="btn bg-error">Cancel</button>
                </form>
            </div>
        </>
    )
}

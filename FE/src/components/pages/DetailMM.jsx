'use client'
import FacultyService from '@/services/FacultyService'
import React, { useEffect, useState } from 'react'
import Time from '../ui/Time'
import { Button } from '@mui/material'
import ContributionService from '@/services/ContributionService'
import { toast } from 'react-toastify'

export default function DetailMM({ id }) {
    const [faculty, setFaculty] = useState()
    useEffect(() => {
        FacultyService.getFacultyById(id).then(x => { setFaculty(x.data) }).catch(e => { })
    }, [])
    const downloadfile = async(e)=>{
        e.preventDefault()
        let result = await FacultyService.downloadfile(id)
        const url = window.URL.createObjectURL(new Blob([result.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${faculty?.name}.zip`);
        document.body.appendChild(link);
        link.click();
        toast.success(`export success`)
        
    }
    if (!faculty) {
        return "Do not exist this faculty"
    }
    console.log(faculty)
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
            <title>Details  &amp; -Marketing Manager </title>
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
            <div>

                <main>
                    <header>
                        <h5 className=' text-center'>{faculty.name} </h5>
                    </header>
                    <div className="description-download">
                        <p>{faculty.description}</p>
                        <section className="details">
                            <div className="left-column">
                                <ul>
                                    <li>Upload Date: {<Time string={faculty.createdAt} />}</li>
                                    <li>Closure Date: {<Time string={faculty.closureDate} />} </li>
                                    <li>Final Closure Date: {<Time string={faculty.finalclosureDate} />} </li>
                                </ul>
                            </div>
                            <div className="right-column">
                                <ul>
                                    <li>Marketing Coordinator : {faculty?.user.filter(x=>x.roleId==3)[0].email} </li>
                                    <li>Total Submited : {faculty.contribution.length} </li>
                                    <li></li>
                                </ul>
                            </div>
                        </section>
                        <section className="download">
                            <h5>Download File</h5>
                            <p>You can download the file related to this article here:  <button className='bg-primary p-3' onClick={downloadfile}>Download All File</button></p>
                        </section>
                    </div>
                    <section className="related-contributions">
                        <h5>Related Contributions</h5>
                        {faculty.contribution && faculty.contribution.map(x => {

                            return <details>
                                <summary className="summary">Contributions</summary>
                                <div className="table-container">
                                    <table>
                                        <tbody>
                                            {/* <tr>
                <td className="left-column">Status:</td>
                <td className="right-column">Selected</td>
            </tr> */}
                                            <tr>
                                                <td className="left-column">Create At:</td>
                                                <td className="right-column">{<Time string={x.createdAt} />}</td>
                                            </tr>
                                            <tr>
                                                <td className="left-column">Update At:</td>
                                                <td className="right-column">{<Time string={x.updatedAt} />}</td>
                                            </tr>
                                            <tr>
                                                <td className="left-column">Description:</td>
                                                <td className="right-column">{x.description} </td>
                                            </tr>
                                            <tr>
                                                <td className="left-column"> Coordinator</td>
                                                <td className="right-column">{faculty?.user.filter(x=>x.roleId==3)[0].email}</td>
                                            </tr>
                                          
                                        </tbody>
                                    </table>
                                </div>
                            </details>
                        })}
                    </section>
                </main>
            </div>
        </>
    )
}

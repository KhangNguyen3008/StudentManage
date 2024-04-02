'use client'
import FacultyService from '@/services/FacultyService'
import React, { useEffect, useState } from 'react'
import Time from '../ui/Time'
import Link from 'next/link'

export default function IndexMM() {
  const [faculty, setFaculty] = useState()
  useEffect(() => {
    FacultyService.getFaculty().then(x => setFaculty(x.data)).catch(e => {

    })
  }, [])
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
      <title>Index  &amp; -Marketing Manager </title>
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
      <div className="container">
        <header>
          <div className="header-right">
            <button className="year-button">Current Year</button>
            <button className="download-button">Download All Faculty</button>
          </div>
        </header>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <div className="scroll-box student-names">
          </div>
          <div className="scroll-box faculty">
          </div>
          <select name="sort-by">
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Total submited</th>
              <th>Closure Date</th>
              <th>Final Closure Date</th>
              <th>Create Date</th>
              <th>Marketing Coordinator</th>
              <th>View Detail</th>
            </tr>
          </thead>
          <tbody>
            {faculty && faculty.map(x => {
              return <>
                <tr>
                  <td>{x.name}</td>
                  <td>{x.contribution.length}</td>
                  <td>{<Time string={x.closureDate} />}</td>
                  <td>{<Time string={x.finalclosureDate} />}</td>
                  <td>{<Time string={x.createdAt} />}</td>
                  <td>{x.user.email}</td>
                  <td><Link href={`/Manager/Details/${x.id}`} className='bg-primary p-4'>View Detail</Link></td>
                </tr>
              </>
            })}
          </tbody>
        </table>

      </div>
    </>
  )
}

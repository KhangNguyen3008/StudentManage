import React from 'react'

export default function IndexMM() {
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
        <select name="sort-by">
          <option value="Currentyear">Current Year</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>          
        <button className="download-button">Download All Articles</button>
        </div>
      </header>
      
      <div className="search-bar">
        <select name="sort-by" style={{ marginRight: '20px' }}>
          <option value="Studentname">Student Name</option>
          <option value="Studentage">Student Age</option>
        </select>

        <input type="text" placeholder="Search..." />

        <select name="sort-by" style={{ marginRight: '20px' }}>
          <option value="falculty">Falculty</option>
        </select>

        <select name="sort-by">
          <option value="default">Sort by Default</option>
          <option value="date">Sort by Date</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>
      
      <div className="article-table">
       <table>
        <thead>
          <tr>
            <th> ID</th>
            <th>Title</th>
            <th>Upload Date</th>
            <th>Selected Date</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Cycling Adventure: Exploring the Urban Landscape
            <br />
            <a href="#">Download</a>
            </td>
            <td>12/25/2023</td>
            <td>12/27/2023</td>
            <td>Student001</td>
            </tr>
            </tbody>
            <tbody>
          <tr>
            <td>02</td>
            <td>Into the Clouds: Conquering the Heights of the Himalayas
            <br />
            <a href="#">Download</a>
            </td>
            <td>12/25/2023</td>
            <td>12/27/2023</td>
            <td>Student002</td>
            </tr>
            </tbody><tbody>
          <tr>
            <td>03</td>
            <td>Sweet Sensations: Creating Culinary Magic with Caramelized Treats
            <br />
            <a href="#">Download</a>
            </td>
            <td>12/25/2023</td>
            <td>12/27/2023</td>
            <td>Student003</td>
            </tr>
            </tbody>
      </table>
    </div>
    </div>
        </>
    )
}

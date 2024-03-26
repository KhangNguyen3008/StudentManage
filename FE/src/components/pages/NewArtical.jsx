import React from 'react'

export default function NewArtical() {
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
            <title>Home  &amp; University GreenWich HCM</title>
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
            <h1 className="mt-5" style={{ fontSize: '2rem' }}>Add New Artical for this year magazine</h1>
            <h1 className="mt-5" style={{ fontSize: '1.5rem' }}>Closure Date:</h1>
            <h1 className="mt-5" style={{ fontSize: '1.5rem' }}>Faculty:</h1>
        <form className="mt-3">
          <div className="mb-3">
            <label htmlFor="articleTitle" className="form-label">Artical Title:</label>
            <input type="text" className="form-control" id="articleTitle" />
          </div>
          <div className="mb-3">
            <label htmlFor="articleContent" className="form-label">Artical Content:</label>
            <textarea className="form-control" id="articleContent" rows="5"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="articlePhoto" className="form-label">File Submission:</label>
            <input type="file" className="form-control" id="articlePhoto" />
          </div>
          <div className="mb-3 accept-text">Accepted file formats:</div>
          <div className="mb-3 document-files">Document files: <span>.doc .docx .epub .gdoc .odt .oth .ott .pdf .rtf</span></div>
          <div className="mb-3 image-files">Image files: <span>.jpg .jpeg .png</span></div>
          <button type="submit" className="btn btn-info mr-2">Apply Artical</button>
          <button type="button" className="btn btn-danger">Cancel</button>
        </form>
    </div>
        </>
    )
}

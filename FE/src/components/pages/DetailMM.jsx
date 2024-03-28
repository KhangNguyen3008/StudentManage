import React from 'react'

export default function DetailMM() {
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
            <h5>The Enigmatic Charm of Feline Companions: Exploring the World of Cats </h5>
            </header>
            <div className="description-download">
                <p>In this article, we will take you into the magical world of cats. 
                From interesting things about their history and origins to the most adorable and fascinating stories about life with cats, 
                join us to explore the richness and uniqueness of the cat world.</p>
                <section className="details">
                    <div className="left-column">
                        <ul>
                            <li>Upload Date: </li>
                            <li>Closure Date:  </li>
                            <li>Student Name:  </li>
                        </ul>
                    </div>
                    <div className="right-column">
                        <ul>
                            <li>Selected Date: </li>
                            <li>Final Closure Date: </li>
                            <li>Status: </li>
                        </ul>
                    </div>
                </section>
                <section className="download">
                    <h5>Download File</h5>
                   <p>You can download the file related to this article here: <a href="#">Download File</a></p>
                </section>
                </div>
                <section className="related-contributions">
                    <h5>Related Contributions</h5>
                    <ul>

                    </ul>
                </section>
            </main>
        </div>
        </>
    )
}

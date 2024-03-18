import about from '@/app/page/about/page'
import React from 'react'

export default function Header() {
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
<title>Magz — Responsive HTML5 &amp; CSS3 Magazine Template</title>
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
<header className="primary">
<div className="firstbar">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-12">
        <div className="brand">
          <a href="/about">
            <img src="/home/images/logo.png" alt="Magz Logo" />
          </a>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <form className="search" autoComplete="off">
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                name="q"
                className="form-control"
                placeholder="Type something here"
              />
              <div className="input-group-btn">
                <button className="btn btn-primary">
                  <i className="ion-search" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-3 col-sm-12 text-right">
        <ul className="nav-icons">
          <li>
            <a href="register.html">
              <i className="ion-person-add" />
              <div>Register</div>
            </a>
          </li>
          <li>
            <a href="login.html">
              <i className="ion-person" />
              <div>Login</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
{/* Start nav */}
<nav className="menu">
  <div className="container">
    <div className="brand">
      <a href="#">
        <img src="/home/images/logo.png" alt="Magz Logo" />
      </a>
    </div>
    <div className="mobile-toggle">
      <a href="#" data-toggle="menu" data-target="#menu-list">
        <i className="ion-navicon-round" />
      </a>
    </div>
    <div className="mobile-toggle">
      <a href="#" data-toggle="sidebar" data-target="#sidebar">
        <i className="ion-ios-arrow-left" />
      </a>
    </div>
    <div id="menu-list">
      <ul className="nav-list">
        <li className="for-tablet nav-title">
          <a>Menu</a>
        </li>
        <li className="for-tablet">
          <a href="login.html">Login</a>
        </li>
        <li className="for-tablet">
          <a href="register.html">Register</a>
        </li>
        <li>
          <a href="../../home">Home</a>
        </li>
        <li className="dropdown magz-dropdown">
          <a href="category.html">
            Pages <i className="ion-ios-arrow-right" />
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="dropdown magz-dropdown">
              <a href="#">
                Authentication <i className="ion-ios-arrow-right" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="../../login/page.jsx">Login</a>
                </li>
                <li>
                  <a href="register.html">Register</a>
                </li>

              </ul>
            </li>
            <li>
              <a href="category.html">Category</a>
            </li>
            <li>
              <a href="single.html">Single</a>
            </li>
          </ul>
        </li>
        <li className="dropdown magz-dropdown">
          <a href="#">
            Dropdown <i className="ion-ios-arrow-right" />
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="category.html">Internet</a>
            </li>
            <li className="dropdown magz-dropdown">
              <a href="category.html">
                Troubleshoot <i className="ion-ios-arrow-right" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="category.html">Software</a>
                </li>
                <li className="dropdown magz-dropdown">
                  <a href="category.html">
                    Hardware <i className="ion-ios-arrow-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="category.html">Main Board</a>
                    </li>
                    <li>
                      <a href="category.html">RAM</a>
                    </li>
                    <li>
                      <a href="category.html">Power Supply</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="category.html">Brainware</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="category.html">Office</a>
            </li>
            <li className="dropdown magz-dropdown">
              <a href="#">
                Programming <i className="ion-ios-arrow-right" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="category.html">Web</a>
                </li>
                <li className="dropdown magz-dropdown">
                  <a href="category.html">
                    Mobile <i className="ion-ios-arrow-right" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown magz-dropdown">
                      <a href="category.html">
                        Hybrid <i className="ion-ios-arrow-right" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">Ionic Framework 1</a>
                        </li>
                        <li>
                          <a href="#">Ionic Framework 2</a>
                        </li>
                        <li>
                          <a href="#">Ionic Framework 3</a>
                        </li>
                        <li>
                          <a href="#">Framework 7</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="category.html">Native</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="category.html">Desktop</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="dropdown magz-dropdown magz-dropdown-megamenu">
          <a href="#">
            Mega Menu <i className="ion-ios-arrow-right" />{" "}
            <div className="badge">Hot</div>
          </a>
          <div className="dropdown-menu megamenu">
            <div className="megamenu-inner">
              <div className="row">
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-md-12">
                      <h2 className="megamenu-title">Trending</h2>
                    </div>
                  </div>
                  <ul className="vertical-menu">
                    <li>
                      <a href="#">
                        <i className="ion-ios-circle-outline" /> Mega menu
                        is a new feature
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-circle-outline" /> This is an
                        example
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-circle-outline" /> For a
                        submenu item
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-circle-outline" /> You can add
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-circle-outline" /> Your own
                        items
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-12">
                      <h2 className="megamenu-title">Featured Posts</h2>
                    </div>
                  </div>
                  <div className="row">
                    <article className="article col-md-4 mini">
                      <div className="inner">
                        <figure>
                          <a href="single.html">
                            <img
                              src="/home/images/news/img10.jpg"
                              alt="Sample Article"
                            />
                          </a>
                        </figure>
                        <div className="padding">
                          <div className="detail">
                            <div className="time">December 10, 2016</div>
                            <div className="category">
                              <a href="category.html">Healthy</a>
                            </div>
                          </div>
                          <h2>
                            <a href="single.html">
                              Duis aute irure dolor in reprehenderit in
                              voluptate
                            </a>
                          </h2>
                        </div>
                      </div>
                    </article>
                    <article className="article col-md-4 mini">
                      <div className="inner">
                        <figure>
                          <a href="single.html">
                            <img
                              src="/home/images/news/img11.jpg"
                              alt="Sample Article"
                            />
                          </a>
                        </figure>
                        <div className="padding">
                          <div className="detail">
                            <div className="time">December 13, 2016</div>
                            <div className="category">
                              <a href="category.html">Lifestyle</a>
                            </div>
                          </div>
                          <h2>
                            <a href="single.html">
                              Duis aute irure dolor in reprehenderit in
                              voluptate
                            </a>
                          </h2>
                        </div>
                      </div>
                    </article>
                    <article className="article col-md-4 mini">
                      <div className="inner">
                        <figure>
                          <a href="single.html">
                            <img
                              src="/home/images/news/img14.jpg"
                              alt="Sample Article"
                            />
                          </a>
                        </figure>
                        <div className="padding">
                          <div className="detail">
                            <div className="time">December 14, 2016</div>
                            <div className="category">
                              <a href="category.html">Travel</a>
                            </div>
                          </div>
                          <h2>
                            <a href="single.html">
                              Duis aute irure dolor in reprehenderit in
                              voluptate
                            </a>
                          </h2>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="dropdown magz-dropdown">
          <a href="">
            Contact <i className="ion-ios-arrow-right" />
          </a>
          <div className="dropdown-menu megamenu">
            <div className="megamenu-inner">
              <div className="row">
                <div className="col-md-3">
                  <ul className="vertical-menu">
                    <li>
                      <a href="../../page/contact">Contact</a>
                    </li>
                    <li>
                      <a href="../../page/about">About</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="dropdown magz-dropdown">
          <a href="#">
            More <i className="ion-ios-arrow-right" />
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">
                <i className="icon ion-person" /> My Account
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon ion-heart" /> Favorite
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* End nav */}
</header>
</>
  )
}

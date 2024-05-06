import './header.css'
import React from 'react'


export default function 
() {
  return (
    <>
<section className="shop_section layout_padding">
  <div className="container">
    <div className="heading_container heading_center">
      <h2>FPT GreenWich VN</h2>
    </div>
      <div className="row">
        <div className="col-12">
          <div className="search_container1">
            <input type="text" className="search_input" placeholder="Search..." />
          </div>
          <div className="sort_container d-flex justify-content-end">
            <select className="sort_select" >
              <option >Sort by Date</option>
              <option >Sort by Faculty</option>
              <option >Sort by Title</option>
              <option >Sort by Author</option>
            </select>
          </div>
        </div>
      </div>
    <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="box">
          <a href>
            <div className="img-box">
              <img src="/home/images/p1.png" alt />
            </div>
            <div className="detail-box">
              <h6>
                title
              </h6>
              <h6>
                Author: 
                <span>
                  Author Name
                </span>
              </h6>
            </div>
            <div className="new">
              <span>
                New
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="box">
          <a href>
            <div className="img-box">
              <img src="/home/images/p2.png" alt />
            </div>
            <div className="detail-box">
              <h6>
                Watch
              </h6>
              <h6>
                Price
                <span>
                  $300
                </span>
              </h6>
            </div>
            <div className="new">
              <span>
                New
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="box">
          <a href>
            <div className="img-box">
              <img src="/home/images/p3.png" alt />
            </div>
            <div className="detail-box">
              <h6>
                Title
              </h6>
              <h6>
                Author:
                <span>
                  Author Name
                </span>
              </h6>
            </div>
            <div className="new">
              <span>
                New
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="box">
          <a href>
            <div className="img-box">
              <img src="/home/images/p4.png" alt />
            </div>
            <div className="detail-box">
              <h6>
                Flower Bouquet
              </h6>
              <h6>
                Price
                <span>
                  $45
                </span>
              </h6>
            </div>
            <div className="new">
              <span>
                New
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="box">
          <a href>
            <div className="img-box">
              <img src="/home/images/p5.png" alt />
            </div>
            <div className="detail-box">
              <h6>
                Teddy Bear
              </h6>
              <h6>
                Price
                <span>
                  $95
                </span>
              </h6>
            </div>
            <div className="new">
              <span>
                New
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="box">
          <a href>
            <div className="img-box">
              <img src="/home/images/p6.png" alt />
            </div>
            <div className="detail-box">
              <h6>
                Flower Bouquet
              </h6>
              <h6>
                Price
                <span>
                  $70
                </span>
              </h6>
            </div>
            <div className="new">
              <span>
                New
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="box">
          <a href>
            <div className="img-box">
              <img src="/home/images/p7.png" alt />
            </div>
            <div className="detail-box">
              <h6>
                Watch
              </h6>
              <h6>
                Price
                <span>
                  $400
                </span>
              </h6>
            </div>
            <div className="new">
              <span>
                New
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="box">
          <a href>
            <div className="img-box">
              <img src="/home/images/p8.png" alt />
            </div>
            <div className="detail-box">
              <h6>
                Ring
              </h6>
              <h6>
                Price
                <span>
                  $450
                </span>
              </h6>
            </div>
            <div className="new">
              <span>
                New
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="btn-box">
      <a href>
        View All Products
      </a>
    </div>
  </div>
</section>

    </>
  )
}
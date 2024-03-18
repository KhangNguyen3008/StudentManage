
import Image from "next/image";

export default function Home() {
  return (
  <>
  <section className="home">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-12 col-xs-12">
          <div className="headline">
            <div className="nav" id="headline-nav">
              <a
                className="left carousel-control"
                role="button"
                data-slide="prev"
              >
                <span className="ion-ios-arrow-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control"
                role="button"
                data-slide="next"
              >
                <span className="ion-ios-arrow-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="owl-carousel owl-theme" id="headline">
              <div className="item">
                <a href="#">
                  <div className="badge">Tip!</div> Vestibulum ante ipsum primis
                  in faucibus orci
                </a>
              </div>
              <div className="item">
                <a href="#">Ut rutrum sodales mauris ut suscipit</a>
              </div>
            </div>
          </div>
          <div className="owl-carousel owl-theme slide" id="featured">
            <div className="item">
              <article className="featured">
                <div className="overlay" />
                <figure>
                  <img src="/home/images/news/img04.jpg" alt="Sample Article" />
                </figure>
                <div className="details">
                  <div className="category">
                    <a href="category.html">Computer</a>
                  </div>
                  <h1>
                    <a href="single.html">
                      Phasellus iaculis quam sed est elementum vel ornare ligula
                      venenatis
                    </a>
                  </h1>
                  <div className="time">December 26, 2016</div>
                </div>
              </article>
            </div>
            <div className="item">
              <article className="featured">
                <div className="overlay" />
                <figure>
                  <img src="/home/images/news/img14.jpg" alt="Sample Article" />
                </figure>
                <div className="details">
                  <div className="category">
                    <a href="category.html">Travel</a>
                  </div>
                  <h1>
                    <a href="single.html">
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra
                    </a>
                  </h1>
                  <div className="time">December 10, 2016</div>
                </div>
              </article>
            </div>
            <div className="item">
              <article className="featured">
                <div className="overlay" />
                <figure>
                  <img src="/home/images/news/img13.jpg" alt="Sample Article" />
                </figure>
                <div className="details">
                  <div className="category">
                    <a href="category.html">International</a>
                  </div>
                  <h1>
                    <a href="single.html">
                      Maecenas accumsan tortor ut velit pharetra mollis
                    </a>
                  </h1>
                  <div className="time">October 12, 2016</div>
                </div>
              </article>
            </div>
            <div className="item">
              <article className="featured">
                <div className="overlay" />
                <figure>
                  <img src="/home/images/news/img05.jpg" alt="Sample Article" />
                </figure>
                <div className="details">
                  <div className="category">
                    <a href="category.html">Lifestyle</a>
                  </div>
                  <h1>
                    <a href="single.html">
                      Mauris elementum libero at pharetra auctor Fusce
                      ullamcorper elit
                    </a>
                  </h1>
                  <div className="time">November 27, 2016</div>
                </div>
              </article>
            </div>
          </div>
          <div className="line">
            <div>Latest News</div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="row">
                <article className="article col-md-12">
                  <div className="inner">
                    <figure>
                      <a href="single.html">
                        <img src="/home/images/news/img10.jpg" alt="Sample Article" />
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
                          Duis aute irure dolor in reprehenderit in voluptate
                        </a>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <footer>
                        <a href="#" className="love">
                          <i className="ion-android-favorite-outline" />{" "}
                          <div>1263</div>
                        </a>
                        <a className="btn btn-primary more" href="single.html">
                          <div>More</div>
                          <div>
                            <i className="ion-ios-arrow-thin-right" />
                          </div>
                        </a>
                      </footer>
                    </div>
                  </div>
                </article>
                <article className="article col-md-12">
                  <div className="inner">
                    <figure>
                      <a href="single.html">
                        <img src="/home/images/news/img06.jpg" alt="Sample Article" />
                      </a>
                    </figure>
                    <div className="padding">
                      <div className="detail">
                        <div className="time">December 22, 2016</div>
                        <div className="category">
                          <a href="category.html">Healthy</a>
                        </div>
                      </div>
                      <h2>
                        <a href="single.html">
                          Exercitation ullamco laboris nisi ut aliquip
                        </a>
                      </h2>
                      <p>
                        Maecenas accumsan tortor ut velit pharetra mollis. Proin
                        eu nisl et arcu iaculis placerat sollicitudin ut est. In
                        fringilla dui dui.
                      </p>
                      <footer>
                        <a href="#" className="love">
                          <i className="ion-android-favorite-outline" />{" "}
                          <div>327</div>
                        </a>
                        <a className="btn btn-primary more" href="single.html">
                          <div>More</div>
                          <div>
                            <i className="ion-ios-arrow-thin-right" />
                          </div>
                        </a>
                      </footer>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="row">
                <article className="article col-md-12">
                  <div className="inner">
                    <figure>
                      <a href="single.html">
                        <img src="/home/images/news/img05.jpg" alt="Sample Article" />
                      </a>
                    </figure>
                    <div className="padding">
                      <div className="detail">
                        <div className="time">December 09, 2016</div>
                        <div className="category">
                          <a href="category.html">Lifestyle</a>
                        </div>
                      </div>
                      <h2>
                        <a href="single.html">
                          Mauris elementum libero at pharetra auctor
                        </a>
                      </h2>
                      <p>
                        Vivamus in efficitur mi. Nullam semper justo ut elit
                        lacinia lacinia. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra.
                      </p>
                      <footer>
                        <a href="#" className="love">
                          <i className="ion-android-favorite-outline" />{" "}
                          <div>1083</div>
                        </a>
                        <a className="btn btn-primary more" href="single.html">
                          <div>More</div>
                          <div>
                            <i className="ion-ios-arrow-thin-right" />
                          </div>
                        </a>
                      </footer>
                    </div>
                  </div>
                </article>
                <article className="article col-md-12">
                  <div className="inner">
                    <figure>
                      <a href="single.html">
                        <img src="/home/images/news/img07.jpg" alt="Sample Article" />
                      </a>
                    </figure>
                    <div className="padding">
                      <div className="detail">
                        <div className="time">December 21, 2016</div>
                        <div className="category">
                          <a href="category.html">Sport</a>
                        </div>
                      </div>
                      <h2>
                        <a href="single.html">
                          Sed do eiusmod tempor incididunt ut labore
                        </a>
                      </h2>
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Mauris elementum
                        libero at pharetra auctor.
                      </p>
                      <footer>
                        <a href="#" className="love">
                          <i className="ion-android-favorite-outline" />{" "}
                          <div>980</div>
                        </a>
                        <a className="btn btn-primary more" href="single.html">
                          <div>More</div>
                          <div>
                            <i className="ion-ios-arrow-thin-right" />
                          </div>
                        </a>
                      </footer>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="banner">
            <a href="#">
              <img src="/home/images/ads.png" alt="Sample Article" />
            </a>
          </div>
          <div className="line transparent little" />

          <div className="line top">
            <div>Just Another News</div>
          </div>
          <div className="row">
            <article className="col-md-12 article-list">
              <div className="inner">
                <figure>
                  <a href="single.html">
                    <img src="/home/images/news/img11.jpg" alt="Sample Article" />
                  </a>
                </figure>
                <div className="details">
                  <div className="detail">
                    <div className="category">
                      <a href="#">Film</a>
                    </div>
                    <div className="time">December 19, 2016</div>
                  </div>
                  <h1>
                    <a href="single.html">
                      Donec consequat arcu at ultrices sodales quam erat aliquet
                      diam
                    </a>
                  </h1>
                  <p>
                    Donec consequat, arcu at ultrices sodales, quam erat aliquet
                    diam, sit amet interdum libero nunc accumsan nisi.
                  </p>
                  <footer>
                    <a href="#" className="love">
                      <i className="ion-android-favorite-outline" />{" "}
                      <div>273</div>
                    </a>
                    <a className="btn btn-primary more" href="single.html">
                      <div>More</div>
                      <div>
                        <i className="ion-ios-arrow-thin-right" />
                      </div>
                    </a>
                  </footer>
                </div>
              </div>
            </article>

            <article className="col-md-12 article-list">
              <div className="inner">
                <figure>
                  <a href="single.html">
                    <img src="/home/images/news/img03.jpg" alt="Sample Article" />
                  </a>
                </figure>
                <div className="details">
                  <div className="detail">
                    <div className="category">
                      <a href="#">Travel</a>
                    </div>
                    <div className="time">December 16, 2016</div>
                  </div>
                  <h1>
                    <a href="single.html">
                      Nulla facilisis odio quis gravida vestibulum Proin
                      venenatis pellentesque arcu
                    </a>
                  </h1>
                  <p>
                    Nulla facilisis odio quis gravida vestibulum. Proin
                    venenatis pellentesque arcu, ut mattis nulla placerat et.
                  </p>
                  <footer>
                    <a href="#" className="love active">
                      <i className="ion-android-favorite" /> <div>302</div>
                    </a>
                    <a className="btn btn-primary more" href="single.html">
                      <div>More</div>
                      <div>
                        <i className="ion-ios-arrow-thin-right" />
                      </div>
                    </a>
                  </footer>
                </div>
              </div>
            </article>
            <article className="col-md-12 article-list">
              <div className="inner">
                <figure>
                  <a href="single.html">
                    <img src="/home/images/news/img09.jpg" alt="Sample Article" />
                  </a>
                </figure>
                <div className="details">
                  <div className="detail">
                    <div className="category">
                      <a href="#">Healthy</a>
                    </div>
                    <div className="time">December 16, 2016</div>
                  </div>
                  <h1>
                    <a href="single.html">
                      Maecenas blandit ultricies lorem id tempor enim pulvinar
                      at
                    </a>
                  </h1>
                  <p>
                    Maecenas blandit ultricies lorem, id tempor enim pulvinar
                    at. Curabitur sit amet tortor eu ipsum lacinia malesuada.
                  </p>
                  <footer>
                    <a href="#" className="love">
                      <i className="ion-android-favorite-outline" />{" "}
                      <div>783</div>
                    </a>
                    <a className="btn btn-primary more" href="single.html">
                      <div>More</div>
                      <div>
                        <i className="ion-ios-arrow-thin-right" />
                      </div>
                    </a>
                  </footer>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="col-xs-6 col-md-4 sidebar" id="sidebar">
          <div className="sidebar-title for-tablet">Sidebar</div>
          <aside>
            <div className="aside-body">
              <div className="featured-author">
                <div className="featured-author-inner">
                  <div
                    className="featured-author-cover"
                    style={{ backgroundImage: 'url("/home/images/news/img15.jpg")' }}
                  >
                    <div className="badges">
                      <div className="badge-item">
                        <i className="ion-star" /> Featured
                      </div>
                    </div>
                    <div className="featured-author-center">
                      <figure className="featured-author-picture">
                        <img src="/home/images/img01.jpg" alt="Sample Article" />
                      </figure>
                      <div className="featured-author-info">
                        <h2 className="name">John Doe</h2>
                        <div className="desc">@JohnDoe</div>
                      </div>
                    </div>
                  </div>
                  <div className="featured-author-body">
                    <div className="featured-author-count">
                      <div className="item">
                        <a href="#">
                          <div className="name">Posts</div>
                          <div className="value">208</div>
                        </a>
                      </div>
                      <div className="item">
                        <a href="#">
                          <div className="name">Stars</div>
                          <div className="value">3,729</div>
                        </a>
                      </div>
                      <div className="item">
                        <a href="#">
                          <div className="icon">
                            <div>More</div>
                            <i className="ion-chevron-right" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="featured-author-quote">
                      "Eur costrict mobsa undivani krusvuw blos andugus pu
                      aklosah"
                    </div>
                    <div className="block">
                      <h2 className="block-title">Photos</h2>
                      <div className="block-body">
                        <ul className="item-list-round" data-magnific="gallery">
                          <li>
                            <a
                              href="/home/images/news/img06.jpg"
                              style={{
                                backgroundImage: 'url("/home/images/news/img06.jpg")'
                              }}
                            />
                          </li>
                          <li>
                            <a
                              href="/home/images/news/img07.jpg"
                              style={{
                                backgroundImage: 'url("/home/images/news/img07.jpg")'
                              }}
                            />
                          </li>
                          <li>
                            <a
                              href="/home/images/news/img08.jpg"
                              style={{
                                backgroundImage: 'url("/home/images/news/img08.jpg")'
                              }}
                            />
                          </li>
                          <li>
                            <a
                              href="/home/images/news/img09.jpg"
                              style={{
                                backgroundImage: 'url("/home/images/news/img09.jpg")'
                              }}
                            />
                          </li>
                          <li>
                            <a
                              href="/home/images/news/img10.jpg"
                              style={{
                                backgroundImage: 'url("/home/images/news/img10.jpg")'
                              }}
                            />
                          </li>
                          <li>
                            <a
                              href="/home/images/news/img11.jpg"
                              style={{
                                backgroundImage: 'url("/home/images/news/img11.jpg")'
                              }}
                            />
                          </li>
                          <li>
                            <a
                              href="/home/images/news/img12.jpg"
                              style={{
                                backgroundImage: 'url("/home/images/news/img12.jpg")'
                              }}
                            >
                              <div className="more">+2</div>
                            </a>
                          </li>
                          <li className="hidden">
                            <a
                              href="/home/images/news/img13.jpg"
                              style={{
                                backgroundImage: 'url("/home/images/news/img13.jpg")'
                              }}
                            />
                          </li>
                          <li className="hidden">
                            <a
                              href="/home/images/news/img14.jpg"
                              style={{
                                backgroundImage: 'url("/home/images/news/img14.jpg")'
                              }}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="featured-author-footer">
                      <a href="#">See All Authors</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <aside>
            <div className="aside-body">
              <form className="newsletter">
                <div className="icon">
                  <i className="ion-ios-email-outline" />
                  <h1>Newsletter</h1>
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control email"
                    placeholder="Your mail"
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-primary">
                      <i className="ion-paper-airplane" />
                    </button>
                  </div>
                </div>
                <p>
                  By subscribing you will receive new articles in your email.
                </p>
              </form>
            </div>
          </aside>
          <aside>
            <ul className="nav nav-tabs nav-justified" role="tablist">
              <li className="active">
                <a
                  href="#recomended"
                  aria-controls="recomended"
                  role="tab"
                  data-toggle="tab"
                >
                  <i className="ion-android-star-outline" /> Recomended
                </a>
              </li>
              <li>
                <a
                  href="#comments"
                  aria-controls="comments"
                  role="tab"
                  data-toggle="tab"
                >
                  <i className="ion-ios-chatboxes-outline" /> Comments
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="recomended">
                <article className="article-fw">
                  <div className="inner">
                    <figure>
                      <a href="single.html">
                        <img src="/home/images/news/img16.jpg" alt="Sample Article" />
                      </a>
                    </figure>
                    <div className="details">
                      <div className="detail">
                        <div className="time">December 31, 2016</div>
                        <div className="category">
                          <a href="category.html">Sport</a>
                        </div>
                      </div>
                      <h1>
                        <a href="single.html">
                          Donec congue turpis vitae mauris
                        </a>
                      </h1>
                      <p>
                        Donec congue turpis vitae mauris condimentum luctus. Ut
                        dictum neque at egestas convallis.
                      </p>
                    </div>
                  </div>
                </article>
                <div className="line" />
                <article className="article-mini">
                  <div className="inner">
                    <figure>
                      <a href="single.html">
                        <img src="/home/images/news/img05.jpg" alt="Sample Article" />
                      </a>
                    </figure>
                    <div className="padding">
                      <h1>
                        <a href="single.html">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit
                        </a>
                      </h1>
                      <div className="detail">
                        <div className="category">
                          <a href="category.html">Lifestyle</a>
                        </div>
                        <div className="time">December 22, 2016</div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="article-mini">
                  <div className="inner">
                    <figure>
                      <a href="single.html">
                        <img src="/home/images/news/img02.jpg" alt="Sample Article" />
                      </a>
                    </figure>
                    <div className="padding">
                      <h1>
                        <a href="single.html">
                          Fusce ullamcorper elit at felis cursus suscipit
                        </a>
                      </h1>
                      <div className="detail">
                        <div className="category">
                          <a href="category.html">Travel</a>
                        </div>
                        <div className="time">December 21, 2016</div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="article-mini">
                  <div className="inner">
                    <figure>
                      <a href="single.html">
                        <img src="/home/images/news/img10.jpg" alt="Sample Article" />
                      </a>
                    </figure>
                    <div className="padding">
                      <h1>
                        <a href="single.html">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit
                        </a>
                      </h1>
                      <div className="detail">
                        <div className="category">
                          <a href="category.html">Healthy</a>
                        </div>
                        <div className="time">December 20, 2016</div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="tab-pane comments" id="comments">
                <div className="comment-list sm">
                  <div className="item">
                    <div className="user">
                      <figure>
                        <img src="/home/images/img01.jpg" alt="User Picture" />
                      </figure>
                      <div className="details">
                        <h5 className="name">Mark Otto</h5>
                        <div className="time">24 Hours</div>
                        <div className="description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="user">
                      <figure>
                        <img src="/home/images/img01.jpg" alt="User Picture" />
                      </figure>
                      <div className="details">
                        <h5 className="name">Mark Otto</h5>
                        <div className="time">24 Hours</div>
                        <div className="description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="user">
                      <figure>
                        <img src="/home/images/img01.jpg" alt="User Picture" />
                      </figure>
                      <div className="details">
                        <h5 className="name">Mark Otto</h5>
                        <div className="time">24 Hours</div>
                        <div className="description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>

</>
  );
}

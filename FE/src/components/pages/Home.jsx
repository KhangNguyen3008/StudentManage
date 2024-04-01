import React from 'react'

export default function Home() {
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

            <section className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="line">
                                <div>Latest News</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="row">
                                        <article className="article col-md-12">
                                            <div className="inner">
                                                <figure>
                                                    <a href="./Student/DetailArticle">
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
                                                        <a href="./Student/DetailArticle">
                                                        The Enigmatic Charm of Feline Companions: Exploring the World of Cats
                                                        </a>
                                                    </h2>
                                                    <p>
                                                    In this article, we will take you into the magical world of cats. 
                                                    From interesting things about their history and origins to the most adorable and fascinating stories about life with cats, 
                                                    join us to explore the richness and uniqueness of the cat world.
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
                                                        Savor the Flavor: A Delectable Dish with Mouthwatering Fish
                                                        </a>
                                                    </h2>
                                                    <p>
                                                    The star of this dish is undoubtedly the perfectly cooked fish, with its tender flesh and delicate flavor. 
                                                    Served alongside a medley of vibrant vegetables and aromatic herbs, 
                                                    each bite bursts with a symphony of flavors that dance on your palate.                                                    </p>
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
                                                        Thrilling Adventures of a Skateboarding Boy: Riding the Streets with Gusto
                                                        </a>
                                                    </h2>
                                                    <p>
                                                    In this article, we will get lost in the enchanting world of a skateboarding boy. 
                                                    From his daring techniques and impressive performances to his exciting adventures and 
                                                    valuable lessons he learned on the streets. Please join us to enjoy the fascinating.
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
                                                        Embracing the Spirit of Fitness: The Joy of Running</a>
                                                    </h2>
                                                    <p>
                                                    Every morning, as the first rays of sunlight pierce through the dawn, the streets come alive with the rhythmic patter of feet pounding against the pavement. 
                                                    It's a symphony of motion, a celebration of life, walks of life lace up their running shoes and hit the road.
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
                                                Cycling Adventure: Exploring the Urban Landscape
                                                </a>
                                            </h1>
                                            <p>
                                            In the bustling cityscape where skyscrapers reach for the sky and streets hum with activity, a solitary bicycle leans against a graffiti-covered wall, 
                                            a silent witness to the ebb and flow of urban life. Against this backdrop of concrete and steel, the simple elegance of the bike stands in stark contrast, a symbol of freedom and escape.
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
                                                Into the Clouds: Conquering the Heights of the Himalayas
                                                </a>
                                            </h1>
                                            <p>
                                            High above the world, where the air is thin and the sky stretches endlessly, lies the majestic Himalayan mountain range. Towering peaks pierce the clouds, their snow-capped summits glistening in the sunlight. For adventurers brave enough to venture into this rugged terrain, the journey is as daunting as it is breathtaking
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
                                                Sweet Sensations: Creating Culinary Magic with Caramelized Treats
                                                </a>
                                            </h1>
                                            <p>
                                            In the heart of a bustling kitchen, the aroma of melting sugar fills the air as a skilled chef deftly manipulates a hot skillet. With a flick of the wrist, caramelized sugar transforms into a golden syrup, coating nuts and fruits in a sticky, 
                                            sweet glaze. Each sizzle and crackle is a symphony of flavor, promising delectable delights to come.
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
                            {/* need fix sidebar */}
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
                                                        <h2 className="name">User01</h2>
                                                        <div className="desc">User01</div>
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
                                                        Exploring the Wilderness: Mountain Biking Adventures</a>
                                                    </h1>
                                                    <p>
                                                    whether you're a seasoned rider or a novice enthusiast, grab your bike, and embark on an unforgettable journey into the wilderness. With each turn of the pedal, 
                                                    you'll discover new landscapes, conquer new challenges, and forge memories that will last a lifetime.
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
                                                        Thrilling Adventures of a Skateboarding Boy: Riding the Streets with Gusto
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
                                                        Embracing the Spirit of Fitness: The Joy of Running</a>
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
                                                        The Enigmatic Charm of Feline Companions: Exploring the World of Cats
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
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

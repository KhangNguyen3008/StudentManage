import React from 'react'
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function 
() {
  return (
    <>
    <Header/>
<section className="single">
<div className="container">
<div className="row">
    <div className="col-md-4 sidebar" id="sidebar">
    <aside>
        <div className="aside-body">
        <figure className="ads">
            <img src="images/ad.png" />
            <figcaption>Advertisement</figcaption>
        </figure>
        </div>
    </aside>
    <aside>
        <h1 className="aside-title">Recent Post</h1>
        <div className="aside-body">
        <article className="article-fw">
            <div className="inner">
            <figure>
                <a href="single.html">												
                <img src="images/news/img16.jpg" />
                </a>
            </figure>
            <div className="details">
                <h1><a href="single.html">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit</a></h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="detail">
                <div className="time">December 26, 2016</div>
                <div className="category"><a href="category.html">Lifestyle</a></div>
                </div>
            </div>
            </div>
        </article>
        <div className="line" />
        <article className="article-mini">
            <div className="inner">
            <figure>
                <a href="single.html">
                <img src="images/news/img05.jpg" />
                </a>
            </figure>
            <div className="padding">
                <h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
                <div className="detail">
                <div className="category"><a href="category.html">Lifestyle</a></div>
                <div className="time">December 22, 2016</div>
                </div>
            </div>
            </div>
        </article>
        <article className="article-mini">
            <div className="inner">
            <figure>
                <a href="single.html">
                <img src="images/news/img02.jpg" />
                </a>
            </figure>
            <div className="padding">
                <h1><a href="single.html">Fusce ullamcorper elit at felis cursus suscipit</a></h1>
                <div className="detail">
                <div className="category"><a href="category.html">Travel</a></div>
                <div className="time">December 21, 2016</div>
                </div>
            </div>
            </div>
        </article>
        <article className="article-mini">
            <div className="inner">
            <figure>
                <a href="single.html">
                <img src="images/news/img13.jpg" />
                </a>
            </figure>
            <div className="padding">
                <h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
                <div className="detail">
                <div className="category"><a href="category.html">International</a></div>
                <div className="time">December 20, 2016</div>
                </div>
            </div>
            </div>
        </article>
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
            <input type="email" className="form-control email" placeholder="Your mail" />
            <div className="input-group-btn">
                <button className="btn btn-primary"><i className="ion-paper-airplane" /></button>
            </div>
            </div>
            <p>By subscribing you will receive new articles in your email.</p>
        </form>
        </div>
    </aside>
    </div>
    <div className="col-md-8">
    <ol className="breadcrumb">
        <li><a href="#">Home</a></li>
        <li className="active">Film</li>
    </ol>
    <article className="article main-article">
        <header>
        <h1>Pellentesque elementum tellus id mauris faucibus</h1>
        <ul className="details">
            <li>Posted on 31 December, 2016</li>
            <li><a>Film</a></li>
            <li>By <a href="#">John Doe</a></li>
        </ul>
        </header>
        <div className="main">
        <p>Pellentesque elementum tellus id mauris faucibus, id sagittis mauris rhoncus. Donec ac iaculis dui, id convallis mauris. Fusce faucibus purus eu risus pulvinar, vel rutrum velit hendrerit. Sed urna nunc, efficitur faucibus sollicitudin non.</p>
        <div className="featured">
            <figure>
            <img src="images/news/img01.jpg" />
            <figcaption>Image by pexels.com</figcaption>
            </figure>
        </div>
        <p>Nulla facilisi. Aenean pharetra fringilla nunc a finibus. Nulla vitae pretium nunc. Pellentesque sagittis sollicitudin turpis id aliquam. Cras lobortis diam in nunc posuere, et malesuada sem gravida. Curabitur ornare massa id orci faucibus elementum. Phasellus pharetra, velit <a href="#">in egestas rutrum,</a> metus dolor maximus massa, feugiat molestie eros mauris sit amet massa. Maecenas blandit diam lacus, in luctus nulla efficitur nec. Sed sit amet quam sit amet odio scelerisque vestibulum vel sit amet ante. Cras fringilla efficitur lacinia. Cras posuere, arcu id consequat ultrices, urna urna cursus massa, at sollicitudin elit lacus quis dui. In laoreet nulla a turpis blandit sollicitudin. Donec in risus eu lorem volutpat hendrerit quis non lorem. Nulla in metus ipsum.
        </p><p>Etiam sit amet augue non velit aliquet consectetur. Proin gravida, odio in facilisis pharetra, neque enim aliquam eros, vitae gravida orci elit vel magna. Integer viverra a purus id gravida. Donec laoreet mi ac auctor ultricies. Pellentesque ullamcorper est et erat ullamcorper gravida. In hac habitasse platea dictumst. Pellentesque justo mauris, mollis at tortor ut, commodo venenatis elit. Curabitur suscipit pellentesque nunc, id tempus mi facilisis sed. Curabitur molestie eu odio vitae condimentum. Donec placerat tristique neque a blandit. Nullam commodo massa ut eros elementum, in suscipit libero aliquam.</p>
        <h4>Sed id sodales sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi.</h4>
        <p>Nulla facilisi. Duis auctor fringilla sagittis. Fusce ornare, dui id consequat volutpat, nibh metus viverra nibh, vitae bibendum diam velit in libero. Sed dignissim quam sit amet nibh porttitor, non pellentesque metus tincidunt. Maecenas non velit sapien. </p>
        <p>Maecenas vel dolor sit amet ligula interdum tempor id eu ipsum. Suspendisse pharetra risus ut metus elementum pulvinar. Mauris eget varius tellus. Cras et lorem vel nunc gravida porttitor.</p>
        <blockquote>
            Free Responsive HTML5 &amp; CSS3 Magazine Template
        </blockquote>
        <p>Ut est elit, vehicula tempus volutpat ut, sodales eget odio. Nunc placerat, orci ac iaculis feugiat, sem tellus efficitur tortor, mollis iaculis lacus ante nec risus. Sed consequat vehicula pretium.</p>
        </div>
        <footer>
        <div className="col">
            <ul className="tags">
            <li><a href="#">Free Themes</a></li>
            <li><a href="#">Bootstrap 3</a></li>
            <li><a href="#">Responsive Web Design</a></li>
            <li><a href="#">HTML5</a></li>
            <li><a href="#">CSS3</a></li>
            <li><a href="#">Web Design</a></li>
            </ul>
        </div>
        <div className="col">
            <a href="#" className="love"><i className="ion-android-favorite-outline" /> <div>1220</div></a>
        </div>
        </footer>
    </article>
    <div className="sharing">
        <div className="title"><i className="ion-android-share-alt" /> Sharing is caring</div>
        <ul className="social">
        <li>
            <a href="#" className="facebook">
            <i className="ion-social-facebook" /> Facebook
            </a>
        </li>
        <li>
            <a href="#" className="twitter">
            <i className="ion-social-twitter" /> Twitter
            </a>
        </li>
        <li>
            <a href="#" className="googleplus">
            <i className="ion-social-googleplus" /> Google+
            </a>
        </li>
        <li>
            <a href="#" className="linkedin">
            <i className="ion-social-linkedin" /> Linkedin
            </a>
        </li>
        <li>
            <a href="#" className="skype">
            <i className="ion-ios-email-outline" /> Email
            </a>
        </li>
        <li className="count">
            20
            <div>Shares</div>
        </li>
        </ul>
    </div>
    <div className="line">
        <div>Author</div>
    </div>
    <div className="author">
        <figure>
        <img src="images/img01.jpg" />
        </figure>
        <div className="details">
        <div className="job">Web Developer</div>
        <h3 className="name">John Doe</h3>
        <p>Nulla sagittis rhoncus nisi, vel gravida ante. Nunc lobortis condimentum elit, quis porta ipsum rhoncus vitae. Curabitur magna leo, porta vel fringilla gravida, consectetur in libero. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
        <ul className="social trp sm">
            <li>
            <a href="#" className="facebook">
                <svg><rect /></svg>
                <i className="ion-social-facebook" />
            </a>
            </li>
            <li>
            <a href="#" className="twitter">
                <svg><rect /></svg>
                <i className="ion-social-twitter" />
            </a>
            </li>
            <li>
            <a href="#" className="youtube">
                <svg><rect /></svg>
                <i className="ion-social-youtube" />
            </a>
            </li>
            <li>
            <a href="#" className="googleplus">
                <svg><rect /></svg>
                <i className="ion-social-googleplus" />
            </a>
            </li>
        </ul>
        </div>
    </div>
    <div className="line"><div>You May Also Like</div></div>
    <div className="row">
        <article className="article related col-md-6 col-sm-6 col-xs-12">
        <div className="inner">
            <figure>
            <a href="#">
                <img src="images/news/img03.jpg" />
            </a>
            </figure>
            <div className="padding">
            <h2><a href="#">Duis aute irure dolor in reprehenderit in voluptate</a></h2>
            <div className="detail">
                <div className="category"><a href="category.html">Lifestyle</a></div>
                <div className="time">December 26, 2016</div>
            </div>
            </div>
        </div>
        </article>
        <article className="article related col-md-6 col-sm-6 col-xs-12">
        <div className="inner">
            <figure>
            <a href="#">
                <img src="images/news/img08.jpg" />
            </a>
            </figure>
            <div className="padding">
            <h2><a href="#">Duis aute irure dolor in reprehenderit in voluptate</a></h2>
            <div className="detail">
                <div className="category"><a href="category.html">Lifestyle</a></div>
                <div className="time">December 26, 2016</div>
            </div>
            </div>
        </div>
        </article>
    </div>
    <div className="line thin" />
    <div className="comments">
        <h2 className="title">3 Responses <a href="#">Write a Response</a></h2>
        <div className="comment-list">
        <div className="item">
            <div className="user">                                
            <figure>
                <img src="images/img01.jpg" />
            </figure>
            <div className="details">
                <h5 className="name">Mark Otto</h5>
                <div className="time">24 Hours</div>
                <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore <a href="#">magna</a> aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </div>
                <footer>
                <a href="#">Reply</a>
                </footer>
            </div>
            </div>
        </div>
        <div className="item">
            <div className="user">                                
            <figure>
                <img src="images/img01.jpg" />
            </figure>
            <div className="details">
                <h5 className="name">Mark Otto</h5>
                <div className="time">24 Hours</div>
                <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore <a href="#">magna</a> aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </div>
                <footer>
                <a href="#">Reply</a>
                </footer>
            </div>
            </div>
            <div className="reply-list">
            <div className="item">
                <div className="user">                                
                <figure>
                    <img src="images/img01.jpg" />
                </figure>
                <div className="details">
                    <h5 className="name">Mark Otto</h5>
                    <div className="time">24 Hours</div>
                    <div className="description">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <footer>
                    <a href="#">Reply</a>
                    </footer>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="item">
            <div className="user">                                
            <figure>
                <img src="images/img01.jpg" />
            </figure>
            <div className="details">
                <h5 className="name">Mark Otto</h5>
                <div className="time">24 Hours</div>
                <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore <a href="#">magna</a> aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </div>
                <footer>
                <a href="#">Reply</a>
                </footer>
            </div>
            </div>
        </div>
        </div>
        <form className="row">
        <div className="col-md-12">
            <h3 className="title">Leave Your Response</h3>
        </div>
        <div className="form-group col-md-4">
            <label htmlFor="name">Name <span className="required" /></label>
            <input type="text" id="name" name className="form-control" />
        </div>
        <div className="form-group col-md-4">
            <label htmlFor="email">Email <span className="required" /></label>
            <input type="email" id="email" name className="form-control" />
        </div>
        <div className="form-group col-md-4">
            <label htmlFor="website">Website</label>
            <input type="url" id="website" name className="form-control" />
        </div>
        <div className="form-group col-md-12">
            <label htmlFor="message">Response <span className="required" /></label>
            <textarea className="form-control" name="message" placeholder="Write your response ..." defaultValue={""} />
        </div>
        <div className="form-group col-md-12">
            <button className="btn btn-primary">Send Response</button>
        </div>
        </form>
    </div>
    </div>
</div>
</div>
    <Footer/>
</section>

    </>
  )
}

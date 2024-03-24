import about from '@/app/page/about/page'
import React from 'react'

export default function Header() {
  return (
    <>
      
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

        {/* End nav */}
      </header>
    </>
  )
}

import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <>
<footer className="footer">
  <div className="container">
    <div className="row">
      <div className="footer-col">
        <h4>Contact Information</h4>
        <ul>
          <li>Support Email: abc@gmail.com</li>
          <li>Adress: 40 Cong Hoa st, Ho Chi Minh City, Viet</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Additional Resource</h4>
        <ul>
          <li><a href="#">About the magazing</a></li>
          <li><a href="#">Term and conditions</a></li>

        </ul>
      </div>
      <div className="footer-col">
        <h4>Social Media</h4>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f" /></a>
          <a href="#"><i className="fab fa-twitter" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
      <div className='footer-col'>
        <div className="copyright-notice">
          <h4>Legal and Compliance</h4>
          <p>
            &copy; {new Date().getFullYear()} Greenwich university. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}

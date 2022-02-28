import React from "react";
import '../Css/Footer.css';
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer-container">
      <section className="footer-subscription"></section>
      <p className="footer-subscription-heading" style={{ color: 'white' }}>
        Join To Us!
      </p>
      <p className="footer-subscription-text" style={{ color: 'white' }}>
        You Can Unsubscribe At Any Time
      </p>
      <div className="input-areas">
        <form >
          <input type="email" name="email" placeholder="Mail" className="footer-input" />
          <button className="btn--outline">subscribe</button>
        </form>
        <div className="footer-link">
          <div style={{ display: 'flex' }}>
            <div className="footer-link-items">
              <Link to='/AboutUs'><h2>About Us</h2></Link>
              <Link to='/Sign-up'>Sign-up</Link>
              <Link to='/home'>Home</Link>
              <Link to='/Product'>Product</Link>
            </div>
            <div className="footer-link-items">
              <h2>Videos</h2>
              <Link to='/'>Submit Video</Link>
              <Link to='/'>Ambassadors</Link>
              <Link to='/'>Agency</Link>
              <Link to='/'>Influencer</Link>
            </div>

          </div>
          <div style={{ display: 'flex' }}>
            <div className='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/'>Contact</Link>
              <Link to='/'>Support</Link>
              <Link to='/'>Destinations</Link>
              <Link to='/'>Sponsorships</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
            </div>

          </div>
        </div>
      </div>
      <div >
        {/*social Logo */}
        <Link className="social-logo-link facebook" to="/" target='_blank' aria-label="Facebook">
          <i style={{ paddingRight: 5 }} className="fab fa-facebook-f"></i>
        </Link>
        <Link className="social-logo-link instagram" to="/" target='_blank' aria-label="Instagram">
          <i style={{ paddingRight: 5 }} className="fab fa-instagram"></i>
        </Link>
        <Link className="social-logo-link linkedin" to={{ pathname: "linkedin.com/in/adi-hershko-351674227/" }} target='_blank' aria-label="Linkedin">
          <i style={{ paddingRight: 5 }} className="fab fa-linkedin"></i>
        </Link>

      </div>
    </footer>
  )
}
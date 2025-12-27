import React from 'react'
import '../styles/Address.css'

const Address = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Bean Buzz</h3>
          <p>Brewing happiness one cup at a time.</p>
        </div>

        <div className="footer-section">
          <h3>Visit Us</h3>
          <p>123 Coffee Lane<br />Roast City, RC 56789</p>
        </div>

        <div className="footer-section">
          <h3>Hours</h3>
          <p>Mon - Fri: 7am - 7pm</p>
          <p>Sat - Sun: 8am - 6pm</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>hello@beanbuzz.com</p>
          <p>(123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bean Buzz Coffee Shop. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Address
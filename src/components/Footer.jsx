import React from "react"
import { Link } from "react-router-dom"
import "./styles/Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerLogo">
          YourBrand
        </div>

        <nav className="footerNav">
          <Link to="/">Home</Link>
          <Link to="/Boards">Boards</Link>
          <Link to="/Prints">Prints</Link>
          <Link to="/Store">Store</Link>
        </nav>

        <div className="footerSocials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>

      <div className="footerBottom">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  )
}

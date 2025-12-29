import { Link } from "react-router-dom"

import "./styles/Header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Header</div>

      <nav className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/Boards">Boards</Link>
        <Link to="/Prints">Prints</Link>
        <Link to="/Store">Store</Link>
      </nav>

      <div className="authButtons">
        <button>Login</button>
        <button>Register</button>
      </div>
    </header>
  )
}

import { Link } from "react-router-dom"

import "./styles/Header.css"

export default function Header() {
    return (
        <div>
            <div>Header</div>
            <Link to="/">Home</Link>
            <Link to="/Boards">Boards</Link>
            <Link to="/Prints">Prints</Link>
            <Link to="/Store">Store</Link>
        </div>
    )
}

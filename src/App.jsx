import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import Boards from "./pages/Boards";

export default function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="boards" element={<Boards />} />
      </Routes>
      </Router>
  )
}

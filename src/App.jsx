import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import Boards from "./pages/Boards";
import Prints from "./pages/Prints";
import Store from "./pages/Store";

import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>

      <Header />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="Boards" element={<Boards />} />
        <Route path="Prints" element={<Prints />} />
        <Route path="Store" element={<Store />} />

      </Routes>

      <Footer />
    </Router>
  )
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import Upload from "./Pages/Upload";
import "./index.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Features from "./Components/Features";
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

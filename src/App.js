import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contcat Us</Link></li>
        </ul>
      </nav>
        <Routes>
  
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

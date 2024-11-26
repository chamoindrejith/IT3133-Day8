import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contcat Us</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
        <Routes>
  
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

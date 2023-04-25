import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/aboutme" element={<AboutMe />} />
          <Route path = "/portfolio" element={<Portfolio />} />
          <Route path = "/contact" element={<Contact />} />
          <Route path = "/resume" element={<Resume/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay'
import avatar from '../src/assets/avatar.jpg';




function App() {
  return (
    <div className="App">
      <Router>
        <Header image={avatar}/>
        <Navbar/>
        <Routes>
          <Route path = "/" element={<AboutMe />} />
          <Route path = "/portfolio" element={<Portfolio />} />
          <Route path = "/project/:id" element={<ProjectDisplay />} />
          <Route path = "/contact" element={<Contact />} />
          <Route path = "/resume" element={<Resume/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

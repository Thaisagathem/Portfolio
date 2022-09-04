import React from 'react';
import './App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import {Layout} from './components';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Layout >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;

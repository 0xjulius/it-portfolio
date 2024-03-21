import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Studies from './components/Studies.jsx';
import Projects from './components/Projects.jsx';
import Thesis from './components/Thesis.jsx';
import Skills from './components/Skills.jsx';
import Awards from './components/Awards.jsx';

function App() {
  return (
    <Router> {/* Wrap your component tree with BrowserRouter */}
      <div>
        <Header />
        <Home />
        <Navbar />
        <main>
          <Studies />
          <Thesis />
          <Projects/>
          <Skills />
          <Awards />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

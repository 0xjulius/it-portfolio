import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <Router> {/* Wrap your component tree with BrowserRouter */}
      <div>
        <Header />
        <Navbar />
        <main>
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Studies from "./components/Studies.jsx";
import Thesis from "./components/Thesis.jsx";
import Skills from "./components/Skills.jsx";
import Awards from "./components/Awards.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import Technologies from "./components/Technologies.jsx";
import Gallery from "./components/Gallery.jsx";
import ProjectsNew from "./components/ProjectsNew.jsx";
import GitHubHeatmap from "./components/GitHubHeatmap.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import VantaBackground from "./components/VantaBackground";

// Komponentti, joka nollaa vierityksen AINA kun URL-reitti (pathname) muuttuu
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Group your main portfolio sections into a single page component
function PortfolioHome() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay allows DOM nodes to render properly before executing the scroll
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <>
      <Header />
      <Home />
      <GitHubHeatmap />
      <Technologies />
      <Navbar />
      <main>
        <Studies />
        <Thesis />
        <ProjectsNew />
        <Skills />
        <Gallery />
        <Awards />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      <VantaBackground />

      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>

      <ScrollToTopButton />
    </Router>
  );
}

export default App;

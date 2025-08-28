import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Art from "./pages/Art";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import blogsData from "./data/blogs";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

function App() {
  const location = useLocation(); // 👈 track route changes

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <ScrollToTop>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                }
              />
              <Route
                path="/about"
                element={
                  <PageTransition>
                    <About />
                  </PageTransition>
                }
              />
              <Route
                path="/projects"
                element={
                  <PageTransition>
                    <Projects />
                  </PageTransition>
                }
              />
              <Route
                path="/art"
                element={
                  <PageTransition>
                    <Art />
                  </PageTransition>
                }
              />
              <Route
                path="/blog"
                element={
                  <PageTransition>
                    <BlogList blogs={blogsData} />
                  </PageTransition>
                }
              />
              <Route
                path="/blog/:id"
                element={
                  <PageTransition>
                    <BlogDetail blogs={blogsData} />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
        </ScrollToTop>
      </div>
      <Footer />
    </div>
  );
}

export default App;

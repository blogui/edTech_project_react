import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar.js";
import Main from "./Component/Main.js";
import About from "./Component/About.js";
import Testimonial from "./Component/Testimonial.js";
import Courses from "./Component/CourseSection.js";
import CourseDetail from "./Component/CourseDetail";
import coursesData from "./assets/courses.json";
import Footer from "./Component/Footer.js";
import SuccessStory from "./Component/SuccessStory.js";
import ContactUs from "./Component/ContactUs";

function App() {
  return (
    <Router>
        <AppContent/>
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); // useLocation hook inside a child component
  // Determine if the current path is "/contact" or "/about"
  const isMinimalLayout = location.pathname.includes("/course") || location.pathname === "/contact" || location.pathname === "/about";

  return (
    <>
      <Navbar />
      {!isMinimalLayout && <Main />}
      <Routes>
        <Route path='/' element={<Courses />} />
        <Route path='/courses' element={<Courses />} />
        <Route path="/course/:courseId" element={<CourseDetail data={coursesData} />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {!isMinimalLayout && <SuccessStory />}
      {!isMinimalLayout && <Testimonial />}
      <Footer />
    </>
  );
}

export default App;

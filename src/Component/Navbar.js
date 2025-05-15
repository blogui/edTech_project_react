import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Courses", path: "/courses" },
  { label: "About Us", path: "/about" },
];

const CustomNavbar = () => {
  return (
    <Navbar
      expand="md"
      bg="light"
      fixed="top"
      className="py-2 shadow-sm"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={Logo}
            alt="Logo"
            className="rounded"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <span className="fw-semibold fs-5">Logic Junior</span>
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Collapse id="main-navbar-nav">
          {/* Center Nav Links */}
          <Nav className="mx-auto text-center gap-md-3 mt-3 mt-md-0">
            {navItems.map((item, index) => (
              <Nav.Link
                key={index}
                as={Link}
                to={item.path}
                className="text-dark nav-link-modern"
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>

          {/* Enquiry Button */}
          <div className="text-center text-md-end mt-3 mt-md-0">
            <Button as={Link} to="/contact" className="enquiry-button">
              Enquiry Now
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>

      {/* Styles */}
      <style>{`
        .nav-link-modern {
          font-weight: 500;
          position: relative;
        }

        .nav-link-modern::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #007bff;
          transition: width 0.3s ease;
        }

        .nav-link-modern:hover::after {
          width: 100%;
        }

        .enquiry-button {
          background-color: #007bff;
          color: white;
          font-weight: 500;
          border: none;
          padding: 8px 18px;
          border-radius: 6px;
          position: relative;
          overflow: hidden;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .enquiry-button::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) scale(0);
          width: 300%;
          height: 300%;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transition: transform 0.4s ease;
          z-index: 0;
        }

        .enquiry-button:hover::before {
          transform: translate(-50%, -50%) scale(1);
        }

        .enquiry-button:hover {
          background-color: #0056b3;
          transform: translateY(-2px);
        }

        .enquiry-button:focus {
          box-shadow: none;
        }
      `}</style>
    </Navbar>
  );
};

export default CustomNavbar;

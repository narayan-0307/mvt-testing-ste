import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "./Header.css";
import logo from "../assets/humancare.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Treatments", path: "/treatments" },
    { name: "Doctors", path: "/doctors" },
    { name: "Hospitals", path: "/hospitals" },
    { name: "Process", path: "/process" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="header-wrapper">
      {/* <div className="top-bar">
        <div className="top-bar-container">
          <div className="contact-info">
            <a href="tel:+918655835979" className="contact-item">
              <Phone size={14} />
              <span className="social-label">Emergency 24/7: </span>
              <span className="contact-info-number">+91 86558 35979</span>
            </a>
            <a
              href="https://wa.me/+918655835979"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <div className="social-icons">
            <span className="social-label">Follow Us:</span>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={15} />
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-inner">
            {/* LOGO */}
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" />
            </Link>

            {/* DESKTOP NAV */}
            <div className="nav-desktop">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* EMERGENCY BUTTON */}
            {/* <a href="tel:+918655835979" className="emergency-btn">
              <Phone size={16} />
              Emergency
            </a> */}

            <div className="social-icons">
              <div className="social-links">
                <a
                  href="https://www.facebook.com/humancareworldwide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={15} />
                </a>
                <a
                  href="https://x.com/wwhumancare"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/company/human-care-world-wide/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="https://wa.me/+918655835979"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="whatsapp"
                >
                  <FaWhatsapp size={15} />
                </a>
                <a
                  href="https://www.instagram.com/humancareworldwideofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={15} />
                </a>
                <a
                  href="https://www.youtube.com/@HumancareWorldWide"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube size={15} />
                </a>
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* MOBILE NAV */}
          {isOpen && (
            <div className="nav-mobile">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}

              <a href="tel:+918655835979" className="emergency-btn mobile">
                <Phone size={16} />
                Emergency Call
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

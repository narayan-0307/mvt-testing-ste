import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import "./Footer.css";

export default function Footer({ onNavigate }) {
  const treatments = [
    "Heart Surgery",
    "Bone & Joint",
    "Neurology",
    "Cancer Treatment",
    "IVF & Fertility",
    "Dental Treatment",
    "Cosmetic Surgery",
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <div className="footer-icon">
                <Phone size={20} />
              </div>
              <div>
                <h3>HumanCare MVT</h3>
                <p>Medical Value Travel</p>
              </div>
            </div>

            <p className="footer-desc">
              Your trusted partner for world-class medical treatment in India at
              affordable costs. We provide complete support for international
              patients.
            </p>

            <div className="footer-social">
              <a href="#"><Facebook size={16} /></a>
              <a href="#"><Twitter size={16} /></a>
              <a href="#"><Instagram size={16} /></a>
              <a href="#"><Linkedin size={16} /></a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => onNavigate("home")}>Home</button></li>
              <li><button onClick={() => onNavigate("about")}>About Us</button></li>
              <li><button onClick={() => onNavigate("treatments")}>Treatments</button></li>
              <li><button onClick={() => onNavigate("process")}>Patient Process</button></li>
              <li><button onClick={() => onNavigate("partners")}>Hospitals & Doctors</button></li>
              <li><button onClick={() => onNavigate("contact")}>Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4>Our Treatments</h4>
            <ul>
              {treatments.map((item) => (
                <li key={item}>
                  <button onClick={() => onNavigate("treatments")}>{item}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>

            <div className="footer-contact">
              <div>
                <Phone size={18} />
                <div>
                  <strong>24/7 Emergency</strong>
                  <a href="tel:+919876543210">+91 987 654 3210</a>
                </div>
              </div>

              <div>
                <Mail size={18} />
                <div>
                  <strong>Email Us</strong>
                  <a href="mailto:info@humancaremvt.com">
                    info@humancaremvt.com
                  </a>
                </div>
              </div>

              <div>
                <MapPin size={18} />
                <div>
                  <strong>Office Address</strong>
                  <p>
                    123 Medical Tower,<br />
                    Connaught Place,<br />
                    New Delhi - 110001
                  </p>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 HumanCare MVT. All rights reserved.</p>
          <div>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
            <span>|</span>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

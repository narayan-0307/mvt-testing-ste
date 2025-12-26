import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import "./Contactsection.css";

export default function ContactSection() {
  return (
    <section className="contact-wrapper">
      <div className="contact-grid">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-desc">
            For non-emergency inquiries, quotes, or questions, please use the
            form. For immediate medical emergencies, call our 24/7 dispatch line.
          </p>

          {/* Emergency Card */}
          <div className="contact-card emergency">
            <Phone className="contact-icon red" />
            <div>
              <h4>Emergency 24/7</h4>
              <p>+919820073734</p>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="contact-card whatsapp">
            <MessageCircle className="contact-icon green" />
            <div>
              <h4>Whatsapp Us</h4>
              <p>+919820073734</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="contact-card email">
            <Mail className="contact-icon blue" />
            <div>
              <h4>General Inquiries</h4>
              <p>ops.humancareworldwide.com</p>
            </div>
          </div>

          {/* Address Card */}
          <div className="contact-card address">
            <MapPin className="contact-icon gray" />
            <div>
              <h4>Headquarters</h4>
              <p>
                544, Dheeraj Haritage, S. V. Road, Junction, Milan Subway,
                Santacruz (West), Mumbai, Maharashtra 400054
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-right">
          <form className="contact-form">

            <input type="text" placeholder="Your Name" required />

            <input type="text" placeholder="Your Phone Number" required />

            <input type="email" placeholder="Your Email" required />

            <select required>
              <option value="">Select Service</option>
              <option>Homecare</option>
              <option>Ambulance</option>
              <option>Doctor Consultation</option>
              <option>Medical Travel</option>
            </select>

            <textarea rows="5" placeholder="Your Message"></textarea>

            <button type="submit" className="submit-btn">
              Send Request
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

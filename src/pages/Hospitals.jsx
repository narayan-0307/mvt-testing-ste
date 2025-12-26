import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ExternalLink, Phone } from "lucide-react";
import "./Hospitals.css";

const hospitals = [
  {
    name: "Apollo Hospitals",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/17/Apollo_Hospitals_Logo.png",
    description:
      "Asia's largest and most trusted healthcare group with 72+ hospitals and 5000+ specialists.",
    accreditations: ["JCI", "NABH", "NABL"],
    locations: ["Delhi", "Chennai", "Mumbai", "Bangalore", "Hyderabad"],
    specialties: ["Cardiac Care", "Oncology", "Neurology", "Orthopedics"],
    website: "https://www.apollohospitals.com",
  },
  {
    name: "Fortis Healthcare",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Fortis_Healthcare_Limited_logo.png",
    description:
      "One of India's leading integrated healthcare providers with 27+ hospitals.",
    accreditations: ["JCI", "NABH"],
    locations: ["Delhi", "Mumbai", "Bangalore", "Kolkata"],
    specialties: ["Heart Surgery", "Kidney Transplant", "Bone Marrow"],
    website: "https://www.fortishealthcare.com",
  },
   {
    name: "Fortis Healthcare",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Fortis_Healthcare_Limited_logo.png",
    description:
      "One of India's leading integrated healthcare providers with 27+ hospitals.",
    accreditations: ["JCI", "NABH"],
    locations: ["Delhi", "Mumbai", "Bangalore", "Kolkata"],
    specialties: ["Heart Surgery", "Kidney Transplant", "Bone Marrow"],
    website: "https://www.fortishealthcare.com",
  },
   {
    name: "Fortis Healthcare",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Fortis_Healthcare_Limited_logo.png",
    description:
      "One of India's leading integrated healthcare providers with 27+ hospitals.",
    accreditations: ["JCI", "NABH"],
    locations: ["Delhi", "Mumbai", "Bangalore", "Kolkata"],
    specialties: ["Heart Surgery", "Kidney Transplant", "Bone Marrow"],
    website: "https://www.fortishealthcare.com",
  },
];

export default function HospitalsPage() {
  return (
    <>
      {/* HERO */}
       <section className="hospitals-hero">
        <span className="hero-badge">Medical Specialties</span>
        <h1>World-Class Treatments at Affordable Prices</h1>
        <p>
          Access India's finest specialists and cutting-edge medical technology
          at a fraction of Western costs
        </p>
      </section>

      {/* HOSPITAL LIST */}
       
    <section className="partner-hospitals">
      {/* HEADER */}
      <div className="partner-header">
        <span className="badge">Hospital Network</span>
        <h2>Our Partner Hospitals</h2>
        <p>
          We collaborate with India's most prestigious healthcare institutions
        </p>
      </div>

      {/* LIST */}
      <div className="partner-list">
        {hospitals.map((h, i) => (
          <div className="partner-card" key={i}>
            {/* LEFT */}
            <div className="partner-left">
              <div className="logo-placeholder" />
              <h3>{h.name}</h3>

              <div className="accreditations">
                {h.accreditations.map((a, idx) => (
                  <span key={idx}>{a}</span>
                ))}
              </div>
            </div>

            {/* MIDDLE */}
            <div className="partner-middle">
              <p className="partner-desc">{h.description}</p>

              <div className="specialties">
                {h.specialties.map((s, idx) => (
                  <span key={idx}>{s}</span>
                ))}
              </div>

              <div className="locations">
                <MapPin />
                {h.locations.join(" • ")}
              </div>
            </div>

            {/* RIGHT */}
            <div className="partner-right">
              <a
                href={h.website}
                target="_blank"
                rel="noreferrer"
                className="outline-btn"
              >
                <ExternalLink />
                Visit Website
              </a>

              <a href="/contact" className="primary-btn">
                Get Treatment Quote
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* CTA */}
      <section className="page-cta">
        <h2>Need Help Choosing the Right Hospital?</h2>
        <p>Our experts will guide you to the best option</p>
        <Link to="/contact" className="outline-btn white">
          <Phone /> Get Personalized Recommendation
        </Link>
      </section>
    </>
  );
}

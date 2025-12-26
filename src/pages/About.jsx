import React from "react";
import {
  Users,
  Award,
  Globe,
  Heart,
  Target,
  CheckCircle2,
  Phone,
} from "lucide-react";
import aboutImg from "../assets/about.jpg";
import "./About.css";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <span className="hero-badge">About HumanCare MVT</span>
        <h2>Your Trusted Partner in Medical Value Travel</h2>
        <p>
          Bridging the gap between international patients and India’s finest
          healthcare facilities
        </p>
      </section>

      {/* STATS */}
          <section className="stats-section">
      <div className="stats-container">
        <div className="stats-card">
          <div className="stats-icon">
            <Users />
          </div>
          <div className="stats-text">
            <h3>1000+</h3>
            <p>Happy Patients</p>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-icon">
            <Award />
          </div>
          <div className="stats-text">
            <h3>300+</h3>
            <p>Doctors Network</p>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-icon">
            <Globe />
          </div>
          <div className="stats-text">
            <h3>15+</h3>
            <p>Countries Served</p>
          </div>
        </div>
      </div>
    </section>

      {/* WHO WE ARE */}
      <section className="about-who">
        <div className="who-content">
          <span className="section-badge">Who We Are</span>
          <h2>Compassionate Care, Global Reach</h2>

          <p>
            HumanCare MVT was founded with a simple yet powerful mission: to make
            world-class healthcare accessible to everyone, regardless of where
            they live.
          </p>

          <p>
            We understand that seeking treatment abroad can be overwhelming.
            That’s why our dedicated coordinators guide you through every step
            — from consultation to complete recovery.
          </p>

          <p>
            By partnering with India’s most trusted hospitals and specialists,
            we ensure international patients receive affordable, globally
            accredited medical care.
          </p>
        </div>

        <div className="who-image">
          <img src={aboutImg} alt="Medical Team" />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="about-mission">
        <div className="mission-box blue">
          <h3>Our Mission</h3>
          <p>
            To provide international patients seamless access to world-class
            medical care in India, combining affordability with excellence and
            end-to-end support.
          </p>
        </div>

        <div className="mission-box red">
          <h3>Our Vision</h3>
          <p>
            To become the most trusted name in medical tourism by setting new
            standards of transparency, ethics, and patient-first healthcare.
          </p>
        </div>
      </section>

      {/* VALUES */}
     <section className="values-section">
      <span className="values-badge">Our Values</span>

      <h2 className="values-title">What Drives Us</h2>

      <p className="values-subtitle">
        The principles that guide every interaction and decision we make
      </p>

      <div className="values-grid">
        <div className="value-card">
          <div className="value-icon">
            <Heart />
          </div>
          <h3>Patient-First Approach</h3>
          <p>
            Every decision we make is centered around the well-being and comfort
            of our patients.
          </p>
        </div>

        <div className="value-card">
          <div className="value-icon">
            <Target />
          </div>
          <h3>Excellence in Care</h3>
          <p>
            We partner only with accredited hospitals that meet international
            standards of healthcare.
          </p>
        </div>

        <div className="value-card">
          <div className="value-icon">
            <Globe />
          </div>
          <h3>Global Accessibility</h3>
          <p>
            Making world-class healthcare accessible to patients from developing
            nations.
          </p>
        </div>
      </div>
    </section>

      {/* SUPPORT */}
      <section className="about-support">
        <span className="section-badge dark">Our Commitment</span>
        <h2>How We Support You</h2>
        <p className="section-subtitle light">
          Comprehensive care from consultation to recovery
        </p>

        <div className="support-grid">
          {[
            "Free initial consultation & medical opinion",
            "Hospital & doctor selection based on your needs",
            "Visa assistance & documentation support",
            "Flight & hotel booking arrangements",
            "Airport pickup & local transportation",
            "Dedicated patient coordinator throughout",
            "Translation & interpretation services",
            "Post-treatment follow-up care",
            "24/7 emergency support",
          ].map((item, index) => (
            <div key={index} className="support-item">
              <CheckCircle2 />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Ready to Begin Your Healthcare Journey?</h2>
        <p>
          Let our expert team guide you to the best medical treatment in India
        </p>

        <a href="/contact" className="cta-button">
          <Phone />
          Contact Us Today
        </a>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import {
  HeartPulse,
  Plane,
  Building2,
  Clock,
  Shield,
  Star,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  Bone,
  Brain,
  Baby,
  Smile,
  Sparkles,
  CheckCircle, 
  Award, UserCheck, BadgeDollarSign, Eye, HeartHandshake, Languages, ShieldCheck, User
  
} from "lucide-react";
import "./Home.css";
import heroImage from "../assets/react.svg";
import Testimonials from "../component/Testimonials";
import Contactsection from "../component/Contactsection";


const hospitals = [
  {
    name: "Medanta – The Medicity",
    specialty: "Multi-Specialty Hospital",
    location: "Gurugram, India",
    image: "https://images.unsplash.com/photo-1576765607924-3f7b8410a787",
  },
  {
    name: "Fortis Escorts Heart Institute",
    specialty: "Cardiac Care",
    location: "New Delhi, India",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
  },
  {
    name: "Apollo Hospitals",
    specialty: "Global Healthcare Network",
    location: "Multiple Locations",
    image: "https://safartibbi.com/wp-content/uploads/2022/11/apolo-1.jpg",
  },
  {
    name: "Narayana Health",
    specialty: "Advanced Medical Care",
    location: "India & Overseas",
    image: "https://images.unsplash.com/photo-1600959907703-125ba1374a12",
  },
];

const data = [
  {
    icon: <Award size={40} />,
    title: "NABH & JCI Accredited Hospitals",
    desc: "We partner exclusively with hospitals that meet international accreditation standards, ensuring you receive care that matches the best facilities worldwide."
  },
  {
    icon: <UserCheck size={40} />,
    title: "Dedicated Patient Coordinator",
    desc: "Your personal coordinator handles everything from appointments to translations, ensuring seamless communication throughout your treatment journey."
  },
  {
    icon: <BadgeDollarSign size={40} />,
    title: "Transparent Pricing",
    desc: "Get detailed cost breakdowns upfront with no surprises. We believe in complete transparency in all financial matters."
  },
  {
    icon: <Eye size={40} />,
    title: "No Hidden Charges",
    desc: "The price we quote is the price you pay. Our commitment to ethical practices means no hidden fees or unexpected costs."
  },
  {
    icon: <HeartHandshake size={40} />,
    title: "End-to-End Support",
    desc: "From your first inquiry to post-treatment follow-up, we’re with you every step. Our support doesn’t end when your treatment does."
  },
  {
    icon: <Languages size={40} />,
    title: "Multi-Language Assistance",
    desc: "Our team speaks multiple languages including Arabic, French, Bengali, and Swahili to ensure clear communication with patients from diverse backgrounds."
  },
  {
    icon: <Clock size={40} />,
    title: "24/7 Emergency Support",
    desc: "Medical emergencies don’t follow a schedule. Our emergency helpline is available round the clock for your peace of mind."
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Complete Privacy & Security",
    desc: "Your medical information is treated with utmost confidentiality. We follow strict data protection protocols to safeguard your privacy."
  }
];

const doctors = [
  {
    name: "Dr. Devi Prasad Shetty",
    specialty: "Cardiac Surgery",
    hospital: "Narayana Health",
    experience: "40+ years",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  },
  {
    name: "Dr. Randeep Guleria",
    specialty: "Pulmonology",
    hospital: "AIIMS Delhi",
    experience: "35+ years",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
  },
  {
    name: "Dr. Ashok Seth",
    specialty: "Interventional Cardiology",
    hospital: "Fortis Escorts",
    experience: "38+ years",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
  },
  {
    name: "Dr. Naresh Trehan",
    specialty: "Cardiovascular Surgery",
    hospital: "Medanta",
    experience: "45+ years",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  },
];
const trustHighlights = [
  {
    icon: Clock,
    title: "24/7 Medical Assistance",
    description: "Round-the-clock support for all your healthcare needs",
  },
  {
    icon: Building2,
    title: "Top Indian Hospitals",
    description: "Access to JCI & NABH accredited healthcare facilities",
  },
  {
    icon: Plane,
    title: "Visa & Travel Support",
    description: "Complete assistance from visa to accommodation",
  },
  {
    icon: Shield,
    title: "Affordable Packages",
    description: "World-class treatment at 60-80% lower cost",
  },
];

const treatments = [
  { icon: HeartPulse, name: "Heart Surgery", price: "₹2,50,000" },
  { icon: Bone, name: "Bone & Joint", price: "₹1,50,000" },
  { icon: Brain, name: "Neurology", price: "₹3,00,000" },
  { icon: Baby, name: "IVF & Fertility", price: "₹1,20,000" },
  { icon: Smile, name: "Dental Care", price: "₹30,000" },
  { icon: Sparkles, name: "Cosmetic Surgery", price: "₹80,000" },
];

const whyChooseUs = [
  "NABH & JCI Accredited Hospitals",
  "Dedicated Patient Coordinator",
  "Transparent Pricing",
  "No Hidden Charges",
  "End-to-End Support",
  "Multi-Language Assistance",
];

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    country: "UAE",
    text: "HumanCare MVT made my cardiac surgery journey stress-free.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Grace Adeyemi",
    country: "Nigeria",
    text: "My mother received excellent cancer treatment in India.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Mohammad Rahman",
    country: "Bangladesh",
    text: "Affordable knee replacement surgery changed my life.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
];



export default function HomePage() {
  return (
    <div className="layout">

      {/* HERO SECTION start  */}
<section className="hero">
  <div className="hero-left">
    <span className="hero-badge-red">Trusted Medical Value Travel Partner</span>

    <h1 className="hero-title-new">
      World-Class Medical Treatment in India at  <span className="hero-highlight-red">Affordable Cost</span>
    </h1>

    <p className="hero-desc-new">
      Connecting international patients with top Indian hospitals for quality
      healthcare. Save up to 80% on medical procedures with our comprehensive
      support services.
    </p>

    <div className="hero-buttons">
      <Link to="/contact" className="cta-btn red-btn">
        <Phone size={18} />
        Book Free Consultation
      </Link>

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn green-btn"
      >
        <MessageCircle size={18} />
        WhatsApp Chat
      </a>
    </div>
  </div>

  <div className="hero-right">
    {trustHighlights.map((item, i) => (
      <div className="trust-card-new" key={i}>
        <item.icon className="trust-icon-new" />
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>
      {/* HERO SECTION end  */}


      

      {/* ABOUT  start*/}
      <section className="about">
  <div className="about-grid">
    {/* LEFT */}
    <div>
      <span className="about-badge">About Us</span>

      <h2 className="about-title">
        Your Trusted Partner for <br /> Healthcare in India
      </h2>

      <p className="about-subtext">
        HumanCare MVT bridges the gap between international patients and
        world-class Indian healthcare facilities.
      </p>

      <p className="about-desc">
        We understand that seeking medical treatment abroad can be overwhelming.
        That's why we provide comprehensive support from the moment you reach out
        to us until your complete recovery. Our team of dedicated coordinators
        ensures a seamless experience throughout your medical journey.
      </p>

      <div className="about-points">
        {["Personalized Care", "Expert Guidance", "24/7 Support"].map((p) => (
          <div className="point-new" key={p}>
            <CheckCircle2 size={18} className="point-icon-new" />
            {p}
          </div>
        ))}
      </div>

      <Link to="/about" className="about-btn">
        Read More About Us <ArrowRight size={18} />
      </Link>
    </div>

    {/* RIGHT */}
    <div className="about-image-box-new">
      <img
        src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200"
        className="about-image-new"
      />

      <div className="experience-card-new">
        <h3>10+</h3>
        <p>Years Experience</p>
      </div>
    </div>
  </div>
</section>
      {/* about SECTION end  */}

{/* hospitals section Start */}

<section className="hospitals-section">
      <span className="hospitals-badge">Specialist Hospitals</span>

      <h2 className="hospitals-title">Trusted Partner Hospitals</h2>

      <p className="hospitals-subtitle">
        We collaborate with India’s most reputed hospitals offering
        world-class infrastructure and internationally accredited care
      </p>

      <div className="hospitals-grid">
        {hospitals.map((hospital, index) => (
          <div className="hospital-card" key={index}>
            <div className="hospital-image">
              <img src={hospital.image} alt={hospital.name} />
            </div>

            <h3>{hospital.name}</h3>
            <p className="hospital-specialty">{hospital.specialty}</p>
            <p className="hospital-location">{hospital.location}</p>
          </div>
        ))}
      </div>

      <div className="hospitals-cta">
        <a href="/hospitals" className="explore-btn">
          Explore More Hospitals
        </a>
      </div>
    </section>
{/* hospital section end */}
      {/* TREATMENTS start */}
  <section className="treatments">
  <div className="treatment-container">

    <span className="treat-badge">Our Specialties</span>

    <h2 className="treat-title">Popular Medical Treatments</h2>

    <p className="treat-subtext">
      Access world-renowned specialists and cutting-edge treatments at a fraction of the cost
    </p>

    <div className="treat-grid">
      {[
        { icon: HeartPulse, name: "Heart Surgery" },
        { icon: Bone, name: "Bone & Joint" },
        { icon: Brain, name: "Neurology" },
        { icon: Baby, name: "IVF & Fertility" },
        { icon: Smile, name: "Dental Care" },
        { icon: Sparkles, name: "Cosmetic Surgery" },
            { icon: HeartPulse, name: "Heart Surgery" },
        { icon: Bone, name: "Bone & Joint" },
        { icon: Brain, name: "Neurology" },
        { icon: Baby, name: "IVF & Fertility" },
        { icon: Smile, name: "Dental Care" },
        { icon: Sparkles, name: "Cosmetic Surgery" },
      ].map((item, i) => (
        <div className="treat-card" key={i}>
          <div className="treat-icon-wrap">
            <item.icon className="treat-icon" size={32} />
          </div>
          <h3 className="treat-name">{item.name}</h3>
        </div>
      ))}
    </div>

    
  </div>
</section>
      {/* TREATMENTS end */}
{/* doctors section start*/}
 <section className="doctors-section">
      <span className="doctors-badge">Expert Doctors</span>

      <h2 className="doctors-title">World-Renowned Specialists</h2>

      <p className="doctors-subtitle">
        Our network includes some of India's most celebrated medical
        professionals
      </p>

      <div className="doctors-grid">
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <div className="doctor-image">
              <img src={doc.image} alt={doc.name} />
            </div>

            <h3>{doc.name}</h3>
            <p className="doctor-specialty">{doc.specialty}</p>
            <p className="doctor-hospital">{doc.hospital}</p>

            <div className="doctor-exp">
              <User />
              <span>{doc.experience}</span>
            </div>
          </div>
        ))}
      </div>
 <div className="hospitals-cta">
   <p className="doctors-footer">
        Our network includes 300+ specialist doctors across various medical
        fields
      </p>
        <a href="/hospitals" className="explore-btn">
          Explore More Doctors
        </a>
      </div>
     
    </section>
{/* doctors section end*/}


      {/* WHY CHOOSE US start*/}
      <section className="why-choose">
  <div className="choose-container">

    <span className="choose-badge">Why Choose Us</span>

    <h2 className="choose-title">Your Health, Our Priority</h2>

    <p className="choose-subtext">
      Experience healthcare excellence with complete transparency and support
    </p>

    <div className="choose-grid">
      {[
        "NABH & JCI Accredited Hospitals",
        "Dedicated Patient Coordinator",
        "Transparent Pricing",
        "No Hidden Charges",
        "End-to-End Support",
        "Multi-Language Assistance",
      ].map((item, index) => (
        <div className="choose-card" key={index}>
          <CheckCircle className="choose-icon" size={22} />
          <span>{item}</span>
        </div>
      ))}
    </div>

    {/* <button className="choose-btn">
      Learn More →
    </button> */}

  </div>
</section>
      {/* WHY CHOOSE US end*/}

      {/* Advantages start*/}

 <section className="advantages-section">
      <p className="tag">Our Advantages</p>
      <h2 className="title">What Makes Us Different</h2>
      <p className="subtitle">Experience healthcare support that goes beyond expectations</p>

      <div className="grid-box">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <div className="icon-box">{item.icon}</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
      {/* Advantages end*/}


      {/* how its work start*/}

    <section className="cta-wrapper">
      <div className="cta-box">
        <div className="cta-text">
          <h2>How It Works</h2>
          <p>
            Understand our step-by-step process from consultation to complete
            recovery. Quick, simple and fully transparent.
          </p>
        </div>

        <Link to="/how-it-works" className="cta-btn">
          Know More →
        </Link>
      </div>
    </section>
          {/* how its work end /}



      <Testimonials />

     

      {/* CTA start*/}
    
      {/* cta end */}

      <section className="blue-cta-section">
  <h2 className="blue-cta-title">Ready to Start Your Healthcare Journey?</h2>
  <p className="blue-cta-subtitle">
    Get a free consultation and personalized treatment plan from top Indian hospitals
  </p>

  <div className="blue-cta-buttons">
    <Link to="/contact" className="blue-btn-outline">
      <Phone size={18} /> Get Free Consultation
    </Link>

    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="blue-btn-whatsapp"
    >
      <MessageCircle size={18} /> WhatsApp Now
    </a>
  </div>
</section>
<Contactsection />
    </div>
  );
}

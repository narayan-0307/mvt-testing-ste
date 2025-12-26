import React from "react";
import { Award } from "lucide-react";
import "./Doctors.css";

const doctors = [
  {
    name: "Dr. Devi Prasad Shetty",
    specialty: "Cardiac Surgery",
    hospital: "Narayana Health",
    experience: "40+ years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  },
  {
    name: "Dr. Randeep Guleria",
    specialty: "Pulmonology",
    hospital: "AIIMS Delhi",
    experience: "35+ years",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
  },
  {
    name: "Dr. Ashok Seth",
    specialty: "Interventional Cardiology",
    hospital: "Fortis Escorts",
    experience: "38+ years",
    image: "https://images.unsplash.com/photo-1606813902779-9c6c3f7a8c3b",
  },
  {
    name: "Dr. Naresh Trehan",
    specialty: "Cardiovascular Surgery",
    hospital: "Medanta",
    experience: "45+ years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  },
  {
    name: "Dr. Ramakanta Panda",
    specialty: "Heart Surgery",
    hospital: "Asian Heart Institute",
    experience: "30+ years",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    name: "Dr. P Raghu Ram",
    specialty: "Breast Surgery",
    hospital: "Ushalakshmi Centre",
    experience: "25+ years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
  },
  {
    name: "Dr. Muffazal Lakdawala",
    specialty: "Bariatric Surgery",
    hospital: "Saifee Hospital",
    experience: "20+ years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
  },
  {
    name: "Dr. Arvinder Singh Soin",
    specialty: "Liver Transplant",
    hospital: "Medanta",
    experience: "35+ years",
    image: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38",
  },
];

export default function DoctorsPage() {
  return (
    <>

       <section className="doctors-hero">
        <span className="hero-badge">Medical Specialties</span>
        <h1>World-Class Treatments at Affordable Prices</h1>
        <p>
          Access India's finest specialists and cutting-edge medical technology
          at a fraction of Western costs
        </p>
      </section>
      {/* HERO */}
     

      {/* DOCTORS LIST */}
      <section className="doctors-section">
        <div className="doctors-grid">
          {doctors.map((doc, index) => (
            <div className="doctor-card" key={index}>
              <div className="doctor-image">
                <img src={doc.image} alt={doc.name} />
              </div>

              <h3>{doc.name}</h3>
              <p className="specialty">{doc.specialty}</p>
              <p className="hospital">{doc.hospital}</p>

              <div className="experience">
                <Award />
                {doc.experience}
              </div>
            </div>
          ))}
        </div>

        <p className="doctors-footer">
          Our network includes 300+ specialist doctors across various medical fields
        </p>
      </section>
    </>
  );
}

// src/components/DoctorsGrid.jsx
import React, { useState, useEffect } from 'react'

const doctors = [
  {
    id: 1,
    name: 'Dr. P. Shirish Kumar',
    degrees: 'MBBS, MD (General Medicine)',
    title: 'Consultant General Physician & Internal Medicine Specialist',
    specialty: 'General Medicine',
    expertise: ['Diabetes','Hypertension','Infectious Diseases','Critical Care','Lifestyle Disorders'],
    experienceYears: 12,
    image: '/images/shirish.jpg',
    link: '/doctors/dr-p-shirish-kumar',
    bio: 'Dr. Shirish Kumar brings over 12 years of experience in providing evidence-based and patient-focused medical care.',
  },
  {
    id: 2,
    name: 'Dr. Vamshi Krishna Ejjagiri',
    degrees: 'M.S. Orthopaedics',
    title: 'Trauma & Joint Replacement Surgeon',
    specialty: 'Orthopaedics',
    expertise: ['Trauma Surgery','Joint Replacement','Arthroplasty','Fracture Management'],
    experienceYears: 10,
    image: '/images/vamsi-krishna.png',
    link: '/doctors/dr-vamshi-krishna-ejjagiri',
    bio: 'Trauma and Joint Replacement Surgeon focusing on personalized orthopaedic care.',
  },
  {
    id: 3,
    name: 'Dr. Shaik Siddiq',
    degrees: 'MBBS, MD (Pulmonary Medicine)',
    title: 'Consultant & Interventional Pulmonologist',
    specialty: 'Pulmonology',
    expertise: ['Bronchoscopy','Asthma','COPD','Sleep Medicine','Respiratory Infections'],
    experienceYears: 0,
    image: '/images/shaik-siddiq.jpeg',
    link: '/doctors/dr-shaik-siddiq',
    bio: 'Consultant pulmonologist with expertise in airway and respiratory care.',
  },
  {
    id: 4,
    name: 'Dr. D. Suresh Babu',
    degrees: 'MBBS, DNB, FIAGES, FALS',
    title: 'Consultant General, Laparoscopic & Laser Surgeon',
    specialty: 'General Surgery',
    expertise: [
      'Laser Proctology',
      'Varicose Veins',
      'Laparoscopic Surgery',
      'Hernia Repair',
      'Emergency Care',
    ],
    experienceYears: 0,
    image: '/images/suresh.jpg',
    link: '/doctors/dr-d-suresh-babu',
    bio: 'Expert in minimally invasive and laser surgical procedures.',
  },
  {
    id: 5,
    name: 'Dr. Vamsidhar Reddy V',
    degrees: 'MD, DM (Gastroenterology), FAGE',
    title: 'Senior Consultant – Gastroenterology & Hepatology',
    specialty: 'Gastroenterology',
    expertise: ['ERCP','EUS','Therapeutic Endoscopy','Hepatology'],
    experienceYears: 0,
    image: '/images/vamsidhar.webp',
    link: '/doctors/gastro-specialist',
    bio: 'Senior consultant specializing in advanced endoscopic procedures.',
  },
]

const DoctorsGrid = ({ onBookAppointment = () => {} }) => {
  const [selected, setSelected] = useState(null)

  // ESC closes modal
  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && setSelected(null)
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [])

  // Lock scroll while modal open
  useEffect(() => {
    document.body.classList.toggle('no-scroll', !!selected)
    document.documentElement.classList.toggle('no-scroll', !!selected)
  }, [selected])

  return (
    <section className="section section--white doctors">
      <div className="container">
        <div className="section-title">
          <h2>Our Expert Doctors</h2>
          <p>Meet our experienced and compassionate healthcare professionals</p>
        </div>

        <div className="doctors__grid">
          {doctors.map((doctor) => (
            <article
              key={doctor.id}
              className="doctors__card"
              onClick={() => setSelected(doctor)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(doctor)}
            >
              <div className="doctors__image-wrapper">
                <img src={doctor.image} alt={doctor.name} loading="lazy" />
              </div>

              <div className="doctors__content">
                <h3>{doctor.name}</h3>
                <p className="doctors__subtitle">{doctor.title}</p>
                <p className="doctors__specialty">{doctor.specialty}</p>
                <a
                  href={doctor.link}
                  className="doctors__link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Profile
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div className="doctors-modal" onClick={() => setSelected(null)}>
          <div
            className="doctors-modal__panel"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="doctors-modal__close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="doctors-modal__header">
              <img src={selected.image} alt={selected.name} loading="lazy" />
              <div>
                <h3>{selected.name}</h3>
                <p className="doctors-modal__degrees">{selected.degrees}</p>
                <p className="doctors-modal__title">{selected.title}</p>
                {selected.experienceYears > 0 && (
                  <p>{selected.experienceYears}+ years experience</p>
                )}
              </div>
            </div>

            <div className="doctors-modal__body">
              <h4>Expertise</h4>
              <ul>
                {selected.expertise.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
              <p>{selected.bio}</p>
            </div>

            <div className="doctors-modal__actions">
              <a href={selected.link} className="btn btn--primary">
                View Full Profile
              </a>
              <button
                className="btn btn--accent"
                onClick={() => onBookAppointment()}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default DoctorsGrid

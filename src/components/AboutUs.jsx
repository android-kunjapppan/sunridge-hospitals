
// src/components/AboutUs.jsx
import React from 'react'

const AboutUs = ({ onBookAppointment }) => {
  return (
    <section className="section section--light about">
      <div className="container">
        <div className="section-title reveal">
          <h2>About Sunridge Hospitals</h2>
          <p>First-point-of-care. Neighborhood trust. Tertiary-level quality.</p>
        </div>

        <div className="about__content reveal">
          <h3>About Us</h3>
          <p>
            Sunridge Hospitals is a patient-centric neighborhood hospital chain
            committed to delivering exceptional medical care with compassion,
            integrity, and clinical excellence. Designed as the first point of
            care for families and communities, Sunridge bridges the gap between
            primary care clinics and large tertiary hospitals by offering
            comprehensive, high-quality services within a mid-sized hospital
            framework.
          </p>
          <p>
            With a strong focus on accessibility, ethical medical practice, and
            evidence-based treatment, Sunridge Hospitals combines modern
            infrastructure, skilled clinicians, and streamlined systems to
            ensure timely, reliable, and affordable healthcare. Every Sunridge
            hospital is built around a simple yet powerful principle: patients
            come first—always.
          </p>
          <p>
            By delivering tertiary-level standards of care in a warm,
            neighborhood-friendly environment, Sunridge Hospitals aims to become
            a trusted healthcare partner for generations of families.
          </p>

          <h3>Our Vision</h3>
          <p>
            To become India’s most trusted neighborhood hospital chain, serving
            as the first point of care for communities, while delivering
            exceptional clinical outcomes, service excellence, and patient
            experience on par with the country’s leading tertiary care
            institutions.
          </p>

          <h3>Our Mission</h3>
          <ul className="about__mission">
            <li>
              To provide accessible, reliable, and high-quality healthcare
              within neighborhood reach.
            </li>
            <li>
              To deliver tertiary-care-level clinical standards in a mid-sized
              hospital setting.
            </li>
            <li>
              To uphold a patient-first philosophy, ensuring ethical,
              transparent, and compassionate care.
            </li>
            <li>
              To integrate modern medical technology with skilled professionals
              and efficient systems.
            </li>
            <li>
              To create a safe, respectful, and healing environment for
              patients, families, and caregivers.
            </li>
            <li>
              To build a scalable hospital network that consistently sets
              benchmarks in quality, trust, and service excellence.
            </li>
          </ul>

          <div className="about__cta">
            <a href="/appointment" className="btn btn--accent" onClick={onBookAppointment}>
              Book an Appointment
            </a>
            <a href="/contact" className="btn btn--primary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
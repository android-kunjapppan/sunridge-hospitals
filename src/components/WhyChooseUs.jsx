
// src/components/WhyChooseUs.jsx
import React from 'react'

const reasons = [
  { icon: '🏅', title: 'Expert Doctors', text: 'Our team consists of highly qualified and experienced medical professionals.' },
  { icon: '👥', title: 'Patient-Centered Care', text: 'We prioritize your comfort and well-being throughout your healthcare journey.' },
  { icon: '⏰', title: '24/7 Emergency Services', text: 'Round-the-clock emergency care for when you need it most.' },
  { icon: '💡', title: 'Advanced Technology', text: 'State-of-the-art medical equipment for accurate diagnosis and treatment.' },
]

const WhyChooseUs = () => {
  return (
    <section className="section section--light why">
      <div className="container">
        <div className="section-title reveal">
          <h2>Why Choose Sunridge Hospital?</h2>
          <p>
            We are committed to providing exceptional healthcare services with a focus on patient
            satisfaction and well-being.
          </p>
        </div>

        <div className="why__grid reveal">
          {reasons.map((r) => (
            <div key={r.title} className="why__card card reveal">
              <div className="why__icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 
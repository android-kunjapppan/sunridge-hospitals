import React, { useEffect, useState } from 'react'

const slides = [
  {
    id: 1,
    title: 'Expert Care for Your',
    highlight: 'HEALTH',
    subtitle: 'State-of-the-art facilities and compassionate care',
    image:
      '/images/infrastructure-gallery-1.jpeg',
  },
  {
    id: 2,
    title: 'Compassionate Medical',
    highlight: 'SERVICES',
    subtitle: 'Your health, our priority every day',
    image:
      '/images/infrastructure-gallery-2.jpeg',
  },
  {
    id: 3,
    title: 'Advanced Surgical',
    highlight: 'SOLUTIONS',
    subtitle: 'Cutting-edge technology for better outcomes',
    image:
      '/images/infrastructure-gallery-3.jpeg',
  },
  {
    id: 4,
    title: 'Comprehensive',
    highlight: 'DIAGNOSTICS',
    subtitle: 'Accurate results with modern equipment',
    image:
      '/images/infrastructure-gallery-4.jpeg',
  },
  {
    id: 5,
    title: 'Personalized',
    highlight: 'TREATMENT',
    subtitle: 'Tailored care plans for every patient',
    image:
      '/images/infrastructure-gallery-5.jpeg',
  }
]

const HeroSlider = ({ onBookAppointment }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(id)
  }, [])

  const current = slides[index]

  const goTo = (i) => setIndex(i)
  const next = () => setIndex((prev) => (prev + 1) % slides.length)
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="hero">
      <div className="hero__background">
        <img src={current.image} alt={current.title} className="hero__image" />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <div className="hero__text reveal reveal--left">
          <h1>
            {current.title}{' '}
            <span className="hero__highlight">{current.highlight}</span>
          </h1>
          <p>{current.subtitle}</p>
          <button className="btn btn--accent hero__cta" onClick={onBookAppointment}>Book Appointment</button>
        </div>
      </div>

      <div className="hero__dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={
              'hero__dot' + (i === index ? ' hero__dot--active' : '')
            }
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <button className="hero__nav hero__nav--left" onClick={prev} aria-label="Previous slide">
        ‹
      </button>
      <button className="hero__nav hero__nav--right" onClick={next} aria-label="Next slide">
        ›
      </button>
    </section>
  )
}

export default HeroSlider
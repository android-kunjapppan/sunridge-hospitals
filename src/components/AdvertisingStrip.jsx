
import React from 'react'

const ads = [
  { id: 1, title: 'Cardiac Care Campaign',    src: '/images/infrastructure-gallery-1.jpeg', href: '/campaigns/cardiac-care' },
  { id: 2, title: 'Diabetes Awareness',       src: '/images/infrastructure-gallery-2.jpeg', href: '/campaigns/diabetes-awareness' },
  { id: 3, title: 'Emergency Services 24x7',  src: '/images/infrastructure-gallery-3.jpeg', href: '/services/emergency' },
  { id: 4, title: 'Preventive Health Packages', src: '/images/infrastructure-gallery-4.jpeg', href: '/packages/preventive-health' },
  { id: 5, title: 'Neighborhood Trust',       src: '/images/infrastructure-gallery-5.jpeg', href: '/campaigns/neighborhood-trust' },
]

const AdvertisingStrip = () => {
  return (
    <section className="section section--white ads">
      <div className="container">
        <div className="section-title reveal">
          <h2>Trusted Care • Modern Infrastructure • Community First</h2>
          <p>Our campaigns and partners enabling accessible, patient-first healthcare</p>
        </div>

        {/* Grid: 3 / 2 / 1 columns with fixed-size tiles */}
        <div className="ads__grid reveal" aria-label="Advertising and partners">
          {ads.map((ad) => {
            const Card = (
              <figure className="ads__card" key={ad.id}>
                <div className="ads__image-area">
                  <img src={ad.src} alt={ad.title} loading="lazy" />
                </div>
                <figcaption className="ads__caption">{ad.title}</figcaption>
              </figure>
            )

            return ad.href ? (
              <a
                key={`${ad.id}-link`}
                href={ad.href}
                className="ads__link"
                aria-label={`Open ${ad.title}`}
                title={ad.title}
              >
                {Card}
              </a>
            ) : (
              Card
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AdvertisingStrip
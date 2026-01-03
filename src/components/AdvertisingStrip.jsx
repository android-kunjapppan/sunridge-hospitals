
import React from 'react'

const ads = [
  { id: 1, title: 'Multi speciality Hospital',    src: '/images/infrastructure-gallery-1.jpeg' },
  { id: 2, title: 'XRay and Laboratory',       src: '/images/infrastructure-gallery-2.jpeg' },
  { id: 3, title: 'Emergency Services 24x7',  src: '/images/infrastructure-gallery-3.jpeg' },
  { id: 4, title: 'Preventive Health Packages', src: '/images/infrastructure-gallery-4.jpeg' },
  { id: 5, title: 'Neighborhood Trust',       src: '/images/infrastructure-gallery-5.jpeg' },
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
          {ads.map((ad) => (
            <figure className="ads__card" key={ad.id}>
              <div className="ads__image-area">
                <img src={ad.src} alt={ad.title} loading="lazy" />
              </div>
              <figcaption className="ads__caption">{ad.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdvertisingStrip
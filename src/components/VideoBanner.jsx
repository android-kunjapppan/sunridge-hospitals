
import React from 'react'

const VideoBanner = () => {
  return (
    <section className="section section--white video-banner">
      <div className="container">
        <div className="section-title reveal">
          <h2>Inside Sunridge Hospitals</h2>
          <p>Take a quick tour of our facilities and patient-first approach</p>
        </div>

        <div className="video-banner__wrapper reveal">
          <iframe
            className="video-banner__video"
            src="https://www.youtube.com/embed/VRIRc_AM-n0"
            title="Sunridge Hospital Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default VideoBanner

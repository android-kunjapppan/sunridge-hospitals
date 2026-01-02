
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
          <video
            className="video-banner__video"
            src='/images/sunridge-demo-video-1.mp4'
            controls
            playsInline
            preload="metadata"
            poster="/images/infrastructure-gallery-1.jpeg"
          >
            Sorry, your browser doesn’t support HTML5 video.
          </video>
        </div>
      </div>
    </section>
  )
}

export default VideoBanner

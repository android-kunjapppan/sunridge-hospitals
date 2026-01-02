import React, { useEffect } from 'react'

const AppointmentForm = () => {
  useEffect(() => {
    // basic scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('This is a static demo. Implement your submit logic here.')
  }

  return (
    <section className="section section--purple appointment">
      <div className="container appointment__inner reveal">
        <div className="section-title">
          <h2>Request An Appointment</h2>
        </div>
        <div className="appointment__card">
          <form className="appointment__form" onSubmit={handleSubmit}>
            <div className="appointment__grid">
              <div className="appointment__field reveal reveal--left">
                <input type="text" placeholder="Enter Your Name" required />
              </div>
              <div className="appointment__field reveal reveal--right">
                <input type="tel" placeholder="Phone" required />
              </div>
            </div>

            <div className="appointment__grid">
              <div className="appointment__field reveal reveal--left">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="appointment__field reveal reveal--right">
                <select defaultValue="">
                  <option value="" disabled>
                    Select Hospital
                  </option>
                  <option>Sunridge Moti Nagar</option>
                </select>
              </div>
            </div>

            <div className="appointment__grid">
              <div className="appointment__field reveal reveal--left">
                <select defaultValue="">
                  <option value="" disabled>
                    Select Speciality
                  </option>
                  <option>I am not sure / General</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Gastroenterology</option>
                </select>
              </div>
              <div className="appointment__field reveal reveal--right">
                <select defaultValue="">
                  <option value="" disabled>
                    Select Doctor
                  </option>
                  <option>Assigned by Hospital</option>
                  <option>Dr. Emily Johnson</option>
                  <option>Dr. Michael Chen</option>
                  <option>Dr. Sarah Patel</option>
                </select>
              </div>
            </div>

            <div className="appointment__date reveal">
              <input
                type="date"
                placeholder="Select Date"
              />
            </div>

            <div className="appointment__submit reveal">
              <button type="submit" className="btn btn--accent appointment__submit-btn">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AppointmentForm
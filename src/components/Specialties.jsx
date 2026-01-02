
const specialties = [
  { id: 1,  title: "Cardiology",        description: "Expert heart care and treatment",                           image: "/images/cardiology.webp",                          link: "/specialties/cardiology" },
  { id: 2,  title: "Neurology",         description: "Advanced brain and nerve care",                            image: "/images/Neurology.webp",                           link: "/specialties/neurology" },
  { id: 3,  title: "Orthopedics",       description: "Comprehensive bone and joint care",                        image: "/images/Orthopaedics.webp",                        link: "/specialties/orthopedics" },
  { id: 4,  title: "Gastroenterology",  description: "Digestive health specialists",                             image: "/images/Gastroenterology.webp",                    link: "/specialties/gastroenterology" },
  { id: 5,  title: "Gynaecology",       description: "Women's health and reproductive care specialists",         image: "/images/Gynaecology.webp",                         link: "/specialties/gynaecology" },
  { id: 6,  title: "Hepatology",        description: "Liver and biliary system specialists",                     image: "/images/Hepatology.jpg",                          link: "/specialties/hepatology" },
  { id: 7,  title: "Internal Medicine & Diabetology", description: "Comprehensive adult medical care and diagnostics", image: "/images/Internal Medicine & Diabetology.webp", link: "/specialties/internal-medicine" },
  { id: 9,  title: "Pulmonology",       description: "Respiratory and lung care specialists",                    image: "/images/Pulmonology.webp",                         link: "/specialties/pulmonology" },
  { id: 10, title: "Urology",           description: "Urinary tract and male reproductive health specialists",   image: "/images/Urology.webp",                             link: "/specialties/urology" },
]

const looped = [...specialties, ...specialties]

const Specialties = () => {
  return (
    <section className="section section--light specialties">
      <div className="container">
        <div className="section-title reveal">
          <h2>Our Specialties</h2>
          <p>Comprehensive healthcare services provided by expert specialists</p>
        </div>

        <div className="specialties__marquee reveal" aria-label="Scrolling specialties">
          <div className="specialties__track">
            {looped.map((s, idx) => (
              <a
                key={`${s.id}-${idx}`}
                href={s.link}
                onClick={(e) => e.preventDefault()}
                className="specialties__card"
                aria-label={s.title}
              >
                <div className="specialties__image-wrapper">
                  <img src={s.image} alt={s.title} loading="lazy" />
                  <div className="specialties__image-overlay" />
                </div>
                <div className="specialties__content">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specialties

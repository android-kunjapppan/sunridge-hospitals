import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import EmailLink from "./EmailLink";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container footer__inner">
				<div className="footer__grid">
					<div className="footer__column">
						<h3>About Sunridge</h3>

						<p>
							Sunridge Hospitals is a patient-centric neighborhood
							hospital chain delivering tertiary-level standards
							of care in a warm, community-first environment.
						</p>
					</div>

					<div className="footer__column">
						<h3>Quick Links</h3>
						<ul>
							<li>
								<Link to="/about">About Us</Link>
							</li>
							<li>
								<a href="/#specialties">Our Services</a>
							</li>
							<li>
								<a href="/#doctors">Our Doctors</a>
							</li>
							<li>
								<a href="/#location">Contact Us</a>
							</li>
						</ul>
					</div>

					<div className="footer__column">
  <h3>Contact Info</h3>
  <p>
    K/21, 8-3-167, Kalyan Nagar Phase 3 Rd, Phase-3, Pramila Enclave,
    Kalyan Nagar, Moti Nagar, Hyderabad, Telangana 500114
  </p>
  <p>Phone: +91 9652766690</p>

  <p>
    Email:{" "}
    <EmailLink
      email="sunridgehospital@gmail.com"
      className="footer__link"
    />
  </p>
</div>


					<div className="footer__column">
						<h3>Follow Us</h3>
						<div className="footer__social">
							<a
								href="https://www.facebook.com/SunridgeHospitals"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
							>
								<Facebook size={18} strokeWidth={2} />
							</a>
							<a
								href="https://www.instagram.com/sunridge_hospital"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
							>
								<Instagram size={18} strokeWidth={2} />
							</a>
							<a
								href="https://www.linkedin.com/company/sunridge-hospital/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
							>
								<Linkedin size={18} strokeWidth={2} />
							</a>
						</div>
					</div>
				</div>

				<div className="footer__bottom">
					<p>© 2024 Sunridge Hospital. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

import React from "react";
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
								<a href="/about">About Us</a>
							</li>
							<li>
								<a href="/services">Our Services</a>
							</li>
							<li>
								<a href="/doctors">Our Doctors</a>
							</li>
							<li>
								<a href="/contact">Contact Us</a>
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
							<a href="#" aria-label="Facebook">
								f
							</a>
							<a href="#" aria-label="Twitter">
								t
							</a>
							<a href="#" aria-label="Instagram">
								in
							</a>
							<a href="#" aria-label="LinkedIn">
								ln
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

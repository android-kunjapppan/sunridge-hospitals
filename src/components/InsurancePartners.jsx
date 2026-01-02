import React from 'react';

const InsurancePartners = () => {
  const insuranceCompanies = [
    "Aditya Birla General Insurance",
    "Bajaj Allianz Health Insurance",
    "ICICI Lombard Health Insurance",
    "Niva Bupa Health Insurance",
    "Manipal Cigna",
    "Reliance Health Insurance",
    "SBI General Insurance",
    "TATA AIG General Insurance",
    "Vidal health",
    "Erricson tpa",
    "FHPL"
  ];

  const tpas = [
    
  ];

  return (
    <section className="section section--white insurance-partners" id="insurance-partners">
      <div className="container">
        <div className="section-title reveal">
          <h2>Our Insurance & TPA Partners</h2>
          <p>We partner with leading insurance providers and TPAs to ensure a seamless healthcare experience for our patients.</p>
        </div>

        <div className="partners-grid-container">
          <div className="partners-category reveal">
            <h3>Insurance Companies</h3>
            <div className="partners-grid">
              {insuranceCompanies.map((company, index) => (
                <div key={index} className="partner-card">
                  <div className="partner-name">{company}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;

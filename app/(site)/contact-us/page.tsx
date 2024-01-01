import { fetchBanners, fetchFaqs, fetchGlobals } from "@/app/lib/api";
import { Footer } from "@/components/organims/Footer";
import { MobileNavbar, Navbar } from "@/components/organims/Navbar";
import React from "react";

export default async function page() {
  const global = await fetchGlobals();
  const banners = await fetchBanners();
  const faqs = await fetchFaqs();
  return (
    <div className="site-wrapper">
      <div
        className="header_contact"
        style={{ backgroundImage: `url(${banners.contact})` }}
      >
        {/* <!-- ======== 1.1. Header section ========  --> */}
        <header>
          <Navbar />
          {/* <!-- Sidebar --> */}
          <MobileNavbar />
        </header>
        {/* <!-- ======== End of 1.1. Header section ========  --> */}

        {/* <!-- ======== 5.1. hero section ========  --> */}
        <section className="banner_contact d-flex align-items-center gap-2 flex-column">
          <h2>Contact us</h2>
          <h5>Home / contact us</h5>
        </section>
        {/* <!-- ======== End of 5.1. hero section ========  --> */}
      </div>
      {/* <!-- ======== 6.2. Get In Touch With Us section ======== --> */}
      <section className="contact_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 position-relative pe-lg-5 pe-md-4 pe-sm-2 pe-2">
              <figure>
                <img
                  src="assets/Images/bg/about_cercle1.png"
                  alt="img"
                  className="contact-cercle1"
                />
              </figure>
              <div className="mapouter">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8104059.208981297!2d7.793363532891112!3d7.347141635547145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613753703e0f21%3A0x2b03c44599829b53!2sCameroun!5e0!3m2!1sfr!2scm!4v1663765956697!5m2!1sfr!2scm"
                  width="1800"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mt-md-0 mt-sm-5 mt-4 text-md-start text-sm-center text-center position-relative">
              <h2>Get in touch with us</h2>
              <p>{global.getInTouchText}</p>
              {/* <!-- contact form --> */}
              <form id="contact-form">
                <div id="contact-message"> </div>
                <div className="d-flex gap-lg-4 gap-md-3 gap-sm-4 gap-3">
                  <input type="text" placeholder="Your name" />
                  <input type="email" placeholder="Email address" required />
                </div>
                <div className="d-flex gap-lg-4 gap-md-3 gap-sm-4 gap-3">
                  <input type="text" placeholder="Phone number" />
                  <input type="text" placeholder="Subject" />
                </div>
                <div>
                  <textarea
                    cols={30}
                    rows={8}
                    placeholder="Write here message"
                  ></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
              <figure>
                <img
                  src="assets/Images/bg/about_cercle1.png"
                  alt="img"
                  className="contact-cercle2"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======== End of 6.2. Get In Touch With Us section ======== --> */}

      {/* <!-- ======== 3.2. FAQ section ========  --> */}
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 d-flex pe-md-5 pe-sm-0 pe-0 flex-column justify-content-center gap-3 text-md-start text-sm-center text-center position-relative">
              <figure>
                <img src="assets/Images/bg/about_cercle1.png" alt="img" />
              </figure>
              <h5>FAQ</h5>
              <h2>{global.faqSectionTitle}</h2>
              <p>{global.faqSectionDescription}</p>
            </div>
            <div className="col-lg-6 col-md-6 mt-md-0 mt-sm-4 mt-4">
              <div className="accordion" id="accordionExample">
                {faqs.map((f, i) => (
                  <div key={i} className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${i}`}
                        aria-expanded="true"
                        aria-controls={`#collapse-${i}`}
                      >
                        {f.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse-${i}`}
                      className={`accordion-collapse collapse ${
                        i === 0 ? "show" : ""
                      }`}
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <p className="accordion-body">{f.response}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======== End of 3.2. FAQ section ========  --> */}

      <Footer globals={global as any} />
    </div>
  );
}

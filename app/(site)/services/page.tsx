import {
  fetchBanners,
  fetchFaqs,
  fetchGlobals,
  fetchMembers,
  fetchServices,
} from "@/app/lib/api";
import { Footer } from "@/components/organims/Footer";
import { MobileNavbar, Navbar } from "@/components/organims/Navbar";
import React from "react";

export default async function page() {
  const global = await fetchGlobals();
  const banners = await fetchBanners();
  const services = await fetchServices();
  const faqs = await fetchFaqs();
  const members = await (async () => {
    const data = await fetchMembers();
    const matrix = [];
    let rowIndex = 0;
    for (let i = 0; i < data.length; i += 2) {
      const row = data.slice(i, i + 2);
      matrix[rowIndex] = row;
      rowIndex++;
    }
    return matrix;
  })();

  return (
    <div className="site-wrapper">
      <div
        className="header_service"
        style={{ backgroundImage: `url(${banners.service})` }}
      >
        {/* <!-- ======== 1.1. Header section ========  --> */}
        <header>
          <Navbar />
          {/* <!-- Sidebar --> */}
          <MobileNavbar />
        </header>
        {/* <!-- ======== End of 1.1. Header section ========  --> */}

        {/* <!-- ======== 5.1. hero section ========  --> */}
        <section className="banner_blog d-flex align-items-center gap-2 flex-column">
          <h2>Services</h2>
          <h5>Home / services</h5>
        </section>
        {/* <!-- ======== End of 5.1. hero section ========  --> */}
      </div>

      {/* <!-- ====== 1.7.  Our Services section ====== --> */}
      <section className="services">
        <div className="container text-center">
          <h5>Our services</h5>
          <h2>{global.serviceTitle}</h2>
          <p>{global.servicesDescrption}</p>
          <div className="d-flex justify-content-between align-items-center flex-md-row flex-sm-column flex-column gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-md-5 mt-sm-5 mt-4">
            {services?.[0] && (
              <div className="service_card d-flex flex-column align-items-center text-center">
                <figure>
                  <img src={services?.[0].image} alt="service" />
                </figure>
                <h4>{services?.[0].title}</h4>
                <p>{services?.[0].description}</p>
                <a href="#" className="btn_hover2">
                  <i className="fa-solid fa-greater-than"></i>
                </a>
              </div>
            )}
            {services?.[1] && (
              <div className="service_card d-flex flex-column align-items-center text-center">
                <figure>
                  <img src={services?.[1].image} alt="service" />
                </figure>
                <h4>{services?.[1].title}</h4>
                <p>{services?.[1].description}</p>
                <a href="#" className="btn_hover2">
                  <i className="fa-solid fa-greater-than"></i>
                </a>
              </div>
            )}
            {services?.[2] && (
              <div className="service_card d-flex flex-column align-items-center text-center">
                <figure>
                  <img src={services?.[2].image} alt="service" />
                </figure>
                <h4>{services?.[2].title}</h4>
                <p>{services?.[2].description}</p>
                <a href="#" className="btn_hover2">
                  <i className="fa-solid fa-greater-than"></i>
                </a>
              </div>
            )}
          </div>
          <div className="d-flex justify-content-between align-items-center flex-md-row flex-sm-column flex-column gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-md-5 mt-sm-5 mt-4">
            {services?.[3] && (
              <div className="service_card d-flex flex-column align-items-center text-center">
                <figure>
                  <img src={services?.[3].image} alt="service" />
                </figure>
                <h4>{services?.[3].title}</h4>
                <p>{services?.[3].description}</p>
                <a href="#" className="btn_hover2">
                  <i className="fa-solid fa-greater-than"></i>
                </a>
              </div>
            )}
            {services?.[4] && (
              <div className="service_card d-flex flex-column align-items-center text-center">
                <figure>
                  <img src={services?.[4].image} alt="service" />
                </figure>
                <h4>{services?.[4].title}</h4>
                <p>{services?.[4].description}</p>
                <a href="#" className="btn_hover2">
                  <i className="fa-solid fa-greater-than"></i>
                </a>
              </div>
            )}
            {services?.[5] && (
              <div className="service_card d-flex flex-column align-items-center text-center">
                <figure>
                  <img src={services?.[5].image} alt="service" />
                </figure>
                <h4>{services?.[5].title}</h4>
                <p>{services?.[5].description}</p>
                <a href="#" className="btn_hover2">
                  <i className="fa-solid fa-greater-than"></i>
                </a>
              </div>
            )}
          </div>
          <figure>
            <img
              src="assets/Images/bg/about_cercle1.png"
              alt="img"
              className="service-cercle1"
            />
          </figure>
          <figure>
            <img
              src="assets/Images/bg/about_cercle1.png"
              alt="img"
              className="service-cercle2"
            />
          </figure>
          <figure>
            <img
              src="assets/Images/bg/about_cercle1.png"
              alt="img"
              className="service-cercle3"
            />
          </figure>
          <br />
          <br />
        </div>
      </section>
      {/* <!-- ====== End of 1.7. Our Services section ====== --> */}

      {/* <!-- ====== 1.6. Why Choose Us section ====== --> */}
      <section className="choose">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-6 d-flex flex-column align-items-md-start align-items-sm-center align-items-center text-md-start text-sm-center text-center gap-3">
              <h5>Why choose us</h5>
              <h2>{global.whyUsTitle}</h2>
              <p className="pe-lg-5 pe-md-4 pe-sm-0 pe-0">
                {global.whyUsDescription}
              </p>
              {/* <!-- button --> */}
              <a href="#" className="btn_hover mt-4">
                Learn more
              </a>

              <figure>
                <img
                  src={global.whyUsImage}
                  className="mx-auto d-block w-100 mt-md-0 mt-sm-3 mt-3"
                  alt="image"
                />
              </figure>
              <figure>
                <img
                  src="assets/Images/bg/header_cercle1.png"
                  alt="img"
                  className="chose-cercle1"
                />
              </figure>
            </div>
            <div className="col-lg-6 col-md-6 d-flex align-items-center">
              <figure>
                <img
                  src="assets/Images/bg/header_cercle2.png"
                  alt="img"
                  className="chose-cercle2"
                />
              </figure>
              <div className="choose2 d-flex flex-column gap-md-5 gap-sm-5 gap-4 mt-md-0 mt-sm-4 mt-4">
                <div className="d-flex gap-4 flex-md-row flex-sm-column flex-column text-md-start text-sm-center text-center">
                  <figure>
                    <img src="assets/Images/icon/choose1.png" alt="image" />
                  </figure>
                  <div className="d-flex flex-column gap-3">
                    <h3>Network traffic analytics</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut laboren amet elit.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 flex-md-row flex-sm-column flex-column text-md-start text-sm-center text-center">
                  <figure>
                    <img src="assets/Images/icon/choose2.png" alt="image" />
                  </figure>
                  <div className="d-flex flex-column gap-3">
                    <h3>Enterprise-proven threat detection</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut laboren amet elit.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 flex-md-row flex-sm-column flex-column text-md-start text-sm-center text-center">
                  <figure>
                    <img src="assets/Images/icon/choose3.png" alt="image" />
                  </figure>
                  <div className="d-flex flex-column gap-3">
                    <h3>Cyber crime and fraud detection</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut laboren amet elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== End of 1.6. Why Choose Us section ====== --> */}

      {/* <!-- ======== 1.11. Testimonials section ======== --> */}
      <section className="serv-testimonial">
        <div className="container">
          <div className="testimonial text-center">
            <h5>Team</h5>
            <h2>You choose, we protect</h2>
            <p>{global.aboutTeamDescription}</p>
          </div>
          <div className="slider">
            {members.map((arr, i) => (
              <div
                key={i}
                className="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column"
              >
                {arr.slice(0, Math.ceil(members.length / 2)).map((m) => (
                  <div
                    key={m.id}
                    className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center"
                  >
                    <figure>
                      <img
                        src="assets/Images/slider/testimonial1.jpg"
                        alt="testimonial"
                      />
                    </figure>
                    <div>
                      <p>{m.description}</p>
                      <hr />
                      <h4>{m.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ======== End of 1.11. Testimonials section ======== --> */}

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

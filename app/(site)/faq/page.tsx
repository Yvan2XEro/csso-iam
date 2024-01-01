import { fetchBanners, fetchFaqs, fetchGlobals } from "@/app/lib/api";
import { Footer } from "@/components/organims/Footer";
import { MobileNavbar, Navbar } from "@/components/organims/Navbar";

export default async function Home() {
  const global = await fetchGlobals();
  const banners = await fetchBanners();
  const faqs = await fetchFaqs();

  return (
    <div className="site-wrapper">
      <div className="header_faq">
        {/* <!-- ======== 1.1. Header section ========  --> */}
        <header>
          <Navbar />
          {/* <!-- Sidebar --> */}
          <MobileNavbar />
        </header>
        {/* <!-- ======== End of 1.1. Header section ========  --> */}

        {/* <!-- ======== 5.1. hero section ========  --> */}
        <section className="banner_faq d-flex align-items-center gap-2 flex-column">
          <h2>FAQ</h2>
          <h5>Home / FAQ</h5>
        </section>
        {/* <!-- ======== End of 5.1. hero section ========  --> */}
      </div>

      {/* <!-- ======== 3.2. FAQ section ========  --> */}
      <section className="page-faq">
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

      {/* <!-- ====== 1.10. CTA section ====== --> */}
      <section
        className="experience"
        style={{ backgroundImage: `url(${banners.cta})` }}
      >
        <div className="container text-center d-flex flex-column gap-3">
          <h2>{global.ctaTitle}</h2>
          <p>{global.ctaDescription}</p>
          <div className="d-flex gap-md-3 gap-sm-3 gap-2 flex-md-row flex-sm-row flex-column justify-content-center align-items-center mt-3">
            <a
              href={global.docsLink + ""}
              target="_blank"
              className="btn_hover"
            >
              Learn more
            </a>
            <a href={global.docsLink + ""} target="_blank" className="get">
              Start free trial
            </a>
          </div>
        </div>
      </section>
      {/* <!-- ====== End of 1.10. CTA section ====== --> */}

      <Footer globals={global as any} />
    </div>
  );
}

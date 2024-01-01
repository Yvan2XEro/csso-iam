import { Footer } from "@/components/organims/Footer";
import { MobileNavbar, Navbar } from "@/components/organims/Navbar";
import Link from "next/link";
import {
  fetchBanners,
  fetchGlobals,
  fetchMembers,
  fetchReasons,
  fetchServices,
} from "../lib/api";

export default async function Home() {
  const global = await fetchGlobals();
  const banners = await fetchBanners();
  const services = await fetchServices();
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
  const reasons = await fetchReasons();

  return (
    <div className="site-wrapper">
      <div className="header_home">
        {/* <!-- ======== 1.1. Header section ========  --> */}
        <header>
          <Navbar />
          {/* <!-- Sidebar --> */}
          <MobileNavbar />
        </header>
        {/* <!-- ======== End of 1.1. Header section ========  --> */}

        {/* <!-- ====== 1.2. hero section ====== --> */}
        <section className="banner">
          <div className="container">
            <figure>
              <img
                src="assets/Images/bg/header_cercle1.png"
                alt="img"
                className="header-cercle1"
              />
            </figure>
            <figure>
              <img
                src="assets/Images/bg/header_cercle2.png"
                alt="img"
                className="header-cercle2"
              />
            </figure>
            <div className="row d-flex align-items-center gap-md-0 gap-sm-4 gap-4">
              <div className="col-lg-6 col-md-6 d-flex flex-column align-items-md-start align-items-sm-center align-items-center justify-content-center gap-md-4 gap-sm-3 gap-3">
                <h1>{global.heroTitle}</h1>
                <p>{global.heroDescription}</p>
                <Link href="/about-us" className="btn_hover mt-3">
                  Learn more
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 d-flex justify-content-end">
                <figure>
                  <img src={global.heroImage} alt="banner" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ====== End of 1.2. hero section ====== --> */}

        {/* <!-- ====== 1.3. feature card section ====== --> */}
        <section className="banner_card">
          <div className="container d-flex gap-lg-5 gap-md-4 gap-sm-5 gap-4 justify-content-between flex-md-row flex-sm-column flex-column align-items-center">
            {services.slice(0, 3).map((service) => (
              <div key={service.id}>
                <figure>
                  <img src={service.image} alt={service.title} />
                </figure>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <a href="About.html" className="btn_hover2">
                  <i className="fa-solid fa-greater-than"></i>
                </a>
              </div>
            ))}
          </div>
        </section>
        {/* <!-- ====== End of 1.3. feature card section ====== --> */}
      </div>

      {/* <!-- ====== 1.4. About Us section ====== --> */}
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h5>About us</h5>
              <h2>{global.aboutSectionTitle}</h2>
              <p>{global.aboutSectionDescription}</p>
              <div className="mt-md-5 mt-sm-4 mt-4 d-flex justify-content-md-start justify-content-sm-center justify-content-center gap-3">
                {/* <!-- about button --> */}
                <Link href="/about-us" className="btn_hover">
                  Learn more
                </Link>
                <a
                  target="_blank"
                  href={global.docsLink + ""}
                  className="btn_hover2"
                >
                  Get started
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center mt-md-0 mt-sm-5 mt-5">
              <figure>
                <img
                  src={global.aboutSectionImage}
                  alt="img"
                  className="ab-image"
                />
              </figure>
            </div>
            <figure>
              <img
                src="assets/Images/bg/about_cercle1.png"
                alt="img"
                className="about-cercle1"
              />
            </figure>
            <figure>
              <img
                src="assets/Images/bg/about_cercle1.png"
                alt="img"
                className="about-cercle2"
              />
            </figure>
          </div>
        </div>
      </section>
      {/* <!-- ====== End of 1.4. About Us section ====== --> */}

      {/* <!-- ====== 1.5. Our Clients section ====== --> */}
      <section className="client">
        <div className="container text-center">
          <h5>Our clients</h5>
          <h2>We help companies around the world</h2>
          <div className="d-flex justify-content-md-evenly justify-content-sm-center justify-content-center align-items-center flex-wrap gap-4">
            <figure>
              <img src="assets/Images/home/client1.svg" alt="img" />
            </figure>
            <figure>
              <img src="assets/Images/home/client4.svg" alt="img" />
            </figure>
            <figure>
              <img src="assets/Images/home/client3.svg" alt="img" />
            </figure>
            <figure>
              <img src="assets/Images/home/client2.svg" alt="img" />
            </figure>
            <figure>
              <img src="assets/Images/home/client5.svg" alt="img" />
            </figure>
          </div>
        </div>
      </section>
      {/* <!-- ====== End of 1.5. Our Clients section ====== --> */}

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
              <Link href="/about-us" className="btn_hover mt-4">
                Learn more
              </Link>

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
                {reasons.map((r) => (
                  <div
                    key={r.id}
                    className="d-flex gap-4 flex-md-row flex-sm-column flex-column text-md-start text-sm-center text-center"
                  >
                    <figure>
                      <img src={r.image} alt="image" />
                    </figure>
                    <div className="d-flex flex-column gap-3">
                      <h3>{r.title}</h3>
                      <p>{r.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== End of 1.6. Why Choose Us section ====== --> */}

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
          <Link
            href="/services"
            className="view_service btn_hover mt-lg-3 mt-md-3 mt-sm-3 mt-0"
          >
            View all services
          </Link>
        </div>
      </section>
      {/* <!-- ====== End of 1.7. Our Services section ====== --> */}

      {/* <!-- ====== 1.8. How We Work section ====== --> */}
      <section className="work">
        <div className="container">
          <div className="row position-relative">
            <figure>
              <img
                src="assets/Images/bg/about_cercle1.png"
                alt="img"
                className="work-cercle1"
              />
            </figure>
            <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
              <figure className="position-relative">
                <img
                  src="assets/Images/home/how_we_work.jpg"
                  alt="img"
                  className="how-we-work"
                />
                <a href="#">
                  <i className="fa-solid fa-play"></i>
                </a>
              </figure>
            </div>
            <div className="col-lg-6 col-md-6 text-md-start text-sm-center text-center mt-md-0 mt-sm-5 mt-5 pt-md-0 pt-sm-3 pt-3">
              <h5>How we work</h5>
              <h2>{global.howWeWorkTitle}</h2>
              <p>{global.howWeWorkDescription}</p>
              <div className="d-flex align-items-center flex-md-row flex-sm-column flex-column gap-md-4 gap-sm-3 gap-1 mt-4">
                <div>
                  <h2>01</h2>
                </div>
                <div>
                  <h3>Company analysis</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center flex-md-row flex-sm-column flex-column gap-md-4 gap-sm-3 gap-1 mt-4">
                <div>
                  <h2>02</h2>
                </div>
                <div>
                  <h3>Specifications listed</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center flex-md-row flex-sm-column flex-column gap-md-4 gap-sm-3 gap-1 mt-4">
                <div>
                  <h2>03</h2>
                </div>
                <div>
                  <h3>Set up security</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
            <figure>
              <img
                src="assets/Images/bg/about_cercle1.png"
                alt="img"
                className="work-cercle2"
              />
            </figure>
          </div>
        </div>
      </section>
      {/* <!-- ====== End of 1.8. How We Work section ====== --> */}

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

      {/* <!-- ====== 1.11. Testimonials section ====== --> */}
      <section>
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
      {/* <!-- ====== End of 1.11. Testimonials section ====== --> */}

      {/* <!-- ====== 1.12. Blogs section ====== --> */}
      <section className="blog">
        <div className="container d-flex flex-column align-items-center gap-md-5 gap-sm-4 gap-4">
          <div className="text-center">
            <h5>Blogs</h5>
            <h2>A better way to do digital.</h2>
          </div>
          <div className="d-flex gap-lg-5 gap-md-4 gap-sm-5 gap-4 flex-md-row flex-sm-column flex-column">
            <div className="card">
              <figure>
                <img src="assets/Images/home/blog1.jpg" alt="image" />
              </figure>
              <div className="d-flex gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-4 mb-4">
                <span className="d-flex gap-3">
                  <i className="fa-solid fa-user"></i>
                  <a href="#" className="p-0">
                    Admin
                  </a>
                </span>
                <span className="d-flex gap-3">
                  <i className="fa-solid fa-comment"></i>
                  <a href="#" className="p-0">
                    0
                  </a>
                </span>
              </div>
              <h4>Encode mobile spplication dource code with code</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod et aliqua.
              </p>
              <a href="#" className="p-0">
                Learn more
              </a>
            </div>
            <div className="card">
              <figure>
                <img src="assets/Images/home/blog2.jpg" alt="image" />
              </figure>
              <div className="d-flex gap-5 mt-4 mb-4">
                <span className="d-flex gap-3">
                  <i className="fa-solid fa-user"></i>
                  <a href="#" className="p-0">
                    Admin
                  </a>
                </span>
                <span className="d-flex gap-3">
                  <i className="fa-solid fa-comment"></i>
                  <a href="#" className="p-0">
                    0
                  </a>
                </span>
              </div>
              <h4>Encryption vulnerability using md5 and plain text</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod et aliqua.
              </p>
              <a href="#" className="p-0">
                Learn more
              </a>
            </div>
            <div className="card">
              <figure>
                <img src="assets/Images/home/blog3.jpg" alt="image" />
              </figure>
              <div className="d-flex gap-5 mt-4 mb-4">
                <span className="d-flex gap-3">
                  <i className="fa-solid fa-user"></i>
                  <a href="#" className="p-0">
                    Admin
                  </a>
                </span>
                <span className="d-flex gap-3">
                  <i className="fa-solid fa-comment"></i>
                  <a href="#" className="p-0">
                    0
                  </a>
                </span>
              </div>
              <h4>Cyber criminals publish stolen sepa data</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod et aliqua.
              </p>
              <a href="#" className="p-0">
                Learn more
              </a>
            </div>
          </div>
          <a href="Blog.html" className="btn_hover mt-1">
            View all news
          </a>
        </div>
      </section>
      {/* <!-- ====== End of 1.12. Blogs section ====== --> */}

      <Footer globals={global as any} />
    </div>
  );
}

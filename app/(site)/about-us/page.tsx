import { fetchBanners, fetchGlobals, fetchMembers } from "@/app/lib/api";
import { Footer } from "@/components/organims/Footer";
import { MobileNavbar, Navbar } from "@/components/organims/Navbar";
import Link from "next/link";
import React from "react";

export default async function page() {
  const global = await fetchGlobals();
  const banners = await fetchBanners();
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
        className="header_about"
        style={{ backgroundImage: `url(${banners.about})` }}
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
          <h2>News & media</h2>
          <h5>Home / news & media</h5>
        </section>
        {/* <!-- ======== End of 5.1. hero section ========  --> */}
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

      {/* <!-- ======== 1.5. Our Clients section ======== --> */}
      <section className="client">
        <div className="container text-center">
          <h5>Our clients</h5>
          <h2>We help companies around the world</h2>
          <div className="d-flex justify-content-md-evenly justify-content-sm-center justify-content-center align-items-center flex-wrap gap-4">
            <figure>
              <img src="assets/Images/about/client1.svg" alt="img" />
            </figure>
            <figure>
              <img src="assets/Images/about/client4.svg" alt="img" />
            </figure>
            <figure>
              <img src="assets/Images/about/client3.svg" alt="img" />
            </figure>
            <figure>
              <img src="assets/Images/about/client2.svg" alt="img" />
            </figure>
            <figure>
              <img src="assets/Images/about/client5.svg" alt="img" />
            </figure>
          </div>
        </div>
      </section>
      {/* <!-- ======== End of 1.5. Our Clients section ======== --> */}

      {/* <!-- ======== 2.2. Our Vision section ======== --> */}
      <section className="vision">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-7 col-md-6 d-flex justify-content-between gap-3 position-relative pe-0">
              <figure>
                <img src="assets/Images/about/vision1.jpg" alt="img" />
              </figure>
              <figure>
                <img src="assets/Images/about/vision2.jpg" alt="img" />
              </figure>
              <figure>
                <img
                  src="assets/Images/bg/about_cercle1.png"
                  alt="img"
                  className="vision-cercle"
                />
              </figure>
            </div>
            <div className="col-lg-5 col-md-6 text-md-start text-sm-center text-center mt-md-0 mt-sm-5 mt-4">
              <h5>Our vision</h5>
              <h2>{global.ourVisionTitle}</h2>

              <h3>Vision</h3>
              <p>{global.visionDescription} </p>
              <h3>Mission</h3>
              <p>{global.missionDescription}</p>
              <a href="#" className="btn_hover mt-4">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======== End of 2.2. Our Vision section ======== --> */}

      {/* <!-- ======== 2.3. Counter section ======== --> */}
      <section className="counter">
        <div className="container d-flex justify-content-between ps-lg-0 ps-md-5 ps-sm-5 ps-5 align-items-center flex-wrap gap-md-3 gap-sm-4 gap-4">
          <div className="ab_counter d-flex align-items-center">
            <figure>
              <img src="assets/Images/icon/about_counter.png" alt="img" />
            </figure>
            <div>
              <div className="d-flex justify-content-md-start justify-content-sm-center justify-content-center">
                <h2 className="count">99</h2>
                <h2>%</h2>
              </div>
              <h5>Secure service</h5>
            </div>
            <hr />
          </div>
          <div className="ab_counter d-flex align-items-center">
            <figure>
              <img src="assets/Images/icon/about_counter.png" alt="img" />
            </figure>
            <div>
              <div className="d-flex justify-content-md-start justify-content-sm-center justify-content-center">
                <h2 className="count">200</h2>
                <h2>+</h2>
              </div>
              <h5>Clients protection</h5>
            </div>
            <hr />
          </div>
          <div className="ab_counter d-flex align-items-center">
            <figure>
              <img src="assets/Images/icon/about_counter.png" alt="img" />
            </figure>
            <div>
              <div className="d-flex justify-content-md-start justify-content-sm-center justify-content-center">
                <h2 className="count">100</h2>
                <h2>+</h2>
              </div>
              <h5>Experts team</h5>
            </div>
            <hr />
          </div>
          <div className="ab_counter d-flex align-items-center">
            <figure>
              <img src="assets/Images/icon/about_counter.png" alt="img" />
            </figure>
            <div>
              <div className="d-flex justify-content-md-start justify-content-sm-center justify-content-center">
                <h2 className="count">50</h2>
                <h2>+</h2>
              </div>
              <h5>Services provided</h5>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======== End of 2.3. Counter section ======== --> */}

      {/* <!-- ======== 2.4. About section ======== --> */}
      <section className="ab-choose">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-6 d-flex flex-column align-items-md-start align-items-sm-center align-items-center text-md-start text-sm-center text-center gap-3">
              <h5>Why choose us</h5>
              <h2>{global.whyUsTitle}</h2>
              <p className="pe-lg-5 pe-md-4 pe-sm-0 pe-0">
                {global.whyUsDescription}
              </p>
              <a href="#" className="btn_hover mt-4">
                Learn more
              </a>
              <figure>
                <img
                  src={global.whyUsImage}
                  className="mx-auto d-block w-100 mt-md-0 mt-sm-3 mt-3"
                  alt={global.whyUsTitle}
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
      {/* <!-- ======== End of 2.4. About section ======== --> */}

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

      <Footer globals={global as any} />
    </div>
  );
}

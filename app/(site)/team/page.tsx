import { fetchBanners, fetchGlobals } from "@/app/lib/api";
import { Footer } from "@/components/organims/Footer";
import { MobileNavbar, Navbar } from "@/components/organims/Navbar";

export default async function Home() {
  const global = await fetchGlobals();
  const banners = await fetchBanners();
  return (
    <div className="site-wrapper">
      <div
        className="header_blog"
        style={{ backgroundImage: `url(${banners.team})` }}
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
      {/* <!-- ====== 1.11. Testimonials section ====== --> */}
      <section>
        <div className="container">
          <div className="testimonial text-center">
            <h5>Team</h5>
            <h2>You choose, we protect</h2>
            <p>{global.aboutTeamDescription}</p>
          </div>
          <div className="slider">
            <div className="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column">
              <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                <figure>
                  <img
                    src="assets/Images/slider/testimonial1.jpg"
                    alt="testimonial"
                  />
                </figure>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <hr />
                  <h4>Jacob scott</h4>
                </div>
              </div>
              <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                <figure>
                  <img
                    src="assets/Images/slider/testimonial2.jpg"
                    alt="testimonial"
                  />
                </figure>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <hr />
                  <h4>Phillip boyd</h4>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column">
              <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                <figure>
                  <img
                    src="assets/Images/slider/testimonial3.jpg"
                    alt="testimonial"
                  />
                </figure>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <hr />
                  <h4>Jacob scott</h4>
                </div>
              </div>
              <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                <figure>
                  <img
                    src="assets/Images/slider/testimonial4.jpg"
                    alt="testimonial"
                  />
                </figure>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <hr />
                  <h4>Phillip boyd</h4>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column">
              <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                <figure>
                  <img
                    src="assets/Images/slider/testimonial5.jpg"
                    alt="testimonial"
                  />
                </figure>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <hr />
                  <h4>Jacob scott</h4>
                </div>
              </div>
              <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                <figure>
                  <img
                    src="assets/Images/slider/testimonial6.jpg"
                    alt="testimonial"
                  />
                </figure>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <hr />
                  <h4>Phillip boyd</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== End of 1.11. Testimonials section ====== --> */}

      <Footer globals={global as any} />
    </div>
  );
}

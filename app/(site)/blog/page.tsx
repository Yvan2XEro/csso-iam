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
        style={{ backgroundImage: `url(${banners.blog})` }}
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

      {/* <!-- ======== 1.12. Blogs section ======== --> */}
      <section className="blog page_blog p-0">
        <div className="container d-flex flex-column align-items-center gap-md-5 gap-sm-4 gap-4">
          <div className="text-center">
            <h5>Blogs</h5>
            <h2>A better way to do digital.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="d-flex gap-lg-5 gap-md-4 gap-sm-5 gap-4 flex-md-row flex-sm-column flex-column">
            <div className="card">
              <figure>
                <img src="assets/Images/blog/blog1.jpg" alt="image" />
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
                <img src="assets/Images/blog/blog2.jpg" alt="image" />
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
                <img src="assets/Images/blog/blog3.jpg" alt="image" />
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
          <div className="d-flex gap-lg-5 gap-md-4 gap-sm-5 gap-4 flex-md-row flex-sm-column flex-column">
            <div className="card">
              <figure>
                <img src="assets/Images/blog/blog4.jpg" alt="image" />
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
              <h4>Cyber Criminals Publish Stolen Sepa Data</h4>
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
                <img src="assets/Images/blog/blog5.jpg" alt="image" />
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
              <h4>Encryption Vulnerability Using MD5 And Plain Text</h4>
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
                <img src="assets/Images/blog/blog6.jpg" alt="image" />
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
              <h4>Encode Mobile Application Source Code With XCode</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod et aliqua.
              </p>
              <a href="#" className="p-0">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======== End of 1.12. Blogs section ======== --> */}
      <Footer globals={global as any} />
    </div>
  );
}

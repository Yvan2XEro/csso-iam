import React from "react";

export default function NavbarSide() {
  return (
    <aside id="mySidepanel" className="sidepanel">
      <div className="sidebar">
        <a className="p-0" href="index.html">
          {" "}
          <img src="assets/Images/logo.png" alt="logo" />{" "}
        </a>
        <button className="closebtn">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div>
        {/* <!-- side menus --> */}
        <ul>
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="About.html">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Service.html">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Contact.html">
              Contact
            </a>
          </li>
          <li className="pages">
            <a href="#" className="active">
              More
            </a>
          </li>
          <li className="collapse_btn nav-item">
            <a
              className="nav-link plus_collapse active"
              data-bs-toggle="collapse"
              href="#pages"
              role="button"
              aria-expanded="false"
              aria-controls="pages"
            >
              <i className="fa-solid fa-plus"></i>
            </a>
            <div className="collapse" id="pages">
              <ul>
                <li className="nav-item">
                  <a className="nav-link" href="faq.html">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Testimonial.html">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Pricing.html">
                    Pricing plan
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="Blog.html">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Coming_soon.html">
                    Coming soon
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="404.html">
                    404
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

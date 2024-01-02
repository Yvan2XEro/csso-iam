import { Globals } from "@/lib/schema";
import Link from "next/link";
import React from "react";

export default function Footer({ globals }: { globals: Globals }) {
  return (
    <>
      {/* <!-- ======== 1.13. Footer section ======== --> */}
      <footer>
        <figure>
          <img
            src="assets/Images/bg/footer_bg.png"
            alt="img"
            className="footer-cercle2"
          />
        </figure>
        <div className="container position-relative">
          <div className="text-center d-flex flex-column gap-2">
            <h5>Get in touch</h5>
            <h2>Subscribe our newsletter</h2>
            <p className="footer-para">{globals.getInTouchText as any}</p>
            <form
              className="d-flex justify-content-center gap-4 mt-4"
              id="footer-form"
            >
              <div id="footer-message"> </div>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">
                <i className="fa-regular fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <div className="row text-md-start text-sm-center text-center">
            <div className="col-lg-5 col-md-5">
              <a href="/" className="p-0">
                <figure>
                  <img src="assets/Images/logo.png" alt="logo" />
                </figure>
              </a>
              <p className="pb-3 pe-md-5 pe-sm-0 pe-0">
                {globals.description as any}
              </p>
              {/* <!-- social icons --> */}
              <span className="d-flex gap-3 flex-wrap justify-content-md-start justify-content-sm-center justify-content-center">
                <a href={globals.facebook as any}>
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href={globals.instagram as any}>
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href={globals.x as any}>
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href={globals.linkedin as any}>
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </span>
            </div>
            <div className="col-lg-3 col-md-3 position-relative mt-md-0 mt-sm-4 mt-4">
              <h4>Useful links</h4>
              <div className="d-flex gap-md-5 gap-sm-5 gap-5 mt-4 justify-content-md-start justify-content-sm-center justify-content-center">
                <div className="d-flex flex-column gap-4">
                  <a href="/" className="p-0">
                    Home
                  </a>
                  <a href="/about-us" className="p-0">
                    About
                  </a>
                  <a href="/services" className="p-0">
                    Services
                  </a>
                </div>
                <div className="d-flex flex-column gap-4">
                  <a href="/contact-us" className="p-0">
                    Contact
                  </a>

                  <a href="/blog" className="p-0">
                    Blog
                  </a>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-lg-4 col-md-4 ps-4 mt-md-0 mt-sm-4 mt-4 d-flex flex-column align-items-md-start align-items-sm-center align-items-start">
              <h4>Our Office</h4>
              <div className="d-flex align-items-center gap-4 mt-4">
                <i className="fa-sharp fa-solid fa-house"></i>
                <p className="p-0">{globals.adress as any}</p>
              </div>
              <div className="d-flex align-items-center gap-4 mt-4">
                <i className="fa-sharp fa-solid fa-phone"></i>
                <p className="p-0">{globals.phone as any}</p>
              </div>
              <div className="d-flex align-items-center gap-4 mt-4">
                <i className="fa-solid fa-envelope"></i>
                <p className="p-0">{globals.email as any}</p>
              </div>
            </div>
          </div>
          <hr className="mt-5" />
          {/* <!-- copyright text --> */}
          <div className="d-flex justify-content-md-between justify-content-sm-center justify-content-center flex-wrap  text-center mb-3 gap-3">
            <h6>
              Copyright © 2023 cyber safe evonicmedia. all rights reserved.
            </h6>
            <h6>Terms and conditions | privacy policy</h6>
          </div>
          <figure>
            <img
              src="assets/Images/bg/about_cercle1.png"
              alt="img"
              className="footer-cercle1"
            />
          </figure>
        </div>
      </footer>
      {/* <!-- ======== End of 1.13. Footer section ======== --> */}
    </>
  );
}

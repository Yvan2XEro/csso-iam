import { fetchGlobals } from "@/app/lib/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Navbar() {
  const global = await fetchGlobals();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* <!-- site logo --> */}
        <a href="/" className="navbar-brand p-0">
          <Image width={197} height={54} src={global.icon + ""} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button">
          <span className="fa-solid fa-bars"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end align-items-center"
          id="navbarNav"
        >
          {/* <!-- menus --> */}
          <ul className="navbar-nav d-flex gap-5 align-items-center">
            <li className="nav-item">
              <a href="/" className="nav-link p-0">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about-us" className="nav-link p-0">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-link p-0">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact-us" className="nav-link p-0">
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link mx-2 dropdown-toggle p-0 active"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a href="/faq" className="dropdown-item">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/team" className="dropdown-item">
                    Team
                  </a>
                </li>
                <li>
                  <a href="/blog" className="dropdown-item active">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/coming-soon" className="dropdown-item">
                    Coming soon
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              {/* <!-- header buttons --> */}
              <a
                target="_blank"
                href={global.docsLink as string}
                className="nav-link btn_hover"
              >
                Get started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import { fetchGlobals } from "@/app/lib/api";
import Link from "next/link";
import React from "react";

export default async function Navbar() {
  const global = await fetchGlobals();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* <!-- site logo --> */}
        <Link href="/" className="navbar-brand p-0">
          <img src="assets/Images/logo.png" alt="logo" />
        </Link>
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
              <Link href="/" className="nav-link p-0">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about-us" className="nav-link p-0">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link p-0">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact-us" className="nav-link p-0">
                Contact
              </Link>
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
                  <Link href="/faq" className="dropdown-item">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="dropdown-item">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="dropdown-item active">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="dropdown-item">
                    Coming soon
                  </Link>
                </li>
                <li>
                  <Link href="/not-found" className="dropdown-item">
                    404
                  </Link>
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

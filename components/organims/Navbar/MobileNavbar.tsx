import { fetchGlobals } from "@/app/lib/api";
import Link from "next/link";
import React from "react";

export default async function NavbarSide() {
  const global = await fetchGlobals();

  return (
    <aside id="mySidepanel" className="sidepanel">
      <div className="sidebar">
        <a className="p-0" href="index.html">
          {" "}
          <img src={global.icon + ""} alt="logo" />
        </a>
        <button className="closebtn">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div>
        {/* <!-- side menus --> */}
        <ul>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about-us">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact-us">
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
                  <a href="/faq" className="nav-link">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/team" className="nav-link">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/blog" className="nav-link active">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/coming-soon" className="nav-link">
                    Coming soon
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

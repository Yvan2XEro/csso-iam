import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="coming_soon d-flex align-items-center">
      <div className="container d-flex flex-column align-items-center gap-md-4 gap-sm-4 gap-4">
        <h1>Coming Soon...</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="coming_soon_count d-flex flex-wrap justify-content-center gap-md-4 gap-sm-4 gap-3 mt-2 mb-2 text-center">
          <div>
            <h1 id="days">0</h1>
            <h6>Days</h6>
          </div>
          <div>
            <h1 id="hours">0</h1>
            <h6>Hours</h6>
          </div>
          <div>
            <h1 id="minutes">0</h1>
            <h6>Minutes</h6>
          </div>
          <div>
            <h1 id="seconds">0</h1>
            <h6>Seconds</h6>
          </div>
        </div>
        <Link href="/" className="btn_hover">
          Go back to home
        </Link>
      </div>
    </section>
  );
}

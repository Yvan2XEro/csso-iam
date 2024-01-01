import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="coming_soon d-flex align-items-center">
      <div className="container d-flex flex-column align-items-center gap-md-4 gap-sm-4 gap-4">
        <figure>
          <img src="assets/Images/icon/404.png" alt="404" />
        </figure>
        <h1>404 Error!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <Link href="/" className="btn_hover">
          Go back to home
        </Link>
      </div>
    </section>
  );
}

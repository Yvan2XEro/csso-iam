"use client";

import React, { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const service_id = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
const template_id = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
const pubKey = process.env.NEXT_PUBLIC_EMAIL_EMAIL_PUBLIC_KEY;

export default function ContactForm() {
  const ref = React.useRef<HTMLFormElement>(null);
  const [submitting, setSub] = useState(false);
  return (
    <form
      id="contact-form"
      ref={ref}
      onSubmit={(e) => {
        e.preventDefault();
        if (!service_id || !template_id || !pubKey) return;

        setSub(true);
        emailjs
          .sendForm(service_id, template_id, e.target as any, pubKey)
          .then((result) => {
            ref.current?.reset();
            setSub(false);
            toast.success("Message sent");
          })
          .catch((error) => {
            setSub(false);

            toast.error("Failed retry later");
          });
      }}
    >
      <div id="contact-message"> </div>
      <div className="d-flex gap-lg-4 gap-md-3 gap-sm-4 gap-3">
        <input type="text" name="name" required placeholder="Your name" />
        <input type="email" name="email" placeholder="Email address" required />
      </div>
      <div className="d-flex gap-lg-4 gap-md-3 gap-sm-4 gap-3">
        <input type="text" placeholder="Phone number" name="phone" required />
        <input type="text" placeholder="Subject" name="subject" required />
      </div>
      <div>
        <textarea
          cols={30}
          rows={8}
          name="message"
          required
          placeholder="Write here message"
        ></textarea>
      </div>
      <button disabled={submitting} type="submit">
        Submit
      </button>
    </form>
  );
}

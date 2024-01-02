import { fetchServices } from "@/app/lib/api";
import React from "react";
import FaqCard from "./FaqCard";
import NewFaqButton from "./NewFaqButton";

export default async function page() {
  const faqs = await fetchServices();
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2>Services </h2>
        <NewFaqButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {faqs?.map((faq) => (
          <FaqCard key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
}

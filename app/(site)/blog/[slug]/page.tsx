import { fetchGlobals } from "@/app/lib/api";
import { Footer } from "@/components/organims/Footer";
import { MobileNavbar, Navbar } from "@/components/organims/Navbar";
import React from "react";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "./Mdx";

type PageProps = {
  params: {
    slug: string;
  };
};

function getPostBySlug(slug: string) {
  const p = allPosts.find((p) => p.slugAsParams === slug);
  if (!p) {
    notFound();
  }
  return p;
}

export default async function page({ params }: PageProps) {
  const global = await fetchGlobals();

  const p = getPostBySlug(params.slug);

  return (
    <div className="site-wrapper">
      <div
        className="header_blog"
        style={{ backgroundImage: `url(${p.largeImage || p.image})` }}
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
          <h5>Home / Blog / {p.title}</h5>
        </section>
        {/* <!-- ======== End of 5.1. hero section ========  --> */}
      </div>
      <section className="blog page_blog p-0">
        <div className="container">
          <Mdx code={p.body.code} />
        </div>
      </section>
      <Footer globals={global} />
    </div>
  );
}

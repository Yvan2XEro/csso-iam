import { fetchBanners, fetchGlobals } from "@/app/lib/api";
import { Footer } from "@/components/organims/Footer";
import { MobileNavbar, Navbar } from "@/components/organims/Navbar";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

const posts = (() => {
  const matrix = [];
  let rowIndex = 0;
  for (let i = 0; i < allPosts.length; i += 3) {
    const row = allPosts.slice(i, i + 3);
    matrix[rowIndex] = row;
    rowIndex++;
  }
  return matrix;
})();

export default async function Home() {
  const global = await fetchGlobals();
  const banners = await fetchBanners();

  return (
    <div className="site-wrapper">
      <div
        className="header_blog"
        style={{ backgroundImage: `url(${banners.blog})` }}
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
          <h5>Home / news & media</h5>
        </section>
        {/* <!-- ======== End of 5.1. hero section ========  --> */}
      </div>

      {/* <!-- ======== 1.12. Blogs section ======== --> */}
      <section className="blog page_blog p-0">
        <div className="container d-flex flex-column align-items-center gap-md-5 gap-sm-4 gap-4">
          <div className="text-center">
            <h5>Blogs</h5>
            <h2>A better way to do digital.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {posts.map((arr, i) => (
            <div
              key={i}
              className="d-flex gap-lg-5 gap-md-4 gap-sm-5 gap-4 flex-md-row flex-sm-column flex-column"
            >
              {arr.map((p, j) => (
                <div key={j} className="card">
                  <figure>
                    <img src="assets/Images/blog/blog1.jpg" alt="image" />
                  </figure>
                  <div className="d-flex gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-4 mb-4">
                    <span className="d-flex gap-3">
                      <i className="fa-solid fa-user"></i>
                      <a href="#" className="p-0">
                        {p.author}
                      </a>
                    </span>
                  </div>
                  <h4>{p.title}</h4>
                  <p>{p.description}</p>
                  <a href={`/blog/${p.slugAsParams}`} className="p-0">
                    Learn more
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      {/* <!-- ======== End of 1.12. Blogs section ======== --> */}
      <Footer globals={global} />
    </div>
  );
}

import { fetchBanners, fetchGlobals, fetchMembers } from "@/app/lib/api";
import { Footer } from "@/components/organims/Footer";
import { MobileNavbar, Navbar } from "@/components/organims/Navbar";

export default async function Home() {
  const global = await fetchGlobals();
  const banners = await fetchBanners();
  const members = await (async () => {
    const data = await fetchMembers();
    const matrix = [];
    let rowIndex = 0;
    for (let i = 0; i < data.length; i += 2) {
      const row = data.slice(i, i + 2);
      matrix[rowIndex] = row;
      rowIndex++;
    }
    return matrix;
  })();
  return (
    <div className="site-wrapper">
      <div
        className="header_blog"
        style={{ backgroundImage: `url(${banners.team})` }}
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
      {/* <!-- ====== 1.11. Testimonials section ====== --> */}
      <section>
        <div className="container">
          <div className="testimonial text-center">
            <h5>Team</h5>
            <h2>You choose, we protect</h2>
            <p>{global.aboutTeamDescription}</p>
          </div>
          <div className="slider">
            {members.map((arr, i) => (
              <div
                key={i}
                className="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column"
              >
                {arr.slice(0, Math.ceil(members.length / 2)).map((m) => (
                  <div
                    key={m.id}
                    className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center"
                  >
                    <figure>
                      <img
                        src="assets/Images/slider/testimonial1.jpg"
                        alt="testimonial"
                      />
                    </figure>
                    <div>
                      <p>{m.description}</p>
                      <hr />
                      <h4>{m.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ====== End of 1.11. Testimonials section ====== --> */}

      <Footer globals={global as any} />
    </div>
  );
}

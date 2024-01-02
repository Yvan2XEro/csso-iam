import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CyberSafe</title>
        <base href="/" />
        <link
          rel="shortcut icon"
          href="assets/Images/fave_icon.png"
          type="image/x-icon"
        />
        {/* <!-- Framework Css --> */}
        <link
          rel="stylesheet"
          href="assets/css/bootstrap-lib/bootstrap.min.css"
        />
        {/* <!-- Font Awesome / Icon Fonts --> */}
        <link
          rel="stylesheet"
          href="assets/font-awesome-lib/icon/font-awesome.min.css"
        />
        {/* <!-- Style Theme --> */}
        <link rel="stylesheet" href="assets/css/style.css" />
        {/* <!-- Responsive Theme --> */}
        <link rel="stylesheet" href="assets/css/responsive.css" />
        {/* <!-- slider --> */}
        <link rel="stylesheet" href="assets/css/slick.min.css"></link>
      </head>
      <body className={inter.className}>
        {children}
        <button id="backToTopBtn" className="btn_hover2">
          <i className="fa-solid fa-arrow-turn-up"></i>
        </button>

        {/* <!-- j Query --> */}
        <script src="assets/js/jquery.js" async></script>
        {/* <!-- counter --> */}
        <script src="assets/js/waypoints.min.js" async></script>
        {/* <!-- Framework javascript --> */}
        <script src="assets/js/javascript-lib/bootstrap.min.js" async></script>
        {/* <!-- slider --> */}
        <script src="assets/js/slick.min.js" async></script>
        {/* <!-- style javascript --> */}
        <script src="assets/js/custom.js" async></script>
      </body>
    </html>
  );
}

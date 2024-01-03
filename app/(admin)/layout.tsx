import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const revalidate = 1;

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <>{children}</>
        <ToastContainer />
      </body>
    </html>
  );
}

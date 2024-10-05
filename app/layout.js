import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FanFund | Seamless Support from Fans to Creators",
  description: "A crowdfunding platform for creaters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <div className="relative z-10 min-h-screen w-full bg-black  ">
            <div className=" z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
              <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
              <Navbar />
              <div className="text-white min-h-screen relative">{children}</div>
              <Footer />
            </div>
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}


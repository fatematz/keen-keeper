import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Provider from "@/context/Provider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "Stay connected with the people who matter most.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className=" min-h-full flex flex-col">
        <Provider>
        <Navbar />
        {/* <Banner /> */}
        <main className="">
        {children}
        </main>
          <Footer />
           <ToastContainer position="top-center" autoClose={3000} />
          </Provider>
      </body>
    </html>
  );
}

"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { useRef, useEffect } from "react";
import { Power2, gsap } from "gsap";
const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "GSAP",
  description: "GSAP",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    cursor();
  }, []);

  const cursor = () => {
    const follower = document.querySelector(".follower");
    document.onmousemove = function (e) {
      gsap.to(follower, 0.6, {
        left: e.clientX,
        top: e.clientY,
        ease: Power2.easeOut,
      });
      // gsap.to(follower, 0.6, { left: e.clientX, top: e.clientY, ease: Elastic.easeOut});
      let id = document.getElementById("follower");
      if (e.target.id == "link") {
        id.style.background = "#B4D4FF";
        id.style.zIndex = "-2";
        gsap.to(follower, 0.3, { width: 50, height: 50 });
      } else {
        id.style.background = "red";
        id.style.zIndex = "-1";
        gsap.to(follower, 0.3, { width: 10, height: 10 });
      }
    };
  };
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <title>GSAP</title>
      </head>
      <body className={inter.variable}>
        <React.Fragment>
          <div className="follower" id="follower"></div>
          <Navbar />
          {children}
        </React.Fragment>
      </body>
    </html>
  );
}

"use client";
import React, { useRef } from "react";
import "./navbar.scss";
import { usePathname, useRouter } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const ArrLeft = [
    {
      name: "Home",
      link: "/pages/Home",
    },
    {
      name: "Collections",
      link: "/pages/Collections",
    },
  ];
  const ArrRight = [
    {
      name: "Curators",
      link: "/pages/Curators",
    },
    {
      name: "Journal",
      link: "/pages/Journal",
    },
  ];
  let id = document.getElementById("parent");

  return (
    <nav className="nav_wrapper">
      <div className="nav_subwrapper">
        {/* <Image src={logo} alt="logo" className="logo" placeholder="blur" /> */}
        <ul className="nav_content">
          {ArrLeft.map((item) => (
            <li
              key={item.link}
              className={pathname === item.link ? "active_link" : "link"}
              href={item.link}
              style={{ textDecoration: "none" }}
              onClick={() => router.push(item.link)}
            >
              <div>{item.name}</div>
            </li>
          ))}
        </ul>
        <img
          className="nav_logo"
          onClick={() => router.push("/")}
          src="https://spaincollection.com/wp-content/themes/spaincollection/img/logo.svg"
        />

        <ul className="nav_content">
          {ArrRight.map((item) => (
            <li
              key={item.link}
              className={pathname === item.link ? "active_link" : "link"}
              href={item.link}
              style={{ textDecoration: "none" }}
              onClick={() => router.push(item.link)}
            >
              <div>{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const Navbar = ({ router }) => {
  const path = router.pathname;
  const navs = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Profile",
      href: "/about",
    },
    {
      text: "Portofolio",
      href: "/portofolio",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/">
          <a className="logo">Rangdra</a>
        </Link>
        <ul className="nav-links">
          {navs.map((nav) => (
            <li>
              <Link href={nav.href}>
                <a
                  className={`nav-item ${nav.href === path ? " active" : null}`}
                >
                  {nav.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);

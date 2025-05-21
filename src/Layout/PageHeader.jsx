import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const PageHeader = () => {
  function toggleNav() {
    if (window.innerWidth <= 768) {
      const main = document.getElementById("navbar-content");
      main.classList.toggle("active");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const PageHeader_ = document.getElementById("pageheader");
      if (window.scrollY > 280) {
        PageHeader_.style.animation = "slideIn 0.5s";
        PageHeader_.style.position = "fixed";
        PageHeader_.style.background = "#fff";
        PageHeader_.style.marginTop = "0";
        PageHeader_.classList.add("scrolled");
      } else if (window.scrollY < 0.01) {
        PageHeader_.style.position = "";
        PageHeader_.style.background = "";
        PageHeader_.style.marginTop = "";
        if (PageHeader_.classList.contains("scrolled")) {
          PageHeader_.classList.remove("scrolled");
        }
      }
    });
  }, []);

  return (
    <nav className="header" id="pageheader">
      <div className="container">
        <Link className="logo" to="/">
          Ecoverde
        </Link>
        <button className="navbar-toggler" onClick={() => toggleNav()}>
          MENU
        </button>
        <AnimatePresence>
          <motion.div className="navigation" id="navbar-content">
            <ul className="navbar-nav">
              <NavLink className="nav-item" to="/">
                <span className="nav-link">Home</span>
              </NavLink>
              <NavLink className="nav-item" to="/about">
                <span className="nav-link">About</span>
              </NavLink>
              <NavLink className="nav-item" to="/services">
                <span className="nav-link">Services</span>
              </NavLink>
              <NavLink className="nav-item" to="/properties">
                <span className="nav-link">Properties</span>
              </NavLink>
              <NavLink className="nav-item" to="/contact">
                <span className="nav-link">Contact</span>
              </NavLink>
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default PageHeader;

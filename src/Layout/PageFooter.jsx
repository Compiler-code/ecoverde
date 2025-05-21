// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  FaEnvelope,
  FaChevronRight,
  FaMap,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PageFooter = () => {
  return (
    <footer className="footer">
      <div className="flex">
        <div className="column a">
          <h4>Ecoverde</h4>
          <p>
            Far far away, behind the word mountains, far from the countries.
          </p>
        </div>
        <div className="column b">
          <h4>Community</h4>
          <ul>
            <Link to="/search">
              <li>
                <FaChevronRight />
                <p>Search Properties</p>
              </li>
            </Link>
            <Link to="/agents">
              <li>
                <FaChevronRight />
                <p>Our Agents</p>
              </li>
            </Link>
            <Link to="/reviews">
              <li>
                <FaChevronRight />
                <p>Reviews</p>
              </li>
            </Link>
            <Link to="/FAQs">
              <li>
                <FaChevronRight />
                <p>FAQs</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="column c">
          <h4>About Us</h4>
          <ul>
            <Link to="/about">
              <li>
                <FaChevronRight />
                <p>Our Story</p>
              </li>
            </Link>
            <Link to="/careers">
              <li>
                <FaChevronRight />
                <p>Careers</p>
              </li>
            </Link>
            <Link to="/team">
              <li>
                <FaChevronRight />
                <p>Meat the Team</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="column d">
          <h4>Company</h4>
          <ul>
            <Link to="/about">
              <li>
                <FaChevronRight />
                <p>About Us</p>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <FaChevronRight />
                <p>Contact</p>
              </li>
            </Link>
            <Link to="/commerce">
              <li>
                <FaChevronRight />
                <p>Investments</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="column e">
          <h4>Have a Question?</h4>
          <ul>
            <Link to="">
              <li>
                <FaMap />
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </li>
            </Link>
            <Link to="">
              <li>
                <FaPhoneAlt />
                <p>Contact</p>
              </li>
            </Link>
            <Link to="">
              <li>
                <FaEnvelope />
                <p>Investments</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="ender-text">
        <div className="social">
          <FaXTwitter />
          <FaFacebookF />
          <FaInstagram />
        </div>
        <div className="line a"></div>
        <div className="text">
          2025 &copy; All rights Reserved
          <div className="line" />
          Ecoverde Ltd.
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;

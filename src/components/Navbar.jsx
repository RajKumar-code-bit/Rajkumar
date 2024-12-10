import React from "react";
import logo from "../assets/rajkumarLogo.webp";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={30} alt="logo" />
        </a>
      </div>
      <div className="flex flex-shrink-0 items-center justify-between">
        <ul
          className=" flex
         justify-center items-center
          gap-16 max-lg:hidden"
        >
          {navLinks.map((item) => (
            <motion.li
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              key={item.label}
            >
              <a href={item.href}> {item.label}</a>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="m-8 flex  items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/rajkumar-d-74b09a192"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/RajKumar-code-bit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/?lang=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

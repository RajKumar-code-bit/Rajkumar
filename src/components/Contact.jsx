import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { navLinks } from "../constants";

const Contact = () => {
  return (
    <div id="contact-us" className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="mailto:rajkumardevadoss97@gmail.com" className="border-b">
          {CONTACT.email}
        </a>
      </div>
      <div className="flex justify-center j mt-10">
        <ul className="flex justify-between gap-5">
          {navLinks.map((item) => (
            <motion.li
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              key={item.label}
            >
              <a href={item.href}>{item.label}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;

// src/Contact.js
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <header className="text-center mb-8">
          <motion.h1
            className="text-4xl font-bold text-blue-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 mt-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We would love to hear from you!
          </motion.p>
        </header>

        <section className="mb-8">
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in Touch
          </motion.h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                rows="5"
                required
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </section>

        <section className="mt-8">
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Our Address
          </motion.h2>
          <div className="bg-blue-100 p-4 rounded-md shadow-md">
            <p className="text-lg text-gray-700 mb-1">Ganesh Museum</p>
            <p className="text-lg text-gray-700 mb-1">123 Cultural Lane</p>
            <p className="text-lg text-gray-700 mb-1">
              Heritage City, State, ZIP Code
            </p>
            <p className="text-lg text-gray-700">Phone: (123) 456-7890</p>
            <p className="text-lg text-gray-700">
              Email: contact@ganeshmuseum.org
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

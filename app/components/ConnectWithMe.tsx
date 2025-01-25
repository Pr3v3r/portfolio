"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const ConnectWithMe = () => {
  return (
    <section id="connect" className="py-20 bg-background text-foreground section-border">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Connect With Me
        </motion.h2>
        <div className="flex justify-center space-x-12">
          <motion.a
            href="https://github.com/Pr3v3r"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="text-8xl text-[#FF00FF] hover:text-accent transition-colors duration-300" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/pravar-singh-1b3b4b320/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="text-8xl text-[#FF00FF] hover:text-accent transition-colors duration-300" />
          </motion.a>
          <motion.a
            href="mailto:11pravar.singh11@gmail.com"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope className="text-8xl text-[#FF00FF] hover:text-accent transition-colors duration-300" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default ConnectWithMe


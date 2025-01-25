"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-muted text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>&copy; 2025 Pravar Singh. All rights reserved.</p>
          </motion.div>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="https://github.com/Pr3v3r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF00FF] hover:text-accent transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/pravar-singh-1b3b4b320/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF00FF] hover:text-accent transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


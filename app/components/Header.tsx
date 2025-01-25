"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ["Home", "About", "Skills", "Projects", "Connect"]

  return (
    <header className="fixed w-full bg-background shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         NotYourAvgPortfolio :)
        </motion.h1>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground hover:text-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div className="md:hidden bg-background" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 px-4 text-foreground hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  )
}

export default Header


"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Widgets from "./Widgets"
import Image from "next/image"

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden section-border"
    >
      <Widgets />
      <div className="absolute inset-0 z-0">
        <Image src="/791328.png" alt="Hero Background" layout="fill" objectFit="cover" quality={100} />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">Pravar Singh</h1>
        <h2 className="text-3xl mb-6 text-secondary">AI ML Freshman</h2>
        <Link href="#projects">
          <motion.button
            className="bg-primary hover:bg-[#33FF33] text-background font-bold py-2 px-4 rounded shadow-md transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero


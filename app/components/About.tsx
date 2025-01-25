"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-20 bg-background text-foreground section-border">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/sigma.png"
              alt="Pravar Singh"
              width={300}
              height={300}
              className="rounded-full mx-auto shadow-lg border-2 border-accent"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-4">
              Hi, I'm Pravar Singh—a passionate first-year AI/ML student at MIT Manipal. With a keen interest in
              technology and innovation, I'm currently exploring the world of web and app development, creating dynamic
              solutions that bridge creativity and functionality.
            </p>
            <p className="text-lg mb-4">
              Beyond academics, I'm driven by a relentless pursuit of excellence, striving to grow in coding, public
              speaking, and leadership. My goal is to not only master cutting-edge technologies but also make a
              meaningful impact by solving real-world problems.
            </p>
            <p className="text-lg">
              When I'm not writing code, you'll find me working on my fitness journey, improving my skills, or
              brainstorming creative projects. I believe in continuous learning and pushing boundaries to achieve
              greatness in all spheres of life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About


"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Text to Emoji Converter",
    description: "A web application that converts text to emojis and vice versa using basic html, css and js.",
    image: "/emote.png",
    link: "https://pr3v3r.github.io/emojiweb/",
  },
  {
    title: "Exciting Projects Coming Soon!",
    description: "Stay tuned for more amazing projects that showcase my skills and creativity.",
    image: "/JRFI2.png",
    link: "#",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background text-foreground section-border">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-muted rounded-lg overflow-hidden shadow-lg border border-accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2 text-accent">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                {project.link !== "#" && (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      className="bg-primary hover:bg-[#33FF33] text-background font-bold py-2 px-4 rounded shadow-md transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                    </motion.button>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


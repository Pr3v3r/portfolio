"use client"

import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava } from "react-icons/fa"
import { SiC, SiFlutter } from "react-icons/si"

const skillsData = [
  { name: "HTML", icon: FaHtml5, color: "text-[#E34F26]" },
  { name: "CSS", icon: FaCss3Alt, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
  { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
  { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
  { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
  { name: "C", icon: SiC, color: "text-[#A8B9CC]" },
  { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
  { name: "Java", icon: FaJava, color: "text-[#007396]" },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background text-foreground section-border">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <skill.icon className={`text-6xl ${skill.color} mb-2`} />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


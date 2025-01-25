import { motion } from "framer-motion"
import { FaCode, FaLightbulb, FaRocket } from "react-icons/fa"

const widgets = [
  { icon: FaCode, text: "Clean Code" },
  { icon: FaLightbulb, text: "Innovative Ideas" },
  { icon: FaRocket, text: "Fast Performance" },
]

const Widgets = () => {
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 left-4 space-y-4">
      {widgets.map((widget, index) => (
        <motion.div
          key={index}
          className="bg-muted p-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <widget.icon className="text-primary text-2xl" />
          <span className="sr-only">{widget.text}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default Widgets


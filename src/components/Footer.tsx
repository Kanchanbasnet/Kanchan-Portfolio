import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <motion.footer
      className="fixed bottom-0 left-0 right-0 py-4 sm:py-6 flex items-center justify-center gap-6 sm:gap-8 z-40 select-none pointer-events-none"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.a
        href="https://github.com/Kanchanbasnet"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto text-zinc-500 hover:text-zinc-900 dark:text-white/40 dark:hover:text-white transition-colors duration-200"
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="GitHub"
      >
        <Github className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.8} />
      </motion.a>
      <motion.a
        href="mailto:kanchanbasnet.dev@gmail.com"
        className="pointer-events-auto text-zinc-500 hover:text-zinc-900 dark:text-white/40 dark:hover:text-white transition-colors duration-200"
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Email"
      >
        <Mail className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.8} />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/kanchan-basnet/"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto text-zinc-500 hover:text-zinc-900 dark:text-white/40 dark:hover:text-white transition-colors duration-200"
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.8} />
      </motion.a>
    </motion.footer>
  )
}

export default Footer

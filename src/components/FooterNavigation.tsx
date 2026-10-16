import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

const HeaderNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [isNavigating, setIsNavigating] = useState(false)

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "PROJECTS", path: "/projects" },
  ]

  const handleNavigation = (path: string) => {
    if (path.startsWith("mailto:")) {
      window.location.href = path
      return
    }

    if (location.pathname !== path) {
      setIsNavigating(true)

      setTimeout(() => {
        navigate(path)
        setIsNavigating(false)
      }, 300)
    }
  }

  return (
    <>
      <motion.div
        className="fixed top-5 left-5 sm:top-6 sm:left-8 z-50 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        onClick={() => handleNavigation("/")}
      >
        <span className="text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase select-none text-zinc-900 dark:text-white transition-colors duration-200">
          Kanchan Basnet
        </span>
      </motion.div>

      <motion.header
        className="fixed top-5 right-5 sm:top-6 sm:right-8 z-50 flex items-center gap-5 sm:gap-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <motion.button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className={`relative py-1 text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase cursor-pointer transition-colors duration-200 select-none ${
                isActive
                  ? "text-zinc-900 dark:text-white"
                  : "text-zinc-400 hover:text-zinc-900 dark:text-[#8b8b8b] dark:hover:text-white"
              }`}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{item.name}</span>
              {isActive && (
                <motion.div
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-zinc-900 dark:bg-white rounded-full"
                  layoutId="activeNavUnderline"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </motion.button>
          )
        })}

        <motion.button
          onClick={toggleTheme}
          className="p-1.5 rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors cursor-pointer select-none flex items-center justify-center"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle color theme"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300" />
          ) : (
            <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-700 transition-transform duration-300" />
          )}
        </motion.button>
      </motion.header>

      <AnimatePresence>
        {isNavigating && (
          <motion.div
            className="fixed inset-0 bg-black/30 dark:bg-black/80 z-40 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default HeaderNavigation




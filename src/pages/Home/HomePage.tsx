import { motion } from "framer-motion"
import HeaderNavigation from "../../components/FooterNavigation"
import Seo from "../../components/Seo"
import OpenToWork from "../../components/OpenToWork"
import ScrollDown from "../../components/ScrollDown"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col relative overflow-hidden font-['Inter']">
      <Seo
        title="Kanchan Basnet"
        description="Backend developer skilled in Node.js, React.js, and TypeScript. Building reliable and efficient applications with clean, maintainable code."
        pathName=""
      />

      {/* Top Navigation */}
      <HeaderNavigation />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-start px-10 sm:px-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-left flex flex-col items-start gap-0"
        >
          <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-bold tracking-[0.02em] leading-[0.8] select-none uppercase">
            Backend
          </h1>
          <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-bold tracking-[0.02em] leading-[0.8] select-none uppercase ml-10 sm:ml-22 mt-4">
            Developer
          </h1>
        </motion.div>
      </main>

      {/* Bottom Layout */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex items-end justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <ScrollDown />
        </div>
        <div className="pointer-events-auto text-right">
          <OpenToWork />
        </div>
      </div>
    </div>
  )
}

export default HomePage

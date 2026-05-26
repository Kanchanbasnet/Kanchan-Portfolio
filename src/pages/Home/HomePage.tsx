import { motion } from "framer-motion"
import HeaderNavigation from "../../components/FooterNavigation"
import Seo from "../../components/Seo"
import OpenToWork from "../../components/OpenToWork"
import ScrollDown from "../../components/ScrollDown"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col relative overflow-hidden font-['Outfit']">
      <Seo
        title="Kanchan Basnet - Software Engineer"
        description="Software Engineer skilled in Node.js, React.js, and TypeScript. Building reliable and efficient applications with clean, maintainable code."
        pathName=""
      />

      {/* Top Navigation */}
      <HeaderNavigation />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-start px-6 sm:px-10 md:px-16 lg:px-20 pr-6 md:pr-28">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-left flex flex-col items-start gap-0"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-bold tracking-[0.02em] leading-[0.85] select-none uppercase">
            Software
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-bold tracking-[0.02em] leading-[0.85] select-none uppercase">
            Engineer
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {["Node.js", "TypeScript", "PostgreSQL"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase font-['Outfit'] bg-white/5 border border-white/10 text-white/60"
              >
                {tech}
              </span>
            ))}
          </motion.div>
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

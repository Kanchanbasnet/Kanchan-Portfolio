import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import HeaderNavigation from "../../components/FooterNavigation"
import Seo from "../../components/Seo"
import Footer from "../../components/Footer"
import profileImg from "../../assets/images/image.png"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-zinc-900 dark:text-white flex flex-col relative overflow-hidden font-['Outfit'] transition-colors duration-300">
      <Seo
        title="Kanchan Basnet - Software Engineer"
        description="Software Engineer skilled in Node.js, React.js, and TypeScript. Building reliable and efficient applications with clean, maintainable code."
        pathName=""
      />

      <HeaderNavigation />

      <main className="flex-grow flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-20 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 lg:gap-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 border border-zinc-200 dark:border-white/10 shadow-2xl relative bg-zinc-100 dark:bg-[#1c1c1c] transition-colors duration-200"
          >
            <img
              src={profileImg}
              alt="Kanchan Basnet"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white transition-colors duration-200">
              Hey, I'm Kanchan.
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-white/70 leading-relaxed font-light transition-colors duration-200">
              I am a software engineer who loves breaking things just to understand how they work. finding patterns in chaos, chasing good food, and exploring places i've never been.
            </p>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-white/70 leading-relaxed font-light transition-colors duration-200">
              basically, i turn messes into something that makes sense. or at least i try to.
            </p>
            <div className="pt-2 flex items-center gap-3 text-base sm:text-lg font-medium">
              <Link
                to="/projects"
                className="text-zinc-900 dark:text-white underline underline-offset-4 decoration-zinc-400 dark:decoration-white/40 hover:decoration-zinc-900 dark:hover:decoration-white transition-colors"
              >
                projects
              </Link>
              <span className="text-zinc-400 dark:text-white/40">·</span>
              <a
                href="mailto:kanchanbasnet.dev@gmail.com"
                className="text-zinc-900 dark:text-white underline underline-offset-4 decoration-zinc-400 dark:decoration-white/40 hover:decoration-zinc-900 dark:hover:decoration-white transition-colors"
              >
                say hi
              </a>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage


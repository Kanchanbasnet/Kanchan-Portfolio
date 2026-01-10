import { motion } from "framer-motion"

const OpenToWork = () => {
    return (
        <a
            href="mailto:kanchanbasnet.dev@gmail.com"
            className="flex items-center gap-4 mt-6 sm:mt-12 mb-8 opacity-90 select-none cursor-pointer hover:scale-105 transition-transform duration-300"
        >
            <div className="flex flex-col items-end leading-tight">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase font-sans">
                    Open to Work
                </span>
                <span className="text-xs sm:text-sm text-gray-400 font-medium tracking-wide mr-17">
                    Based in Nepal
                </span>
            </div>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="flex items-center justify-center pt-0.5"
            >
                <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 sm:w-8 sm:h-8 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 2C12.5523 2 13 2.44772 13 3V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V3C11 2.44772 11.4477 2 12 2Z" />
                    <path d="M3.33975 7C3.61589 6.52163 4.22736 6.35767 4.70573 6.63381L20.2893 15.6338C20.7677 15.9099 20.9317 16.5214 20.6555 16.9998C20.3794 17.4781 19.7679 17.6421 19.2895 17.366L3.70594 8.36599C3.22758 8.08985 3.06361 7.47837 3.33975 7Z" />
                    <path d="M3.33975 16.9998C3.06361 16.5214 3.22758 15.9099 3.70594 15.6338L19.2895 6.63381C19.7679 6.35767 20.3794 6.52163 20.6555 7C20.9317 7.47837 20.7677 8.08985 20.2893 8.36599L4.70573 17.366C4.22736 17.6421 3.61589 17.4781 3.33975 16.9998Z" />
                </svg>
            </motion.div>

        </a>
    )
}

export default OpenToWork

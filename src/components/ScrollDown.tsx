import { motion } from "framer-motion"

const ScrollDown = () => {
    return (
        <a
            href="mailto:kanchanbasnet.dev@gmail.com"
            className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center select-none cursor-pointer hover:scale-110 transition-transform duration-300 pointer-events-auto"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
            >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                        <path
                            id="circlePath"
                            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                        />
                    </defs>
                    <text className="text-[10px] uppercase tracking-widest font-bold fill-white/40">
                        <textPath xlinkHref="#circlePath">
                            Hire Me • Hire Me • Hire Me •
                        </textPath>
                    </text>
                </svg>
            </motion.div>
            <div className="text-white/40">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C12.5523 2 13 2.44772 13 3V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V3C11 2.44772 11.4477 2 12 2Z" />
                    <path d="M3.33975 7C3.61589 6.52163 4.22736 6.35767 4.70573 6.63381L20.2893 15.6338C20.7677 15.9099 20.9317 16.5214 20.6555 16.9998C20.3794 17.4781 19.7679 17.6421 19.2895 17.366L3.70594 8.36599C3.22758 8.08985 3.06361 7.47837 3.33975 7Z" />
                    <path d="M3.33975 16.9998C3.06361 16.5214 3.22758 15.9099 3.70594 15.6338L19.2895 6.63381C19.7679 6.35767 20.3794 6.52163 20.6555 7C20.9317 7.47837 20.7677 8.08985 20.2893 8.36599L4.70573 17.366C4.22736 17.6421 3.61589 17.4781 3.33975 16.9998Z" />
                </svg>
            </div>
        </a>
    )
}

export default ScrollDown

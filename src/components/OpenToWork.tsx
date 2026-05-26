import { useState } from "react"
import { Eye, EyeClosed } from "lucide-react"
import { useNavigate } from "react-router-dom"

const OpenToWork = () => {
    const navigate = useNavigate()
    const [hovered, setHovered] = useState(false)

    return (
        <button
            onClick={() => navigate("/projects")}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex items-center gap-3 mb-8 cursor-pointer group select-none"
        >
            <span className="text-lg sm:text-xl font-bold tracking-widest uppercase text-white relative">
                View My Work
                <span className="absolute -bottom-0.5 left-0 h-[1.5px] bg-white transition-all duration-300 w-0 group-hover:w-full" />
            </span>
            <span className="transition-all duration-200">
                {hovered
                    ? <Eye className="w-5 h-5 text-white" />
                    : <EyeClosed className="w-5 h-5 text-white/40" />
                }
            </span>
        </button>
    )
}

export default OpenToWork

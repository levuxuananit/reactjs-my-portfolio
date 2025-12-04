import { motion } from "motion/react"
import { useState } from "react"

// Custom modules
import { fadeUp } from "@/lib/animations"

// Types
import type {ToolsType} from "@/types"

// Tool-specific color mappings
const toolColors: Record<string, string> = {
    'Python': '#1f74ba',
    'React': '#61DAFB',
    'JavaScript': '#F7DF1E',
    'Node.js': '#339933',
    'Express.js': '#ffffff',
    'MongoDB': '#47A248',
    'Next.js': '#c0c0c0',
    'AWS': '#ffffff',
    'Docker':'#0db7ed',
    'Terraform':'#813cf3',
    'Kubernetes':'#326de6',
    'Jenkins':'#f0d7b9',
    'Github':'#f0d7b9',
    'Gitlab':'#e24329',
    'Jira':'#2684ff',
}

export const ToolsCard = ({tool}:{tool:ToolsType}) => {
    const [isHovered, setIsHovered] = useState(false)
    const toolColor = toolColors[tool.label] || '#6366f1'

    return (
        <motion.div
        variants={fadeUp}
        className="border border-neutral-700 rounded-md flex justify-center items-center flex-col py-6 px-4 relative overflow-hidden group cursor-pointer bg-neutral-900/50 backdrop-blur-sm"
        whileHover={{ 
            scale: 1.05, 
            borderColor: toolColor,
            transition: { duration: 0.2}
        }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}>

            {/* Blurred background image with color overlay */}
            <motion.div 
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            animate={{
                opacity: isHovered ? 0.3 : 0
            }}>
                <img
                src={tool.imgSrc}
                alt={`${tool.label} background`}
                className="w-full h-full object-cover blur-md scale-200"
                />
                <div 
                className="absolute inset-0 mix-blend-multiply"
                style={{
                    background: `linear-gradient(135deg, ${toolColor}20, ${toolColor}10)`
                }}
                />
            </motion.div>

            {/* Animated glow effect */}
            <motion.div
            className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
                boxShadow: `inset 0 0 20px ${toolColor}20, 0 0 20px ${toolColor}10`
            }}
            />

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center">
                <motion.div
                className="relative"
                animate={{
                    y: isHovered ? -2 : 0
                }}
                transition={{ duration: 0.3 }}>
                    <motion.img
                    src={tool.imgSrc}
                    alt={tool.label}
                    className="w-16 h-16 object-contain drop-shadow-lg"
                    animate={{
                        filter: isHovered 
                            ? "brightness(1.3) saturate(1.4) drop-shadow(0 0 10px rgba(255,255,255,0.3))" 
                            : "brightness(1) saturate(1)",
                        scale: isHovered ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    />
                    
                    {/* Subtle glow behind icon */}
                    <motion.div
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(circle, ${toolColor}40, transparent 70%)`
                    }}
                    />
                </motion.div>

                <motion.div 
                className="font-semibold mt-3 text-center text-sm"
                animate={{
                    color: isHovered ? toolColor : "#d4d4d8",
                    y: isHovered ? -1 : 0
                }}
                transition={{ duration: 0.3 }}
                >
                    {tool.label}
                </motion.div>
            </div>

            {/* Bottom accent line */}
            <motion.div
            className="absolute bottom-0 left-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
                background: `linear-gradient(90deg, transparent, ${toolColor}, transparent)`
            }}
            animate={{
                width: isHovered ? "100%" : "0%"
            }}
            transition={{ duration: 0.4, delay: 0.1 }}
            />
        </motion.div>
    )
}

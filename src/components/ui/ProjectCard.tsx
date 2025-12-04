// Node modules
import { motion } from "motion/react"

// Custom modules
import { fadeUp } from "@/lib/animations"

// Types
import type {ProjectType} from "@/types"

export const ProjectsCard = ({
    imgSrc,
    projectLink,
    tags,
    title,
    demoLink
} :ProjectType) => {
    return (
        <motion.div
        variants={fadeUp}
        className="relative">
            
            <figure className="overflow-hidden rounded-md ">
                <a
                href={demoLink}>
                <img
                src={imgSrc}
                alt={title}
                className="round-md transition duration-500 hover:scale-115 w-full"/>
                </a>
            </figure>
            
            {/* Tags */}
            <div className="absolute bottom-0 p-2 flex gap-2">
                {tags.map((tag, i) => (
                    <span
                    key={i}
                    className="bg-background hover:bg-primary hover:text-black py-1 px-2 rounded-sm text-sm cursor-pointer">
                        {tag}
                    </span>
                ))}
            </div>
            
            {/* Demo & Github */}
            <div className="absolute bottom-0 right-0 p-2 flex gap-2">
                {demoLink && (
                    <a
                    href={demoLink}
                    target="_blank"
                    className="bg-amber-600 hover:bg-primary hover:text-black py-1 px-2 rounded-sm text-sm cursor-pointer">
                        Demo
                    </a>
                )
                }
                {projectLink && (
                    <a
                    href={projectLink}
                    target="_blank"
                    className="bg-amber-600 hover:bg-primary hover:text-black py-1 px-2 rounded-sm text-sm cursor-pointer">
                        Github
                    </a>
                )
                }
            </div>
        </motion.div>
    )
} 


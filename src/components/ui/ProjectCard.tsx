// Node modules
import { motion } from "motion/react"
import { Github, ExternalLink } from "lucide-react"

// Custom modules
import { fadeUp } from "@/lib/animations"

// Types
import type { ProjectType } from "@/types"

export const ProjectsCard = ({
    imgSrc,
    projectLink,
    tags,
    title,
    desc,
    demoLink
}: ProjectType) => {
    return (
        <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-6 border border-neutral-700 rounded-xl p-4 hover:border-neutral-500 transition-colors duration-300"
        >
            {/* Image */}
            <a href={demoLink} target="_blank" className="sm:w-56 shrink-0 overflow-hidden rounded-lg">
                <img
                    src={imgSrc}
                    alt={title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
            </a>

            {/* Info */}
            <div className="flex flex-col justify-between gap-3">
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-neutral-400 mt-2">{desc}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="bg-neutral-800 border border-neutral-700 py-0.5 px-2 rounded text-xs text-neutral-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-primary transition-colors duration-200"
                        >
                            <ExternalLink className="size-4" /> Demo
                        </a>
                    )}
                    {projectLink && (
                        <a
                            href={projectLink}
                            target="_blank"
                            className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-primary transition-colors duration-200"
                        >
                            <Github className="size-4" /> Github
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

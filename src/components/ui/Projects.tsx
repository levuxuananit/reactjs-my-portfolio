// Node modules
import { motion } from "motion/react"
import { useState } from "react"

// Custom modules
import { staggerContainer } from "@/lib/animations"

// Components
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ProjectsCard } from "@/components/ui/ProjectCard"
import { Button } from "@/components/ui/button"

// Assets
import { ChevronLeft, ChevronRight } from "lucide-react"

// Constants
import { projectsData } from "@/constants/index"

export const Projects = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const projectsPerPage = 4
    const totalPages = Math.ceil(projectsData.length / projectsPerPage)
    
    const currentProjects = projectsData.slice(
        currentPage * projectsPerPage,
        (currentPage + 1) * projectsPerPage
    )

    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className='mt-30 scroll-mt-30'
            id="projects">

                <SectionHeader
                subtitle="Projects"
                title="My projects"
                />

                <motion.div
                key={currentPage}
                className="grid md:grid-cols-2 gap-10 mt-10"
                initial='hidden'
                animate='visible'
                variants={staggerContainer(0.1)}>
                    {currentProjects.map((project, i) => (
                        <ProjectsCard
                        key={`${currentPage}-${i}`}
                        imgSrc={project.imgSrc}
                        projectLink={project.projectLink}
                        tags={project.tags}
                        title={project.title}
                        demoLink={project.demoLink}
                        />
                    ))}
                </motion.div>

                {/* Pagination Controls */}
                <div className="flex items-center justify-center gap-4 mt-10">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                        disabled={currentPage === 0}
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    
                    <span className="text-sm text-neutral-400">
                        {currentPage + 1} / {totalPages}
                    </span>
                    
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                        disabled={currentPage === totalPages - 1}
                    >
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
        </motion.section>
    )
}
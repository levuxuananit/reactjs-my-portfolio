import { motion } from "motion/react"

// Custom modules
import { fadeUp, staggerContainer } from "@/lib/animations"

// Components
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ExpCard } from "@/components/ui/ExpCard"
import { ToolsCard } from "@/components/ui/ToolsCard"

// Contacts
import { education, experience, tools } from "@/constants/index"

export const Resume = () => {
    return <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className='mt-30 scroll-mt-30'
            id="resume">
                <SectionHeader
                subtitle="Resume"
                title="Education & practical experience"
                />

                {/* <motion.p
                variants={fadeUp}
                className="mt-4 text-neutral-300">
                    With a background in IT and hands-on DevOps experience, I’ve worked on cloud infrastructure, automation, and CI/CD pipelines—focusing on building efficient, scalable, and reliable systems.
                </motion.p> */}

                <div className="grid gap-x-10 my-10 md:grid-cols-2">
                    {/* Education */}
                    <motion.div
                    variants={fadeUp}
                    className="mb-16 md:mb-0">
                        
                        <h2 className="text-3xl font-semibold mb-8">Education</h2>
                        
                        <div className="space-y-8 border-l pl-6 border-neutral-700">
                        {education.map((item, i)=> (
                            <ExpCard
                            key={i}
                            item={item}
                            />
                        ))}
                    </div>
                    </motion.div>

                    {/* Work Experience */}
                    <motion.div
                    variants={fadeUp}
                    className="mb-16 md:mb-0">
                        
                        <h2 className="text-3xl font-semibold mb-8">Work Experience</h2>
                        
                        <div className="space-y-8 border-l pl-6 border-neutral-700">
                        {experience.map((item, i)=> (
                            <ExpCard
                            key={i}
                            item={item}
                            />
                        ))}
                    </div>
                    </motion.div>

                </div>

                <div className="my-6">
                    <motion.h2
                    variants={fadeUp}
                    className="text- font-semibold mb-8 capitalize">
                        Languages, Frameworks and Platforms...
                    </motion.h2>

                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.3}}
                    variants={staggerContainer(0.5)}
                    className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
                        {tools.map((tool,i) => (
                            <ToolsCard
                            key={i}
                            tool={tool}/>
                        ))}
                    </motion.div>
                </div>
    </motion.section>
}
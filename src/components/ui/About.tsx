import { motion } from "motion/react"

// Custom modules
import { fadeUp, staggerContainer } from "@/lib/animations"

// Components
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Button } from "@/components/ui/button"

export const About = () => {
    return <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className='mt-30 scroll-mt-30'
            id="about">
                <SectionHeader subtitle="About"
                title="It's still day 1"
                />
                <motion.p
                variants={fadeUp}
                className="mt-4 text-neutral-300">
                    I’m currently AWS Cloud Club Captain at HCMUTE and Cloud Engineer Ambassador at AWS Cloud AI Journey. Even as a fresher, I’ve had the chance to dive into real digital-transformation projects for AWS customers in the securities industry - an experience that shaped the way I approach scalable cloud solutions. I love exploring AWS services, learning fast, and turning ideas into real systems, from automation to GenAI-powered applications.   
                </motion.p>

                <motion.p
                variants={fadeUp}
                className="mt-4 text-neutral-300">
                    Leading a cloud community has helped me grow strong leadership, communication, and teamwork skills. I’m now aiming to level up in Cloud  DevOps on my journey to becoming a professional DevOps Engineer.
                </motion.p>

                <motion.div
                variants={fadeUp}
                transition={{delay:0.2}}>
                    <Button className="mt-5">
                        <a href="https://www.linkedin.com/in/levuxuanan/">Contact Me</a>
                    </Button>
                </motion.div>

        </motion.section>
    
}
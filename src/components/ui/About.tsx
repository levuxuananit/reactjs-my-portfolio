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
                    I am a Software & Cloud Engineer based in Ho Chi Minh City, Vietnam. Even as a fresher, I contributed to digital transformation projects for AWS customers in the finance and securities sector, gaining hands-on experience in large-scale cloud solutions and production-ready architectures.   
                </motion.p>

                <motion.p
                variants={fadeUp}
                className="mt-4 text-neutral-300">
                    As one of the first AWS Cloud Club Captains in Vietnam, I have led community workshops and hands-on sessions with 200+ participants. I also serve as an AWS Cloud Engineer Ambassador at the AWS First Cloud Journey program, developing practical AWS workshops and speaking at technical events. I am now focused on advancing my skills in Cloud & DevOps on my path to becoming a professional DevOps Engineer.
                    <br></br>I’d be happy to connect with you on LinkedIn!
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
import { motion } from "motion/react"

// Custom modules
import { fadeUp, staggerContainer } from "@/lib/animations"

// Components
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ServiceCard } from "@/components/ui/ServiceCard" 

// Contacts
import {services} from "@/constants/index"

export const Services = () => {
    return <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className='mt-30 scroll-mt-30'
            id="services">
                <SectionHeader
                subtitle="Services"
                title="Build with Reliability & Scalability"
                />
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.3}}
                variants={staggerContainer(0.5)}
                className="grid md:grid-cols-2 gap-10 mt-10">
                    {services.map((service) => (
                        <motion.div
                        key={service.title}
                        variants={fadeUp}>
                            <ServiceCard service={service}/>
                        </motion.div>
                    ))}
                </motion.div>
    </motion.section>
}
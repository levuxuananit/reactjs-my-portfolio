import { motion } from "motion/react";

// Custom modules
import { fadeUp, staggerContainer } from "@/lib/animations";

// Components
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-30 scroll-mt-30"
      id="about"
    >
      <SectionHeader subtitle="About" title="It's still day 1" />
      <motion.p variants={fadeUp} className="mt-4 text-neutral-300">
        Software Developer dedicated to building scalable backend systems and
        automating cloud infrastructure.
      </motion.p>

      <motion.p variants={fadeUp} className="mt-4 text-neutral-300">
        I focus on leveraging the Backend (Spring Boot, Node.js) and AWS to
        transform complex requirements into high-performance, production-ready
        solutions.
        <br></br>I’d be happy to connect with you on LinkedIn!
      </motion.p>

      <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
        <Button className="mt-5">
          <a href="https://www.linkedin.com/in/levuxuanan/">Contact Me</a>
        </Button>
      </motion.div>
    </motion.section>
  );
};

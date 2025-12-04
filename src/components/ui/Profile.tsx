// Node modules
// import { useState } from "react"
import { motion } from "motion/react"

// Components
import { Button } from "@/components/ui/button"
// Constants
import { socialLinks } from "@/constants"

export const Profile = () => {
    return <aside className=" max-w-3xl border m-6 border-neutral-600 bg-neutral-900 text-white p-6 rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96">
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-x-10">
                <h1 className="text-3xl font-bold">Xuan An</h1>
                <p className="text-sm">Cloud & Developer</p>
            </div>
            <motion.div 
                className="relative overflow-hidden rounded-2xl border border-neutral-700 group cursor-pointer bg-neutral-900/50 backdrop-blur-sm"
                whileHover={{ 
                    scale: 1.05, 
                    borderColor: '#3b82f6',
                    transition: { duration: 0.2}
                }}
                transition={{ duration: 0.3 }}
                onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                }}
            >
                {/* Border light sweep effect */}
                <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)',
                        width: '20%',
                        height: '2px',
                        top: '0',
                        left: '-20%'
                    }}
                    animate={{
                        x: ['0%', '500%']
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
                <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                        background: 'linear-gradient(0deg, transparent, rgba(59, 130, 246, 0.8), transparent)',
                        width: '2px',
                        height: '20%',
                        top: '-20%',
                        right: '0'
                    }}
                    animate={{
                        y: ['0%', '500%']
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.375
                    }}
                />
                <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)',
                        width: '20%',
                        height: '2px',
                        bottom: '0',
                        right: '-20%'
                    }}
                    animate={{
                        x: ['0%', '-500%']
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.75
                    }}
                />
                <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                        background: 'linear-gradient(0deg, transparent, rgba(59, 130, 246, 0.8), transparent)',
                        width: '2px',
                        height: '20%',
                        bottom: '-20%',
                        left: '0'
                    }}
                    animate={{
                        y: ['0%', '-500%']
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.125
                    }}
                />
                {/* Animated glow effect */}
                <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        boxShadow: 'inset 0 0 20px #3b82f620, 0 0 20px #3b82f610'
                    }}
                />
                
                <img
                    src="/avatar.png"
                    alt="Xuan An"
                    className="lg:w-96 rounded-2xl object-cover relative z-10"
                />
                
                {/* Bottom accent line */}
                <motion.div
                    className="absolute bottom-0 left-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)'
                    }}
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                />
            </motion.div>
            {/*Specialization*/}
            <div className="mt-6">
                <p className="text-sm text-neutral-300">Specialization:</p>
                <p className="text-lg capitalize">Amazon Web Services</p>
            </div>

            {/*Base in*/}
            <div className="mt-6">
                <p className="text-sm text-neutral-300">Base in:</p>
                <p className="text-lg capitalize">HoChiMinh city, Vietnam</p>
            </div>

            {/*Socials*/}
            <div className="flex gap-3 pt-2 text-neutral-500">
                {socialLinks.map((Socials, i)=> {
                    const Icon = Socials.icon

                    return(
                        <a
                        key={i}
                        href={Socials.href}
                        className="hover:text-primary border-2 border-neutral-500 p-2 rounded-full hover:border-primary transition duration-200"
                        >
                            <Icon className="size-4" />
                        </a>
                    )
                })}
            </div>
            
            {/* Button */}
                <Button
                className="mt-2"
                size="lg"
                >
                    <a href="https://www.linkedin.com/in/levuxuanan/">Let's connect!</a>
                </Button>
        </div>
    </aside>
}
// components
// import { Button} from "@/components/ui/button";
import { Hero }  from "@/components/ui/Hero";
import { Stats } from "@/components/ui/Stats";
import {Projects} from "@/components/ui/Projects"
import {About} from "@/components/ui/About"
// import {Services} from "@/components/ui/Services"
import { Resume } from "@/components/ui/Resume";
import { Contact } from "@/components/ui/Contact";

// Node modules
import { useEffect } from "react";
import Lenis from 'lenis'


export const App = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <>
      <main className="relative z-10 flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl">
        <Hero/>
        <Stats/>
        <About/>
        <Projects/>
        {/* <Services/> */}
        <Resume/>
        <Contact/>
      </main>
    </>
  )
}

import { Contact } from "./Contacts"
import { Footer } from "./Footer"
import { Hero } from "./Hero"
import { Navsection } from "./Navsection"
import { Projects } from "./Projects"
import Skills from "./Skills"


export const Home=()=>{


    return(
        <>
        <Navsection />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />

        </>
    )
}
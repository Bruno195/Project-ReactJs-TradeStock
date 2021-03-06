import React, { useState } from 'react'
import Sidebar from "../components/SideBar"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
import { homeObjTwo } from '../components/InfoSectionTwo/Data'
import { homeObjThree } from '../components/InfoSectionThree/Data'
import InfoSectionTwo from '../components/InfoSectionTwo'
import InfoSectionThree from '../components/InfoSectionThree'
import Footer from "../components/Footer"
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}></InfoSection>
            <InfoSectionTwo {...homeObjTwo} />
            <InfoSectionThree {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home

import React from 'react'
import styles from './About.module.css'
import AboutCard from './AboutCard/AboutCard.jsx'
import { useGSAP } from '@gsap/react'
import gsap, { ScrollTrigger } from 'gsap/all'

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
    <div className={styles.aboutWrapper} id='about'>
        <AboutCard title="Who we are">

        </AboutCard>
    </div>
    </>
  )
}

export default About
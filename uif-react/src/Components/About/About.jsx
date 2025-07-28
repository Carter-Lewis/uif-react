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
        <AboutCard 
          title="Who we are" 
          side='left' 
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aspernatur perspiciatis corrupti doloribus vitae itaque voluptates voluptatibus error vero excepturi.'></AboutCard>
        <AboutCard 
          title='What we do' 
          side='right' 
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugit, a quasi perspiciatis laboriosam commodi?' />
    </div>
    </>
  )
}

export default About
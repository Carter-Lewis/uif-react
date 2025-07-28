import React from 'react'
import styles from './AboutCard.module.css'
import gsap from 'gsap'
import { SplitText, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

const AboutCard = (props) => {

  useGSAP(() => {
    gsap.from('#about-card', {
      xPercent: -150,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#about-card',
        start: 'top center',
        end: 'bottom center',
        scrub: true
      }
    })
  })

  return (
    <div className={styles.aboutCard} id='about-card'>
        <h1 className={styles.cardTitle}>{props.title}</h1>
        <p className={styles.cardContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
  )
}

export default AboutCard
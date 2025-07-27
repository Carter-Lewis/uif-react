import styles from './Hero.module.css'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('#hero-title', {type: 'chars, words' });
        const paraSplit = new SplitText('#hero-subtitle', {type: 'lines' });

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            opacity: 0,
            ease: 'expo.out',
            stagger: 0.06
        });

        gsap.from(paraSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        });
    })

  return (
    <section className={styles.hero} id='home'>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle} id='hero-title'>Baylor UIF</h1>
        <p className={styles.heroSubtitle} id='hero-subtitle'>
          Some cool line about uif<br /> that makes us sound really cool
        </p>
      </div>
    </section>
  )
}

export default Hero
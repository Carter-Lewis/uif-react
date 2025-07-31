import React from 'react'
import styles from './MemberCard.module.css'

const MemberCard = (props) => {
  return (
    <div className={styles.memberCard}>
        <h2 className={styles.memberTitle}>{props.title}</h2>
        <img src={props.image} alt="UIF is cool" className={styles.memberImage}/>
    </div>
  )
}

export default MemberCard
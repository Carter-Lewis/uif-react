import React from "react";
import styles from "./CohortCard.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import MemberCard from "./MemberCard";

const CohortCard = (props) => {

  

return (
    <>
        <div className={styles.cohortCard}>
            <h2 className={styles.cohortTitle}>{props.title}</h2>
            <p className={styles.cohortIntro}>{props.intro}</p>
            <div className={styles.memberImageWrapper}>
                {props.cohort.map((member) => (
                    <MemberCard key={member.id} title={member.name} image={member.image} />
                ))}
            </div>
        </div>
    </>
);
};

export default CohortCard;

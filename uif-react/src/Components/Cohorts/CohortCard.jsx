import React from "react";
import styles from "./CohortCard.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

const CohortCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const cardStyle = {
    backgroundImage: !isOpen ? `url('${props.imageUrl || "/Images/UIF Team.JPG"}')` : 'none',
    width: isOpen ? 'auto' : '600px',
    minWidth: isOpen ? '800px' : '600px',
  };

return (
    <>
        <motion.div
            layout
            onClick={() => setIsOpen(!isOpen)}
            className={styles.card}
            style={cardStyle}
        >
            <motion.h2 className={styles.cohortCardTitle}>{props.title}</motion.h2>
            {!isOpen && <motion.div className={styles.cohortCardContent}>
                <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </motion.div>}
            {isOpen && 
                    <motion.div className={styles.memberCardsWrapper}>
                            {props.children}
                    </motion.div>
            }
        </motion.div>
    </>
);
};

export default CohortCard;

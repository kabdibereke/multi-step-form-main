import { FormContexts } from '../../store/context';
import { FormContext } from '../../types/types';
import styles from './Confirm.module.scss'
import {useContext, useState} from 'react'
import thank from '../../assets/icon-thank-you.svg'
import { motion } from "framer-motion"


const Confirm = () => {

  return (
    <motion.div className={styles.main}
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}>
        <img  className={styles.img} src={thank} alt="thank" />
        <p className={styles.title}>Thank You!</p>
        <p className={styles.subtitle}>Thanks for confirming your subscription! We hope you have fun using our platform, IF you ever need support, please feel free to ernail us at support@loremgaming.com.</p>
    </motion.div>
  )
}

export default Confirm  
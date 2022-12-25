import React from 'react'
import styles from './Step.module.scss'
interface stepProps {
stepNum:number,
stepDescr:string,
active:boolean,
onActive:(id:number)=>void
}

const Step = ({stepNum,stepDescr,active,onActive}:stepProps) => {

   
  return (
    <div className= {styles.wpapper} >
        <div className={active? styles.circle2: styles.circle}>
            {stepNum}
        </div>
        <div className={styles.step}>
            <div className={styles.step_number} >STEP {stepNum}</div>
            <div className={styles.info}>{stepDescr}</div>
        </div>
    </div>
  )
}

export default Step
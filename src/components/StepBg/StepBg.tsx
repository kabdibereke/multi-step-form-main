import React, { useState } from 'react'
import { IStepArr } from '../../types/types'
import Step from '../Step/Step'
import styles from './StepBg.module.scss'

interface StepBgProps {
    newStepArr:IStepArr[],
    onActive: (id:number)=> void

}

const StepBg = ({newStepArr,onActive}:StepBgProps) => {
  
  return (
    <div className={styles.steps}>
       <div className={styles.bg}>
          {newStepArr.map(item=> {
            return <Step key={item.stepNum} stepNum={item.stepNum} stepDescr ={item.stepDescr} active = {item.active} onActive={onActive}/>
          })}
       </div>
    </div>
  )
}

export default StepBg
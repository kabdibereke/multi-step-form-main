import React from 'react'
import advanced from '../../assets/icon-advanced.svg'
import { ISelectArr } from '../../types/types'
import styles from './Select.module.scss'
interface  SelectProps extends ISelectArr{
  isYearly:boolean,
  onActiveStyle: (id:number)=> void,
  
}

const Select = ({img,name,priceMounth, priceYear, isYearly,isActive,onActiveStyle}: SelectProps) => {
  
  return (
    <div className={isActive? styles.main2:styles.main} onClick={()=>onActiveStyle(priceMounth)}>
        <img  className={styles.modeImg} src={img} alt="mode" />
        <p className={styles.modeName}>{name}</p>
        <p className={styles.modePrice}>{isYearly? `$${priceYear}/yr`: `$${priceMounth}/mo`}</p>
        {isYearly && <p className={styles.modeFree}>2 mounths free</p>}
    </div>
  )
}

export default Select
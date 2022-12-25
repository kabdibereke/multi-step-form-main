import React from 'react'
import { IAddonsArr } from '../../types/types'
import styles from './AddonsItem.module.scss'
interface AddonsItemProps extends IAddonsArr{
    isActiveStyle:(id:number)=>void,
    isYearly:boolean
}

const AddonsItem = ({title,subtitle,priceMounth,priceYear,isActive,isActiveStyle,isYearly}: AddonsItemProps) => {
  return (
    <div className={isActive? styles.main2: styles.main}>
        <input type="checkbox"  onChange={()=>isActiveStyle(priceMounth)} checked={isActive}/>
        <div className={styles.textWrappper}>
            <p  className={styles.title}>{title}</p>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <p className={styles.price}>
            {isYearly? `+${priceYear}$/yr`: `+${priceMounth}$/mo`}
        </p>
    </div>
  )
}

export default AddonsItem
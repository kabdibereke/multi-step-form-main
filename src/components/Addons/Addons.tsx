import React, { useContext, useState } from 'react'
import { FormContexts } from '../../store/context'
import { FormContext, IAddonsArr } from '../../types/types'
import AddonsItem from '../AddonsItem/AddonsItem'
import styles from './Addons.module.scss'



const Addons = () => {
  const {onActive, idRight,isYearly,newAddonsArr,setNewAddonsArr} =useContext(FormContexts) as FormContext;
  const isActiveStyle = (id:number)=> {
    setNewAddonsArr (newAddonsArr.map(item=> {
      if(item.priceMounth==id) item.isActive=!item.isActive
      return item
    }))
  }
  return (
    <div className={styles.main}>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience</p>
        <div className={styles.addonsWrapper}>
          {newAddonsArr.map((item,index)=> {
            return <AddonsItem key={index} title={item.title} subtitle={item.subtitle} priceMounth={item.priceMounth} priceYear={item.priceYear} isActive={item.isActive} isActiveStyle={isActiveStyle} isYearly={isYearly}/>
          })}
        </div>
        <button onClick={()=> onActive(idRight+1)} className={styles.addonsButton}>Next Step</button>
        <button onClick={()=> onActive(idRight-1)} className={styles.addonsButtonGoBackButton}>Go Back</button>
    </div>
  )
}

export default Addons
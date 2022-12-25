import  { useContext } from 'react'
import Select from '../Select/Select'
import styles from './SelectPlan.module.scss'
import { FormContext} from '../../types/types'
import Switch from "react-switch";
import { FormContexts } from '../../store/context'
import { motion } from 'framer-motion';


const SelectPlan = () => {
    const {onActive, idRight, newStepArr,isYearly,setIsYearly,newSelectArr,setNewSelectArr} =useContext(FormContexts) as FormContext;
    const onActiveStyle = (id:number)=> {  
        setNewSelectArr(newSelectArr.map(item=> {
        item.isActive=false
        if (item.priceMounth===id)  {
            item.isActive=true
        }
        
        return item
        }))
    }
  return (
    <motion.div className={styles.main}
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}>
        <h2 >Select your plan</h2>
        <p>You have the option of monthly or yearly billing</p>
        <div className={styles.selects}>
            {newSelectArr.map((item,index)=> {
                return <Select key={index} img={item.img} name={item.name} priceMounth={item.priceMounth} priceYear={item.priceYear} isYearly={isYearly} isActive={item.isActive} onActiveStyle={onActiveStyle}/>
            })}
        </div>
        <div className={styles.check}>
            <p className={styles.checkText} >Monthly</p>
            <Switch checkedIcon={false} onColor={'#141D2F'} uncheckedIcon={false} checked={isYearly} onChange={()=>{setIsYearly(!isYearly)}} />
            <p className={styles.checkText}>Yearly</p>
        </div>
        <button onClick={()=> onActive(idRight+1)} className={styles.selectButton}>Next Step</button>
        <button onClick={()=> onActive(idRight-1)} className={styles.selectGoBackButton}>Go Back</button>
    </motion.div>
  )
}

export default SelectPlan
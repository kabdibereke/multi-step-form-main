import {createContext, ReactNode, useContext, useEffect,useState}from 'react'
import YourInfo from '../components/YourInfo/YourInfo'
import { addonsArr, selectArr, StepArr } from '../mock/mockArr'
import { FormContext, IAddonsArr, IStepArr, ISelectArr } from '../types/types'


    
export const FormContexts =createContext<FormContext | null>(null)

export const FormProvider: React.FC<any> = ({ children }) => {
    const [newStepArr, setNewStepArr] =useState<IStepArr[]>(StepArr)
    const [idRight, setIdRight] =useState(1)
    const [isYearly, setIsYearly] =useState(false);
    const [newSelectArr, setNewSelectArr]= useState<ISelectArr[]>(selectArr);
    const [newAddonsArr, setNewAddonsArr] = useState<IAddonsArr[]>(addonsArr);
    const [name, setName] =useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('')
    const [finish ,setFinish] = useState<(string | boolean | ISelectArr | IAddonsArr)[]>([])
    const onActive = (id:number)=> {  
        setNewStepArr(newStepArr.map(item=> {
        item.active=false
        if (item.stepNum===id)  {
            item.active=true
            setIdRight(id)
        }
        return item
        }))
    }

    useEffect(()=> {
        const addonsPage = newAddonsArr.filter(item=> {
            return item.isActive
        })
        const selectPage = newSelectArr.filter(item=> {
            return item.isActive
        })
        const newArr:(string | boolean | ISelectArr | IAddonsArr)[] = [...selectPage,...addonsPage,isYearly,name,email,phone] 

        setFinish(newArr)
  
    },[newSelectArr,isYearly,newAddonsArr,name,email,phone])
    return (
        <FormContexts.Provider  value={{ onActive, idRight, newStepArr,isYearly,setIsYearly,newSelectArr,setNewSelectArr,newAddonsArr,setNewAddonsArr,name, setName, email,setEmail, phone, setPhone,finish }}>
            {children}
        </FormContexts.Provider>

    )
}


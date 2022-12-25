import { useContext, useState } from 'react'
import Addons from './components/Addons/Addons'
import Container from './components/Container/Container'
import SelectPlan from './components/SelectPlan/SelectPlan'
import StepBg from './components/StepBg/StepBg'
import Summary from './components/Summary/Summary'
import YourInfo from './components/YourInfo/YourInfo'
import { FormContexts } from './store/context'
import { FormContext, IStepByStep } from './types/types'

const stepbystep:IStepByStep[]= [
  {id:1, component: <YourInfo/>},
  {id:2, component: <SelectPlan/>},
  {id:3, component: <Addons/>},
  {id:4, component: <Summary/>}
]
function App() {
  const {onActive, idRight, newStepArr} =useContext(FormContexts) as FormContext;
  
  return (
    <Container>
         <div className='bg'>
            <StepBg onActive={onActive} newStepArr={newStepArr}/>
            {stepbystep.map(item=> {
              return  item.id==idRight && item.component 
            })}
         </div>
    </Container>
  )
}

export default App

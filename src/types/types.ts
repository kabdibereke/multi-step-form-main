import { Dispatch, SetStateAction } from "react"

export interface IYourInfo {
    name:'string'
    email: 'string'
    phoneNumber: 'string'
}

export interface IStepArr {
    stepNum:number, stepDescr: string, active:boolean
}

export interface FormContext {
    newStepArr:IStepArr []
    idRight:number
    onActive: (id:number)=>void,
    isYearly:boolean,
    setIsYearly:Dispatch<SetStateAction<boolean>>,
    newSelectArr:ISelectArr[],
    setNewSelectArr:Dispatch<SetStateAction<ISelectArr[]>>,
    newAddonsArr: IAddonsArr[],
    setNewAddonsArr: Dispatch<SetStateAction<IAddonsArr[]>>
    name:string,
    setName:Dispatch<SetStateAction<string>>,
    email:string,
    setEmail:Dispatch<SetStateAction<string>>,
    phone:string,
    setPhone:Dispatch<SetStateAction<string>>,
    finish:any
}

export interface ISelectArr {
    img: string , name:string,priceMounth:number,priceYear:number ,isActive:boolean
}

export interface IAddonsArr {
    title:string, subtitle:string, priceMounth:number,priceYear:number, isActive:boolean,
}

export interface IStepByStep {
    id: number;
    component: JSX.Element;
}
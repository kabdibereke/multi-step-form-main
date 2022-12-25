import { IAddonsArr, IStepArr, ISelectArr } from "../types/types";
import advanced from '../assets/icon-advanced.svg'
import arcade from '../assets/icon-arcade.svg'
import pro from '../assets/icon-pro.svg'
export const StepArr:IStepArr[] = [
    {stepNum:1, stepDescr: 'your info', active:true},
    {stepNum:2, stepDescr: 'select plan', active:false},
    {stepNum:3, stepDescr: 'add-ons', active:false},
    {stepNum:4, stepDescr: 'summary', active:false}
]

export const selectArr:ISelectArr[] = [
    {img: arcade , name:'Arcade',priceMounth:9,priceYear:90, isActive:true  },
    {img:  advanced  , name:'Advanced ',priceMounth:12,priceYear:120,isActive:false },
    {img: pro , name:'Pro ',priceMounth:15,priceYear:150,isActive:false  }
]

export const addonsArr:IAddonsArr[] = [
    {title:'Online service', subtitle:'Access to multiplayer games', priceMounth:1,priceYear:10, isActive:false},
    {title:'Larger storage', subtitle:'Extra 1TB of cloud save', priceMounth:2,priceYear:20, isActive:false},
    {title:'Customizable profile', subtitle:'Custom theme on your profile', priceMounth:3,priceYear:30, isActive:false},
  ]

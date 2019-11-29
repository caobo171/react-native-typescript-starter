import { action, createAction } from "typesafe-actions"


export const add = createAction('number/ADD' , 
(value:number)=> (value))<number>()

export const substract = createAction('number/SUBSTRACT', 
(value: number)=> value)<number>()
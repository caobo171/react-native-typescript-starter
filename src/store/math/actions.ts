import { action, createAction } from "typesafe-actions"


export const add = createAction('number/ADD' , action=>{
    return (value:number) => action({ data: value })
})
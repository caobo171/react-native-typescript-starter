import store from '../store'

import * as actions from './actions'


export const add = (value:number, storex = store)=>{
    return storex.dispatch(actions.add(value))
}
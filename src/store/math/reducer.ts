import { ActionType, createReducer, action} from 'typesafe-actions'

import * as actions from './actions'
import { State } from './types'

const initialState = {
    value:  0 
}

export default createReducer<State, ActionType<typeof actions>>(initialState)
.handleAction(actions.add,(state,  action)=> ({
    value: state.value + action.payload
}))
.handleAction(actions.substract,(state, action)=>({
    value: state.value - action.payload
}))
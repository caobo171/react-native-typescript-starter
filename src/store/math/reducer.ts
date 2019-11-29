import { ActionType, createReducer} from 'typesafe-actions'

import * as actions from './actions'

const initialState = {
    value:  0 
}

export default createReducer<any, ActionType<typeof actions>>(initialState)
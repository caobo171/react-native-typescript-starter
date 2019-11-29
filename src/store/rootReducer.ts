import {combineReducers} from 'redux'

import MathReducer from '@store/math/reducer'

const appReducer = combineReducers({
    math: MathReducer,
})



export default appReducer;
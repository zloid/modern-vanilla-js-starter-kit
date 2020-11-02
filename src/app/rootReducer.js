import { combineReducers } from '@reduxjs/toolkit'
import incrementDecrementReducer from '../features/incrementDecrement/incrementDecrementSlice'

const rootReducer = combineReducers({
    incrementDecrement: incrementDecrementReducer,
})

export default rootReducer

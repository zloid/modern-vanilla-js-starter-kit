import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    displayData: 0,
}

const incrementDecrementSlice = createSlice({
    name: 'testInitialData',
    initialState,
    reducers: {
        increment(state) {
            state.displayData += 1
        },
        decrement(state) {
            state.displayData -= 1
        },
        clearAll(state) {
            state.displayData = 0
        },
    },
})

export const {
    increment,
    decrement,
    clearAll,
} = incrementDecrementSlice.actions

export default incrementDecrementSlice.reducer

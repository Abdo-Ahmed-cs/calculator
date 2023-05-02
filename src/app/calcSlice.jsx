import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: "",
    theme: 1
}
const calcSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        reset: (state) => {
            state.value = ""
        },
        backspace: (state) => {
            state.value = state.value.slice(0, -1)
        },
        add: (state, action) => {
            const value = action.payload
            if (Number(value) || value === '+'|| value === '-' || value === '*' || value === '/'){
                state.value = state.value + "" + value
            }
        },
        evaluate: (state) => {
                state.value = '' + eval(state.value)
        },
        changeTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

export default calcSlice.reducer
export const {reset, backspace, add, evaluate, changeTheme} = calcSlice.actions
export const inputValue = (state) => (state.calculator.value)
export const theme = (state) => (state.calculator.theme)
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
            if (value === "+" || value === "-" || value === "*" || value === "/" ){
                state.value = state.value + " " + value + " "
            }else {
                state.value = state.value + "" + value
            }
        },
        evaluate: (state) => {
                if (state.value !== "0"){
                    state.value = '' + eval(state.value.replace(/^0+/, '0').replace(/\b0+/g, ''))
                }
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
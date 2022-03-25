import { createSlice } from "@reduxjs/toolkit";

const calcTypeSlice = createSlice({
    name: 'calcExp',
    initialState: [],
    reducers: {
        'addCalc': (state, action) => {           
            return [...state, action.payload];
        },
        'resetCalc': (state, action) => {           
            return [];
        },
        'updateCalc': (state, action) => {           
            state[state.length-1] = action.payload
            return state;
        }

    }
})

export const selectCalcExp = state => state.calcExp;

export const {addCalc, resetCalc, updateCalc} = calcTypeSlice.actions;

export default calcTypeSlice.reducer;
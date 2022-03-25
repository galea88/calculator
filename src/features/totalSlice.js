import { createSlice } from "@reduxjs/toolkit";

export const totalSlice = createSlice({
    name: 'total',
    initialState: 0,
    reducers: {
        'calcTotal': (state, action) => {
            state = action.payload
            return state
        }
    }
})

export const selectTotal = state => state.total;

export const {calcTotal} = totalSlice.actions;

export default totalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name: "counter",
  initialState: { status:false },
    reducers: { 
        toggleStatus: (state,action) => {
            state.status = action.payload;
        },
     },
}); 
export const { toggleStatus } = counterSlice.actions;
export default counterSlice.reducer;
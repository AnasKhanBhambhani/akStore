import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isToggleOn: false
}
const ToggleSLice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        setToggleOn: (state) => {
            state.isToggleOn = true
        },
        setToggleOff: (state) => {
            state.isToggleOn = false
        }
    }
})
export const { setToggleOn, setToggleOff } = ToggleSLice.actions;
export default ToggleSLice.reducer;
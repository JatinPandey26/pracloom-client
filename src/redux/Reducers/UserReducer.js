import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    token: null,
}
export const userSlice = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.token = null;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const {login, logout, setUser} = userSlice.actions;
export default userSlice.reducer;
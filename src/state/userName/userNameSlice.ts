import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserNameState {
    userName: string,
}

const initialState: UserNameState = {
    userName: "",
};

const userNameSlice = createSlice({
    name: "userName",
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload;
        },
    },
});

export const { setUserName } = userNameSlice.actions;

export default userNameSlice.reducer;
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface NumberOfQuestionState {
    numberOfQuestion: number,
}

const initialState: NumberOfQuestionState = {
    numberOfQuestion: 0,
};

const numberOfQuestionSlice = createSlice({
    name: "numberOfQuestion",
    initialState,
    reducers: {
        loadNumberOfQuestion: (state, action: PayloadAction<number>) => {
            state.numberOfQuestion = action.payload;
        },
        incrementNumberOfQuestion: (state) => {
            state.numberOfQuestion += 1;
        },
        resetNumberOfQuestion: (state) => {
            state.numberOfQuestion = 0;
        },
    },
});

export const { loadNumberOfQuestion, incrementNumberOfQuestion, resetNumberOfQuestion } = numberOfQuestionSlice.actions;

export default numberOfQuestionSlice.reducer;
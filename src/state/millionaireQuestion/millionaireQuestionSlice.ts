import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Draft } from "immer";
import questionData from "../../data/millionaireQuestion.json";

interface MillionaireQuestion {
    question: string,
    answers: string[],
    correctAnswer: string,
    value: number
}

interface MillionaireQuestionState {
    millionaireQuestions: MillionaireQuestion[][]
}

const initialState: MillionaireQuestionState = {
    millionaireQuestions: []
};

const millionaireQuestionSlice = createSlice({
    name: "millionaireQuestion",
    initialState,
    reducers: {
        loadMillionaireQuestion: (state, action: PayloadAction<MillionaireQuestion[][]>) => {
            const draftState = state as Draft<MillionaireQuestionState>;
            draftState.millionaireQuestions = action.payload;
        },
    },
});

export const { loadMillionaireQuestion } = millionaireQuestionSlice.actions;

export default millionaireQuestionSlice.reducer;
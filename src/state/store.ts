import { configureStore } from "@reduxjs/toolkit";
import userNameReducer from "./userName/userNameSlice";
import millionaireQuestionReducer from "./millionaireQuestion/millionaireQuestionSlice";

export const store = configureStore({
    reducer: {
        userName: userNameReducer,
        millionaireQuestions: millionaireQuestionReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
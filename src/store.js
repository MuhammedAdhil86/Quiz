// ✅ src/store.js
import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './features/quiz/QuizSlice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
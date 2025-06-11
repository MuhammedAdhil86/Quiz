// ✅ src/store.js
import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './features/quiz/redux';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
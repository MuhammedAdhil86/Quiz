// ✅ src/pages/QuizPage.jsx
import { useSelector, useDispatch } from 'react-redux';
import { answerQuestion, goToNextLevel } from '../features/quiz/quizSlice';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function QuizPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    questions,
    currentIndex,
    showNextLevel,
    level,
    levelResults,
    currentLevelQuestions,
    userAnswers
  } = useSelector((state) => state.quiz);

  const current = questions[currentIndex];
  const currentLevel = level;

  const handleAnswer = (answer) => {
    dispatch(answerQuestion(answer));
    if (currentIndex === questions.length - 1) {
      setTimeout(() => navigate('/result'), 500);
    }
  };

  const prevLevelResult = levelResults?.[currentLevel - 1];
  const prevLevelAnswers = userAnswers?.filter((_, idx) => {
    const start = (currentLevel - 1) * 10;
    const end = currentLevel * 10;
    return idx >= start && idx < end;
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4 py-8">
      <motion.div
        className="max-w-xl w-full bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">{current?.question}</h2>
        <div className="space-y-3">
          {current?.options?.map((option) => (
            <motion.button
              key={option}
              onClick={() => handleAnswer(option)}
              className="w-full bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-lg text-left transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {option}
            </motion.button>
          ))}
        </div>

        <div className="text-sm text-gray-500 mt-4 text-right">
          Question {currentIndex + 1} of {questions.length}
        </div>

        {showNextLevel && (
          <div className="text-center mt-8">
            <button
              onClick={() => dispatch(goToNextLevel())}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-xl shadow-xl text-lg hover:opacity-90 transition duration-300"
            >
              🎯 Proceed to Level {level + 1}
            </button>

            <div className="mt-6 bg-white rounded-xl p-4 shadow-md">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Level {level} Summary
              </h2>
              <p className="text-green-600 font-medium">
                ✅ Correct: {prevLevelResult?.correct || 0}
              </p>
              <p className="text-red-600 font-medium">
                ❌ Incorrect: {prevLevelResult?.incorrect || 0}
              </p>
              <ul className="mt-4 text-left max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400">
                {prevLevelAnswers?.map((item, index) => (
                  <li
                    key={index}
                    className={`mb-2 p-3 rounded border-l-4 shadow-sm ${
                      item.isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'
                    }`}
                  >
                    <p className="font-medium text-gray-800">Q: {item.question}</p>
                    <p className={`text-sm ${item.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                      Your Answer: {item.selected}
                    </p>
                    {!item.isCorrect && (
                      <p className="text-sm text-green-600">
                        Correct Answer: {item.correct}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default QuizPage;

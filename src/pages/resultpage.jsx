
// ✅ src/pages/ResultPage.jsx
import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz, toggleReview } from '../features/quiz/redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

function ResultPage() {
  const dispatch = useDispatch();
  const { score, questions, showReview, userAnswers, levelResults } = useSelector((state) => state.quiz);
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 300, height: 300 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const timeout = setTimeout(() => setShowConfetti(false), 5000);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-blue-100 px-4 py-12 text-center relative overflow-hidden">
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} />}

      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-green-700 mb-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        🎉 Congratulations!
      </motion.h1>

      <motion.p
        className="text-xl sm:text-2xl font-medium text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        You scored <span className="text-blue-600 font-bold">{score}</span> out of <span className="text-blue-600 font-bold">{questions.length}</span>
      </motion.p>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <button
          onClick={() => dispatch(toggleReview())}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow transition"
        >
          {showReview ? 'Hide Review' : 'Review Answers'}
        </button>

        <Link
          to="/"
          onClick={() => dispatch(resetQuiz())}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl shadow transition"
        >
          Restart Quiz
        </Link>
      </div>

      {showReview && (
        <motion.div
          className="mt-8 w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-bold mb-4 text-center text-gray-800">📝 Answer Review</h2>
          <ul className="space-y-4 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400">
            {userAnswers.map((item, index) => (
              <li
                key={index}
                className={`p-4 border-l-4 rounded-lg shadow ${
                  item.isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                }`}
              >
                <p className="font-semibold text-gray-800">Q{index + 1}: {item.question}</p>
                <p className={`mt-1 font-medium ${item.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  Your Answer: {item.selected}
                </p>
                {!item.isCorrect && (
                  <p className="text-green-600">Correct Answer: {item.correct}</p>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            {levelResults.map(level => (
              <div key={level.level} className="p-4 bg-white shadow rounded-lg mt-4">
                <h2 className="text-xl font-bold mb-2">Level {level.level} Result</h2>
                <p className="text-green-600">Correct: {level.correct}</p>
                <p className="text-red-600">Incorrect: {level.incorrect}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default ResultPage;

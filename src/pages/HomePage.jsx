// ✅ src/pages/HomePage.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-center px-6 py-12">
      <motion.h1 
        className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Nursing Quiz - Semester 2
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Test your nursing knowledge with fun and interactive questions. Designed for 2nd semester students to boost confidence and learning.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/quiz"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl text-lg shadow-xl transition duration-300"
        >
          Start Quiz
        </Link>
      </motion.div>

      <motion.div
        className="mt-12 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.a
          href="https://www.instagram.com/adhil_nizar?igsh=aHZhZzQ5cmswMGc0"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-md sm:text-lg transition"
        >
          <FaInstagram className="text-3xl sm:text-4xl text-red-600 animate-pulse" />
          Follow Developer
        </motion.a>
      </motion.div>
    </div>
  );
}

export default HomePage;

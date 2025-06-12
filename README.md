# 🧠 Nursing Quiz - Semester 2

An interactive, animated quiz web application built with React, Redux, and Tailwind CSS. Designed to help 2nd semester nursing students test their knowledge with structured, level-based MCQs.

---


src/
│
├── pages/               # HomePage, QuizPage, ResultPage
├── features/
│   └── quiz/            # Redux slice for quiz logic
├── components/          # Shared components (if applicable)
├── assets/              # Images and icons
├── App.jsx              # Root component
└── main.jsx             # React entry point


## 🌟 Features

- ✅ **Level-Based Questions:** Automatically advances to the next level every 10 questions.
- 📊 **Performance Summary:** View correct/incorrect answers at the end of each level and final score.
- 🔁 **Review Mode:** Review each question with selected answers and correct ones.
- 🎉 **Celebration Animation:** Confetti on final result page.
- 📱 **Responsive Design:** Fully responsive across devices.
- ⚙️ **Smooth Animations:** Powered by Framer Motion for transitions and button interactions.

---

## 🚀 Live Demo

https://quiz-d818-adhils-projects-d600a5f8.vercel.app/

---

## 📦 Tech Stack

| Tech        | Usage                  |
|-------------|------------------------|
| **React**   | UI framework           |
| **Redux**   | State management       |
| **Tailwind CSS** | Styling          |
| **Framer Motion** | Animations     |
| **React Router** | Routing between pages |
| **Confetti** | Final celebration animation |

---

## 🛠️ Installation

Clone the repository and run the project locally.

```bash
# Clone the repository
git clone https://github.com/your-username/nursing-quiz-app.git

# Navigate into the project folder
cd nursing-quiz-app

# Install dependencies
npm install

# Start the development server
npm run dev

// ✅ src/features/quiz/quizSlice.js
import { createSlice } from "@reduxjs/toolkit";

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const questionsData = shuffleArray([
  {
    question: "Which vitamin is essential for blood clotting?",
    options: ["Vitamin A", "Vitamin K", "Vitamin D", "Vitamin B12"],
    correctAnswer: "Vitamin K",
  },
  {
    question: "What does ECG stand for?",
    options: [
      "Electrocardiogram",
      "Electroencephalogram",
      "Echocardiography",
      "Electromyography",
    ],
    correctAnswer: "Electrocardiogram",
  },
  {
    question:
      "Which organ is primarily responsible for detoxification in the body?",
    options: ["Kidney", "Liver", "Lungs", "Pancreas"],
    correctAnswer: "Liver",
  },
  {
    question: "Which blood cells are responsible for clotting?",
    options: [
      "Red blood cells",
      "White blood cells",
      "Platelets",
      "Plasma cells",
    ],
    correctAnswer: "Platelets",
  },
  {
    question: "Which part of the brain controls balance and coordination?",
    options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
    correctAnswer: "Cerebellum",
  },
  {
    question: "What is the antidote for heparin overdose?",
    options: ["Vitamin K", "Protamine sulfate", "Naloxone", "Atropine"],
    correctAnswer: "Protamine sulfate",
  },
  {
    question: "Which microorganism causes tuberculosis?",
    options: [
      "Streptococcus pneumoniae",
      "Mycobacterium tuberculosis",
      "Escherichia coli",
      "Staphylococcus aureus",
    ],
    correctAnswer: "Mycobacterium tuberculosis",
  },
  {
    question: "What is the main function of hemoglobin?",
    options: [
      "Fight infection",
      "Blood clotting",
      "Oxygen transport",
      "Digest food",
    ],
    correctAnswer: "Oxygen transport",
  },
  {
    question: "Which electrolyte is crucial for muscle contraction?",
    options: ["Calcium", "Sodium", "Chloride", "Phosphate"],
    correctAnswer: "Calcium",
  },
  {
    question: "Which hormone regulates the sleep-wake cycle?",
    options: ["Serotonin", "Melatonin", "Adrenaline", "Insulin"],
    correctAnswer: "Melatonin",
  },
  {
    question: "What is the main function of insulin in the body?",
    options: [
      "Increase blood pressure",
      "Transport oxygen",
      "Regulate blood sugar",
      "Promote digestion",
    ],
    correctAnswer: "Regulate blood sugar",
  },
  {
    question: "Which type of immunity is provided by vaccination?",
    options: [
      "Passive natural immunity",
      "Active artificial immunity",
      "Passive artificial immunity",
      "Active natural immunity",
    ],
    correctAnswer: "Active artificial immunity",
  },
  {
    question: "What does the term “tachypnea” refer to?",
    options: [
      "Slow heart rate",
      "Rapid breathing",
      "Low blood pressure",
      "Excessive urination",
    ],
    correctAnswer: "Rapid breathing",
  },
  {
    question: "Which structure connects muscles to bones?",
    options: ["Ligaments", "Tendons", "Cartilage", "Fascia"],
    correctAnswer: "Tendons",
  },
  {
    question: "Which microorganism is used in the production of yogurt?",
    options: [
      "Escherichia coli",
      "Lactobacillus",
      "Staphylococcus",
      "Clostridium",
    ],
    correctAnswer: "Lactobacillus",
  },
  {
    question: "Which food is a good source of iron?",
    options: ["Carrots", "Milk", "Spinach", "Apples"],
    correctAnswer: "Spinach",
  },
  {
    question: "What is the normal range for adult respiratory rate?",
    options: [
      "8–12 breaths/min",
      "12–20 breaths/min",
      "20–30 breaths/min",
      "25–35 breaths/min",
    ],
    correctAnswer: "12–20 breaths/min",
  },
  {
    question: "Which part of the cell is responsible for energy production?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Lysosome"],
    correctAnswer: "Mitochondria",
  },
  {
    question: "Which vitamin helps in the absorption of calcium?",
    options: ["Vitamin B12", "Vitamin A", "Vitamin C", "Vitamin D"],
    correctAnswer: "Vitamin D",
  },
  {
    question: "Which cranial nerve is responsible for vision?",
    options: ["Olfactory nerve", "Optic nerve", "Facial nerve", "Vagus nerve"],
    correctAnswer: "Optic nerve",
  },
  {
    question:
      "Which type of white blood cell is primarily involved in allergic reactions?",
    options: ["Neutrophils", "Basophils", "Monocytes", "Lymphocytes"],
    correctAnswer: "Basophils",
  },
  {
    question: "What is the main site of protein digestion?",
    options: ["Mouth", "Stomach", "Large intestine", "Esophagus"],
    correctAnswer: "Stomach",
  },
  {
    question:
      "Which is the preferred injection site for intramuscular injection in adults?",
    options: ["Deltoid", "Forearm", "Gluteus maximus", "Abdomen"],
    correctAnswer: "Deltoid",
  },
  {
    question: "Deficiency of which vitamin causes scurvy?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswer: "Vitamin C",
  },
  {
    question: "Which part of the brain regulates temperature?",
    options: ["Cerebrum", "Hypothalamus", "Thalamus", "Medulla oblongata"],
    correctAnswer: "Hypothalamus",
  },
  {
    question: "Which microorganism is gram-positive?",
    options: [
      "Escherichia coli",
      "Staphylococcus aureus",
      "Salmonella typhi",
      "Neisseria gonorrhoeae",
    ],
    correctAnswer: "Staphylococcus aureus",
  },
  {
    question:
      "Which electrolyte imbalance is most associated with cardiac arrhythmia?",
    options: ["Sodium", "Potassium", "Calcium", "Chloride"],
    correctAnswer: "Potassium",
  },
  {
    question: "Which disorder is characterized by chronic high blood sugar?",
    options: ["Hypertension", "Diabetes mellitus", "Anemia", "Hypothyroidism"],
    correctAnswer: "Diabetes mellitus",
  },
  {
    question:
      "Which theory emphasizes the importance of unconscious mind in behavior?",
    options: [
      "Behavioral theory",
      "Cognitive theory",
      "Psychoanalytic theory",
      "Humanistic theory",
    ],
    correctAnswer: "Psychoanalytic theory",
  },
  {
    question: "Which organ produces bile?",
    options: ["Stomach", "Pancreas", "Liver", "Gallbladder"],
    correctAnswer: "Liver",
  },
  {
    question: "Which class of drugs is used to reduce fever?",
    options: ["Antipyretics", "Analgesics", "Antacids", "Antibiotics"],
    correctAnswer: "Antipyretics",
  },
  {
    question: "What is the causative organism of typhoid fever?",
    options: [
      "Salmonella typhi",
      "Shigella dysenteriae",
      "Vibrio cholerae",
      "Escherichia coli",
    ],
    correctAnswer: "Salmonella typhi",
  },
  {
    question: "Which macronutrient is the main source of energy?",
    options: ["Proteins", "Vitamins", "Carbohydrates", "Minerals"],
    correctAnswer: "Carbohydrates",
  },
  {
    question:
      "Which blood vessel carries oxygenated blood from lungs to heart?",
    options: [
      "Pulmonary artery",
      "Pulmonary vein",
      "Aorta",
      "Superior vena cava",
    ],
    correctAnswer: "Pulmonary vein",
  },
  {
    question: "What is the term for absence of urine output?",
    options: ["Polyuria", "Oliguria", "Anuria", "Nocturia"],
    correctAnswer: "Anuria",
  },
  {
    question: "Which vitamin helps improve night vision?",
    options: ["Vitamin B1", "Vitamin C", "Vitamin A", "Vitamin D"],
    correctAnswer: "Vitamin A",
  },
  {
    question: "Which condition is treated with insulin therapy?",
    options: ["Anemia", "Hypertension", "Diabetes mellitus", "Asthma"],
    correctAnswer: "Diabetes mellitus",
  },
  {
    question:
      "Which part of the nephron is responsible for filtration of blood?",
    options: [
      "Loop of Henle",
      "Bowman’s capsule",
      "Distal tubule",
      "Collecting duct",
    ],
    correctAnswer: "Bowman’s capsule",
  },
  {
    question: "Which pathogen is responsible for causing measles?",
    options: ["Virus", "Bacteria", "Fungus", "Protozoa"],
    correctAnswer: "Virus",
  },
  {
    question:
      "Which enzyme is responsible for the breakdown of starch in the mouth?",
    options: ["Pepsin", "Lipase", "Amylase", "Trypsin"],
    correctAnswer: "Amylase",
  },
  {
    question: "Which hormone is secreted by the pancreas to lower blood sugar?",
    options: ["Glucagon", "Cortisol", "Insulin", "Adrenaline"],
    correctAnswer: "Insulin",
  },
  {
    question: "What is the medical term for difficulty swallowing?",
    options: ["Dysphagia", "Dyspnea", "Dysuria", "Dyspepsia"],
    correctAnswer: "Dysphagia",
  },
  {
    question:
      "Which vitamin is synthesized in the skin upon exposure to sunlight?",
    options: ["Vitamin A", "Vitamin B6", "Vitamin C", "Vitamin D"],
    correctAnswer: "Vitamin D",
  },
  {
    question: "Which part of the brain controls the respiratory rate?",
    options: ["Cerebellum", "Medulla oblongata", "Hypothalamus", "Thalamus"],
    correctAnswer: "Medulla oblongata",
  },
  {
    question:
      "Which method of sterilization is best for metal surgical instruments?",
    options: ["Boiling", "Autoclaving", "UV radiation", "Alcohol wipe"],
    correctAnswer: "Autoclaving",
  },
  {
    question: "What does the term “hematemesis” mean?",
    options: [
      "Blood in stool",
      "Blood in urine",
      "Vomiting blood",
      "Coughing blood",
    ],
    correctAnswer: "Vomiting blood",
  },
  {
    question: "Which trace element is necessary for hemoglobin synthesis?",
    options: ["Zinc", "Calcium", "Iron", "Magnesium"],
    correctAnswer: "Iron",
  },
  {
    question: "Which gland is known as the master gland?",
    options: [
      "Pineal gland",
      "Pituitary gland",
      "Thyroid gland",
      "Adrenal gland",
    ],
    correctAnswer: "Pituitary gland",
  },
  {
    question:
      "Which type of immunity is passed from mother to baby through breast milk?",
    options: [
      "Active natural",
      "Passive natural",
      "Active artificial",
      "Passive artificial",
    ],
    correctAnswer: "Passive natural",
  },

  // Add remaining questions (minimum 100 total) following this structure
]);

const levels = 10;
const questionsPerLevel = Math.floor(questionsData.length / levels);

const initialState = {
  questions: questionsData.map((q) => ({
    ...q,
    options: shuffleArray([...q.options]),
  })),
  currentIndex: 0,
  score: 0,
  completed: false,
  level: 1,
  userAnswers: [],
  levelResults: [],
  showReview: false,
  showNextLevel: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const currentQuestion = state.questions[state.currentIndex];
      const isCorrect = action.payload === currentQuestion.correctAnswer;
      if (isCorrect) state.score++;

      state.userAnswers.push({
        question: currentQuestion.question,
        selected: action.payload,
        correct: currentQuestion.correctAnswer,
        isCorrect,
      });

      const isLevelEnd = (state.currentIndex + 1) % questionsPerLevel === 0;

      if (isLevelEnd || state.currentIndex === state.questions.length - 1) {
        const start =
          state.currentIndex +
          1 -
          (isLevelEnd
            ? questionsPerLevel
            : (state.currentIndex + 1) % questionsPerLevel);
        const currentLevelAnswers = state.userAnswers.slice(
          start,
          state.currentIndex + 1
        );
        const correctCount = currentLevelAnswers.filter(
          (q) => q.isCorrect
        ).length;
        state.levelResults.push({
          level: state.level,
          correct: correctCount,
          incorrect: currentLevelAnswers.length - correctCount,
          answers: currentLevelAnswers,
        });
        state.showNextLevel = true;
      }

      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
      } else {
        state.completed = true;
      }
    },

    goToNextLevel: (state) => {
      state.level++;
      state.showNextLevel = false;
    },

    resetQuiz: (state) => {
      const shuffled = shuffleArray(questionsData).map((q) => ({
        ...q,
        options: shuffleArray([...q.options]),
      }));
      state.questions = shuffled;
      state.currentIndex = 0;
      state.score = 0;
      state.completed = false;
      state.level = 1;
      state.userAnswers = [];
      state.levelResults = [];
      state.showReview = false;
      state.showNextLevel = false;
    },

    toggleReview: (state) => {
      state.showReview = !state.showReview;
    },
  },
});

export const { answerQuestion, resetQuiz, toggleReview, goToNextLevel } =
  quizSlice.actions;
export default quizSlice.reducer;

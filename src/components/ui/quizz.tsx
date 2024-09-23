"use client";
import { useState } from "react";

interface Question {
  question: string;
  options: string[];
  correct: string;
}

interface QuizzProps {
  questions: Question[];
  title?: string;
  buttonText?: string;
  onFinish?: (score: number) => void;
}

export default function Quizz({
  questions,
  title,
  buttonText = "Próxima Pergunta",
  onFinish = (score) => alert(`Você acertou ${score} perguntas!`),
}: QuizzProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleNextQuestion = () => {
    if (selectedOption) {
      if (selectedOption === questions[currentQuestionIndex].correct) {
        setScore(score + 1);
      }

      if (currentQuestionIndex === questions.length - 1) {
        setShowScore(true);
        onFinish(score + (selectedOption === questions[currentQuestionIndex].correct ? 1 : 0));
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      }
    } else {
      alert("Por favor, selecione uma opção.");
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-4">
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Você acertou {score} de {questions.length} perguntas!
          </h2>
        </div>
      ) : (
        <div>
          {title && (
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">{title}</h1>
          )}
          <QuizzQuestion index={currentQuestionIndex + 1}>
            {questions[currentQuestionIndex].question}
          </QuizzQuestion>
          <QuizzOptions>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <QuizzOption
                key={index}
                isSelected={selectedOption === option}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </QuizzOption>
            ))}
          </QuizzOptions>
          <Button onClick={handleNextQuestion}>{buttonText}</Button>
        </div>
      )}
    </div>
  );
}

interface QuizzQuestionProps {
  children: React.ReactNode;
  index: number;
}

function QuizzQuestion({ children, index }: QuizzQuestionProps) {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold text-gray-800">
        {index}. {children}
      </h3>
    </div>
  );
}

interface QuizzOptionsProps {
  children: React.ReactNode;
}

function QuizzOptions({ children }: QuizzOptionsProps) {
  return <div className="space-y-2">{children}</div>;
}

interface QuizzOptionProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

function QuizzOption({ children, isSelected, onClick }: QuizzOptionProps) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg cursor-pointer border ${
        isSelected
          ? "bg-blue-100 border-blue-500"
          : "bg-gray-100 border-gray-300"
      } hover:bg-blue-200 transition-colors`}
    >
      {children}
    </div>
  );
}

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
    >
      {children}
    </button>
  );
}

import Navbar from "@/components/ui/navbar";
import Quizz from "@/components/ui/quizz";
const scienceQuestions = [
    {
      question: "Qual é o elemento mais abundante na Terra?",
      options: ["Oxigênio", "Hidrogênio", "Carbono", "Nitrogênio"],
      correct: "Oxigênio",
    },
    {
        question: "Qual é o elemento mais abundante na Terra?",
        options: ["Oxigênio", "Hidrogênio", "Carbono", "Nitrogênio"],
        correct: "Oxigênio",
      },
      {
        question: "Qual é o elemento mais abundante na Terra?",
        options: ["Oxigênio", "Hidrogênio", "Carbono", "Nitrogênio"],
        correct: "Oxigênio",
      },
      {
        question: "Qual é o elemento mais abundante na Terra?",
        options: ["Oxigênio", "Hidrogênio", "Carbono", "Nitrogênio"],
        correct: "Oxigênio",
      },
      {
        question: "Qual é o elemento mais abundante na Terra?",
        options: ["Oxigênio", "Hidrogênio", "Carbono", "Nitrogênio"],
        correct: "Oxigênio",
      },
  ];
export default function lgpdQuizz1() {
    return (
        <div>
        <Navbar/>
        <div className="mt-[10rem]">
        <Quizz 
            questions={scienceQuestions} 
            title="LGPD Quizz 1" 
            buttonText="Ver Próxima"
            />
        </div>
        </div>
    )
}
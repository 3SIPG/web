import Navbar from "@/components/ui/navbar";
import Quizz from "@/components/ui/quizz";
const lgpdQuestions = [
  {
    question: "O que significa LGPD?",
    options: ["Lei Geral de Proteção de Dados", "Lei Global de Privacidade de Dados", "Lei de Gestão de Processos de Dados", "Lei Geral de Processamento de Dados"],
    correct: "Lei Geral de Proteção de Dados",
  },
  {
    question: "Quem é responsável por fiscalizar o cumprimento da LGPD no Brasil?",
    options: ["ANPD", "CNPD", "Ministério da Justiça", "Banco Central"],
    correct: "ANPD",
  },
  {
    question: "Qual é a principal finalidade da LGPD?",
    options: ["Proteger os dados pessoais dos cidadãos", "Garantir a segurança nacional", "Estabelecer regras de comércio eletrônico", "Controlar as redes sociais"],
    correct: "Proteger os dados pessoais dos cidadãos",
  },
  {
    question: "Qual dos seguintes dados é considerado sensível pela LGPD?",
    options: ["Nome completo", "Endereço de e-mail", "Origem racial", "Número de telefone"],
    correct: "Origem racial",
  },
  {
    question: "Em caso de violação da LGPD, qual é a penalidade máxima aplicada a uma empresa?",
    options: ["Multa de até 2% do faturamento", "Prisão dos responsáveis", "Encerramento da empresa", "Proibição de coletar dados"],
    correct: "Multa de até 2% do faturamento",
  },
];

export default function lgpdQuizz1() {
    return (
        <div>
        <Navbar/>
        <div className="mt-[10rem]">
        <Quizz 
            questions={lgpdQuestions} 
            title="LGPD Quizz 1" 
            buttonText="Ver Próxima"
            />
        </div>
        </div>
    )
}
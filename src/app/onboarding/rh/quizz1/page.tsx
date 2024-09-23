import Navbar from "@/components/ui/navbar";
import Quizz from "@/components/ui/quizz";
const rhQuestions = [
    {
      question: "Em que dia do mês o salário dos funcionários é depositado?",
      options: ["Dia 5", "Dia 15", "Dia 20", "Último dia útil do mês"],
      correct: "Último dia útil do mês",
    },
    {
      question: "Quantos dias de férias um funcionário tem direito a cada ano?",
      options: ["20 dias corridos", "25 dias úteis", "30 dias corridos", "15 dias úteis"],
      correct: "30 dias corridos",
    },
    {
      question: "Qual é o período de pagamento do 13º salário?",
      options: ["Em uma única parcela em dezembro", "Duas parcelas, uma em novembro e outra em dezembro", "Três parcelas, pagas ao longo do ano", "Duas parcelas, uma em outubro e outra em dezembro"],
      correct: "Duas parcelas, uma em novembro e outra em dezembro",
    },
    {
      question: "Quantos dias o funcionário tem para entregar atestado médico em caso de ausência por doença?",
      options: ["1 dia útil", "3 dias úteis", "7 dias corridos", "Até o final do mês"],
      correct: "3 dias úteis",
    },
    {
      question: "Qual o prazo de recebimento do vale-refeição?",
      options: ["No início do mês", "A cada 15 dias", "No último dia útil do mês", "Toda sexta-feira"],
      correct: "No início do mês",
    },
    {
      question: "Qual é o tempo de casa necessário para solicitar licença não remunerada?",
      options: ["6 meses", "1 ano", "2 anos", "Não existe tempo mínimo"],
      correct: "1 ano",
    },
    {
      question: "Em caso de demissão, qual é o prazo para o pagamento das verbas rescisórias?",
      options: ["Até 10 dias após o desligamento", "No mesmo dia do desligamento", "Até 5 dias úteis após o desligamento", "Até o final do mês do desligamento"],
      correct: "Até 10 dias após o desligamento",
    },
    {
      question: "Quantas horas diárias o funcionário deve trabalhar para ter direito ao vale-transporte?",
      options: ["4 horas", "6 horas", "8 horas", "Qualquer jornada, independentemente da carga horária"],
      correct: "Qualquer jornada, independentemente da carga horária",
    },
];


export default function rhQuizz1() {
    return (
        <div>
        <Navbar/>
        <div className="mt-[10rem]">
        <Quizz 
            questions={rhQuestions} 
            title="RH Quizz 1" 
            buttonText="Ver Próxima"
            />
        </div>
        </div>
    )
}
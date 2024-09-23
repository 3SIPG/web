"use client"
import { useRouter } from 'next/navigation';  

type QuizzCategory = 'LGPD' | 'Segurança de Dados' | 'RH';

interface QuizCardProps {
    title: string;
    category?: QuizzCategory;
    description: string;
    path: string;
}


function QuizCard({ title, description, path }: QuizCardProps) {
    const router = useRouter(); 

    
    const handleCardClick = () => {
        router.push(path);  
    };

    return (
        <div 
            className="w-full sm:w-[48%] lg:w-[30%] h-auto p-4 cursor-pointer border rounded-md shadow-md flex flex-col bg-white hover:bg-gray-100 transition-all"
            onClick={handleCardClick}  
        >
            <h1 className="text-xl font-semibold mb-2">{title}</h1>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}

interface ScrollOnboardingProps {
    pageCategory: QuizzCategory;
}


function getQuizzesByCategory(category: QuizzCategory): QuizCardProps[] {
    switch (category) {
        case 'LGPD':
            return [
                { title: 'Quizz LGPD 1', category: 'LGPD', description: 'Conhecimentos básicos sobre LGPD.', path: 'onboarding/lgpd/quizz1' },
                { title: 'Quizz LGPD 2', category: 'LGPD', description: 'Aspectos avançados da LGPD.', path: 'onboarding/lgpd/quizz2' },
                { title: 'Quizz LGPD 3', category: 'LGPD', description: 'Impactos da LGPD nas empresas.', path: 'onboarding/lgpd/quizz3' },
            ];
        case 'Segurança de Dados':
            return [
                { title: 'Segurança de Dados 1', category: 'Segurança de Dados', description: 'Princípios de segurança digital.', path: 'onboarding/dados/quizz1' },
                { title: 'Segurança de Dados 2', category: 'Segurança de Dados', description: 'Melhores práticas de proteção.', path: 'onboarding/dados/quizz2' },
                { title: 'Segurança de Dados 3', category: 'Segurança de Dados', description: 'Prevenção de ataques cibernéticos.', path: 'onboarding/dados/quizz3' },
            ];
        case 'RH':
            return [
                { title: 'RH 1', category: 'RH', description: 'Direitos dos usuários à RH.', path: 'onboarding/rh/quizz1' },
                { title: 'RH 2', category: 'RH', description: 'Melhores práticas para RH.', path: 'onboarding/rh/quizz2' },
                { title: 'RH 3', category: 'RH', description: 'Compliance com regulamentos de RH.', path: 'onboarding/rh/quizz3' },
            ];
        default:
            return [];
    }
}


export default function ScrollOnboarding({ pageCategory }: ScrollOnboardingProps) {
    const quizzes = getQuizzesByCategory(pageCategory);

    return (
        <div className="flex flex-col gap-6 justify-center items-start ml-[.5rem] mt-[5.5rem]">
            <h1 className="text-2xl font-bold">{pageCategory}</h1>
            
            <div className="w-full p-4 border rounded-md shadow-lg bg-gray-50">
                <div className="flex flex-wrap gap-4 justify-center lg:justify-between">
                    {quizzes.map((quiz) => (
                        <QuizCard 
                            key={quiz.title}
                            title={quiz.title}
                            description={quiz.description}
                            path={quiz.path}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

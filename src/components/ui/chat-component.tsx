"use client";
import { SetStateAction, useState, useEffect } from 'react';
import { Card, CardContent } from './card';
import { Button } from './button';

export default function ChatComponent() {
    
    const [step, setStep] = useState(0);
    const [eventDetails, setEventDetails] = useState({
        type: '',
        numberOfPeople: '',
        hasGifts: false,
        trainingObjective: '',
        meetingDuration: '',
        isAnonymous: false,
        email: false
    });
    const [chatHistory, setChatHistory] = useState<Array<{ role: 'assistant' | 'user'; message: string }>>([]);
    const [assistantMessage, setAssistantMessage] = useState('');

    const addMessageToHistory = (role: 'assistant' | 'user', message: string) => {
        setChatHistory((prev) => {
            if (prev.length > 0 && prev[prev.length - 1].role === role && prev[prev.length - 1].message === message) {
                return prev;
            }
            return [...prev, { role, message }];
        });
    };

    useEffect(() => {
        if (step === 0 && chatHistory.length === 0) {
            setAssistantMessage('Olá! Eu sou o seu assistente. O que você gostaria de fazer?');
        } else if (step === 1) {
            handleFirstStep();
        } else if (step === 2) {
            handleSecondStep();
        } else if (step === 3) {
            setAssistantMessage('Você gostaria de enviar um e-mail automático para você mesmo e as opções que você selecionou?');
        }
        
    }, [step]);

    const handleFirstStep = () => {
        switch (eventDetails.type) {
            case 'Planejar um evento':
                setAssistantMessage('Quantas pessoas irão participar do evento?');
                break;
            case 'Treinamento de Equipe':
                setAssistantMessage('Quantas pessoas vão para o treinamento da equipe?');
                break;
            case 'Reunião de Compliance':
                setAssistantMessage('Quantas horas vai demorar a reunião de compliance?');
                break;
            case 'Feedback de Funcionários':
                setAssistantMessage('Você deseja enviar um feedback para todos os funcionários responderem?');
                break;
            default:
                break;
        }
    };

    const handleSecondStep = () => {
        switch (eventDetails.type) {
            case 'Planejar um evento':
                setAssistantMessage('Haverá brindes no evento?');
                break;
            case 'Treinamento de Equipe':
                setAssistantMessage('Qual o objetivo do treinamento?');
                break;
            case 'Reunião de Compliance':
                setAssistantMessage('Qual a duração da reunião?');
                break;
            case 'Feedback de Funcionários':
                setAssistantMessage('Você gostaria de coletar feedback anônimo?');
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (assistantMessage) {
            addMessageToHistory('assistant', assistantMessage);
            setAssistantMessage('');
        }
    }, [assistantMessage]);

    const handleOptionClick = (option: SetStateAction<string>) => {
        setEventDetails(prev => ({ ...prev, type: option }));
        addMessageToHistory('user', `Eu gostaria de fazer um ${option}`)
        setStep(1);
    };

    const handleNumberOfPeopleClick = (number: string) => {
        setEventDetails(prev => ({ ...prev, numberOfPeople: number }));
        addMessageToHistory('user', `Irão participar: ${number}`);
        setStep(2);
    };

    const handleTeamTraining = (number: string) => {
        setEventDetails(prev => ({ ...prev, numberOfPeople: number }));
        addMessageToHistory('user', `Irão participar: ${number}`);
        setStep(2);
    };

    const handleGiftsClick = (hasGifts: boolean) => {
        setEventDetails(prev => ({ ...prev, hasGifts }));
        addMessageToHistory('user', `${hasGifts ? 'Sim, teremos brindes.' : 'Não teremos brindes.'}`);
        setStep(3);
    };

    const handleTrainingObjectiveClick = (objective: string) => {
        setEventDetails(prev => ({ ...prev, trainingObjective: objective }));
        addMessageToHistory('user', `Objetivo do Treinamento: ${objective}`);
        setStep(3);
    };

    const handleMeetingDurationClick = (duration: string) => {
        setEventDetails(prev => ({ ...prev, meetingDuration: duration }));
        addMessageToHistory('user', `Duração da Reunião: ${duration}`);
        setStep(3);
    };

    const handleAnonymousClick = (isAnonymous: boolean) => {
        setEventDetails(prev => ({ ...prev, isAnonymous }));
        addMessageToHistory('user', `${isAnonymous ? 'Eu gostaria de coletar feedback anonimo.' : 'Não, eu não gostaria que fosse anonimo.'}`);
        setStep(3);
    };

    const handleEmailClick = (email: boolean) => {
        setEventDetails(prev => ({ ...prev, email }));
        addMessageToHistory('user', `${email ? 'Sim, eu gostaria de enviar um e-mail' : 'Não, eu não preciso de e-mail.'}`);
        if (email) {
            sendEmail(eventDetails);
        }
        setStep(4);
    };


    const handleStartNewEvent = () => {
        setChatHistory([]);
        setEventDetails({
            type: '',
            numberOfPeople: '',
            hasGifts: false,
            trainingObjective: '',
            meetingDuration: '',
            isAnonymous: false,
            email: false,
        });
        setStep(0);
    };

    const calculateCost = () => {
        if (eventDetails.type === 'Planejar um evento') {
            let cost = 0;
            const peopleCount = parseInt(eventDetails.numberOfPeople.replace(/[^0-9]/g, '')) || 0;
            cost += peopleCount * 1000; // Custo base por pessoa
            if (eventDetails.hasGifts) cost += 88000;
            return cost;
        }
        return 0; // Outros tipos de eventos não têm custo
    };


    const sendEmail = async (eventDetails: any) => {
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventDetails),
            });
    
            if (!response.ok) {
                throw new Error('Falha ao enviar o e-mail');
            }
    
            console.log('E-mail enviado com sucesso');
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
        }
    };
    
    return (
        <Card>
            <CardContent className="w-[80vw] h-[80vh] p-4">
                <div className="flex flex-col h-full overflow-y-auto space-y-4">
                    <div className="flex flex-col space-y-2">
                        <div className="flex flex-col space-y-2">
                            {chatHistory.map((entry, index) => (
                                <div key={index} className={`flex ${entry.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div
                                        className={`p-3 rounded-lg max-w-md ${entry.role === 'user' ? 'bg-gray-200 text-gray-800' : 'bg-blue-100 text-blue-800'}`}
                                    >
                                        <p>{entry.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {step === 0 && (
                            <div className="flex space-x-2 mt-2">
                                <Button onClick={() => handleOptionClick('Planejar um evento')}>Planejar um evento</Button>
                                <Button onClick={() => handleOptionClick('Treinamento de Equipe')}>Treinamento de Equipe</Button>
                                <Button onClick={() => handleOptionClick('Reunião de Compliance')}>Reunião de Compliance</Button>
                                <Button onClick={() => handleOptionClick('Feedback de Funcionários')}>Feedback de Funcionários</Button>
                            </div>
                        )}
                        {step === 1 && (
                            <div className="flex items-center space-x-2 mt-2">
                                 {eventDetails.type === 'Planejar um evento' && (
                                    <>
                                       <Button onClick={() => handleNumberOfPeopleClick('80')}>80</Button>
                                       <Button onClick={() => handleNumberOfPeopleClick('160')}>160</Button>
                                       <Button onClick={() => handleNumberOfPeopleClick('240+')}>240+</Button>
                                    </>
                                )}
                                {eventDetails.type === 'Treinamento de Equipe' && (
                                    <>
                                    <Button onClick={() => handleTeamTraining('Toda a equipe')}>Toda a equipe</Button>
                                    <Button onClick={() => handleTeamTraining('Personalizado')}>Personalizado...</Button>
                                    </>
                                )}
                                 {eventDetails.type === 'Reunião de Compliance' && (
                                    <>
                                        <Button onClick={() => handleMeetingDurationClick('1 hora')}>1 hora</Button>
                                        <Button onClick={() => handleMeetingDurationClick('2 horas')}>2 horas</Button>
                                        <Button onClick={() => handleMeetingDurationClick('Meio dia')}>Meio dia</Button>
                                    </>
                                )}
                                {eventDetails.type === 'Feedback de Funcionários' && (
                                    <>
                                        <Button onClick={() => handleAnonymousClick(true)}>Sim</Button>
                                        <Button onClick={() => handleAnonymousClick(false)}>Não</Button>
                                    </>
                                )}
                            </div>
                        )}
                        {step === 2 && (
                            <div className="flex items-center space-x-2 mt-2">
                                {eventDetails.type === 'Planejar um evento' && (
                                    <>
                                        <Button onClick={() => handleGiftsClick(true)}>Sim</Button>
                                        <Button onClick={() => handleGiftsClick(false)}>Não</Button>
                                    </>
                                )}
                                {eventDetails.type === 'Treinamento de Equipe' && (
                                    <>
                                        <Button onClick={() => handleTrainingObjectiveClick('Desenvolvimento de Habilidades')}>Desenvolvimento de Habilidades</Button>
                                        <Button onClick={() => handleTrainingObjectiveClick('Integração de Equipe')}>Integração de Equipe</Button>
                                    </>
                                )}
                                {eventDetails.type === 'Reunião de Compliance' && (
                                    <>
                                        <Button onClick={() => handleMeetingDurationClick('1 hora')}>1 hora</Button>
                                        <Button onClick={() => handleMeetingDurationClick('2 horas')}>2 horas</Button>
                                        <Button onClick={() => handleMeetingDurationClick('Meio dia')}>Meio dia</Button>
                                    </>
                                )}
                                {eventDetails.type === 'Feedback de Funcionários' && (
                                    <>
                                        <Button onClick={() => handleAnonymousClick(true)}>Sim</Button>
                                        <Button onClick={() => handleAnonymousClick(false)}>Não</Button>
                                    </>
                                )}
                            </div>
                        )}
                        {step === 3 && (
                            <div className="flex items-center space-x-2 mt-2">
                               <Button onClick={() => handleEmailClick(true)}>Sim</Button>
                               <Button onClick={() => handleEmailClick(false)}>Não</Button>
                            </div>
                        )}
                        {step === 4 && (
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 text-blue-800 p-3 rounded-lg max-w-md">
                                    <p>Resumo:</p>
                                    <ul className="list-disc pl-5">
                                        <li>Tipo: {eventDetails.type}</li>
                                        <li>Número de Pessoas: {eventDetails.numberOfPeople}</li>
                                        <li>E-mail: {eventDetails.email ? 'Sim' : 'Nao'}</li>
                                        {eventDetails.type === 'Planejar um evento' && (
                                            <li>Brindes: {eventDetails.hasGifts ? 'Sim' : 'Não'}</li>
                                        )}
                                        {eventDetails.type === 'Treinamento de Equipe' && (
                                            <li>Objetivo: {eventDetails.trainingObjective}</li>
                                        )}
                                        {eventDetails.type === 'Reunião de Compliance' && (
                                            <li>Duração: {eventDetails.meetingDuration}</li>
                                        )}
                                        {eventDetails.type === 'Feedback de Funcionários' && (
                                            <li>Feedback Anônimo: {eventDetails.isAnonymous ? 'Sim' : 'Não'}</li>
                                        )}
                                        {eventDetails.type === 'Planejar um evento' && (
                                            <li>Custo Estimado: R$ {calculateCost().toLocaleString('pt-BR')}</li>
                                        )}
                                    </ul>
                                    <p>Obrigado por fornecer as informações. Se precisar de mais ajuda, estou aqui!</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='flex flex-row gap-4'>
                    {step === 4 && (
                        <div className="flex space-x-2 mt-2">
                            <Button onClick={handleStartNewEvent}>Iniciar Novo Evento</Button>
                        </div>
                    )}
                    {step > 0 && (
                        <div className="flex justify-between items-center mt-2">
                            <Button onClick={() => setStep((prev) => Math.max(prev - 1, 0))}>Voltar</Button>
                        </div>
                    )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

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
        cost: 0,
    });
    const [chatHistory, setChatHistory] = useState<Array<{ role: 'assistant' | 'user'; message: string }>>([]);
    const [assistantMessage, setAssistantMessage] = useState('');

    // Calcula o custo com base no número de pessoas e se há brindes
    const calculateCost = (numberOfPeople: string, hasGifts: boolean) => {
        let costPerPerson = 1000; // Custo base por pessoa
        let additionalCost = 0;

        if (hasGifts) {
            additionalCost = 88000;
        }

        const peopleCount = parseInt(numberOfPeople.replace(/[^0-9]/g, ''));
        return peopleCount * costPerPerson + additionalCost;
    };

    const addMessageToHistory = (role: 'assistant' | 'user', message: string) => {
        setChatHistory((prev) => {
            // Evita adicionar mensagens duplicadas
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
            setAssistantMessage('Quantas pessoas participarão do evento?');
        } else if (step === 2) {
            setAssistantMessage('Haverá brindes no evento?');
        }
    }, [step]);

    useEffect(() => {
        if (assistantMessage) {
            addMessageToHistory('assistant', assistantMessage);
            setAssistantMessage(''); // Limpa a mensagem após adicioná-la
        }
    }, [assistantMessage]);

    const handleOptionClick = (option: SetStateAction<number>) => {
        if (option === 1) {
            setStep(option);
        } else if (option === 0) {
            addMessageToHistory('assistant', 'Operação cancelada.');
            setChatHistory([]);
            setEventDetails({
                type: '',
                numberOfPeople: '',
                hasGifts: false,
                cost: 0,
            });
            setStep(option);
        }
    };

    const handleNumberOfPeopleClick = (number: string) => {
        setEventDetails((prev) => {
            const newCost = calculateCost(number, prev.hasGifts);
            return {
                ...prev,
                numberOfPeople: number,
                cost: newCost,
            };
        });
        addMessageToHistory('user', `Número de Pessoas: ${number}`);
        setStep(2); // Avançar para a próxima pergunta
    };

    const handleGiftsClick = (hasGifts: boolean) => {
        setEventDetails((prev) => {
            const newCost = calculateCost(prev.numberOfPeople, hasGifts);
            return {
                ...prev,
                hasGifts,
                cost: newCost,
            };
        });
        addMessageToHistory('user', `Brindes: ${hasGifts ? 'Sim' : 'Não'}`);
        setStep(3); // Avançar para a próxima etapa
    };

    const handleBack = () => {
        setStep((prev) => Math.max(prev - 1, 0)); // Voltar para a etapa anterior, mínimo de 0
    };

    const handleStartNewEvent = () => {
        setChatHistory([]);
        setEventDetails({
            type: '',
            numberOfPeople: '',
            hasGifts: false,
            cost: 0,
        });
        setStep(0);
    };

    return (
        <Card>
            <CardContent className="w-[80vw] h-[80vh] p-4">
                <div className="flex flex-col h-full overflow-y-auto space-y-4">
                    <div className="flex flex-col space-y-2">
                        {/* Exibir histórico de mensagens */}
                        <div className="flex flex-col space-y-2">
                            {chatHistory.map((entry, index) => (
                                <div key={index} className={`flex ${entry.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div
                                        className={`p-3 rounded-lg max-w-md ${
                                            entry.role === 'user'
                                                ? 'bg-gray-200 text-gray-800'
                                                : 'bg-blue-100 text-blue-800'
                                        }`}
                                    >
                                        <p>{entry.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Perguntas e respostas */}
                        {step === 0 && (
                            <div className="flex space-x-2 mt-2">
                                <Button
                                    onClick={() => {
                                        addMessageToHistory('user', 'Planejar um evento');
                                        handleOptionClick(1);
                                    }}
                                >
                                    Planejar um evento
                                </Button>
                                <Button
                                    onClick={() => {
                                        addMessageToHistory('user', 'Cancelar');
                                        handleOptionClick(0);
                                    }}
                                >
                                    Cancelar
                                </Button>
                            </div>
                        )}
                        {step === 1 && (
                            <div className="flex items-center space-x-2 mt-2">
                                <Button onClick={() => handleNumberOfPeopleClick('80')}>80</Button>
                                <Button onClick={() => handleNumberOfPeopleClick('160')}>160</Button>
                                <Button onClick={() => handleNumberOfPeopleClick('240+')}>240+</Button>
                            </div>
                        )}
                        {step === 2 && (
                            <div className="flex items-center space-x-2 mt-2">
                                <Button onClick={() => handleGiftsClick(true)}>Sim</Button>
                                <Button onClick={() => handleGiftsClick(false)}>Não</Button>
                            </div>
                        )}
                        {step === 3 && (
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 text-blue-800 p-3 rounded-lg max-w-md">
                                    <p>Resumo do Evento:</p>
                                    <ul className="list-disc pl-5">
                                        <li>Tipo de Evento: Planejamento</li>
                                        <li>Número de Pessoas: {eventDetails.numberOfPeople}</li>
                                        <li>Brindes: {eventDetails.hasGifts ? 'Sim' : 'Não'}</li>
                                        <li>Custo Estimado: R$ {eventDetails.cost.toLocaleString('pt-BR')}</li>
                                    </ul>
                                    <p>Obrigado por fornecer as informações. Se precisar de mais ajuda, estou aqui!</p>
                                </div>
                            </div>
                        )}
                    </div>
                    {step === 3 && (
                        <div className="flex space-x-2 mt-2">
                            <Button onClick={handleStartNewEvent}>Iniciar Novo Evento</Button>
                        </div>
                    )}
                     {step > 0 && (
                        <div className="flex justify-between items-center mt-2">
                            <Button onClick={handleBack}>Voltar</Button>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

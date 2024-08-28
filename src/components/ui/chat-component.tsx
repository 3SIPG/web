"use client"
import { SetStateAction, useState } from 'react';
import { Card, CardContent } from './card';
import { Button } from './button';

export default function ChatComponent() {
    const [step, setStep] = useState(0);
    const [eventDetails, setEventDetails] = useState({
        type: '',
        numberOfPeople: '',
        hasGifts: false,
    });

    const handleOptionClick = (option: SetStateAction<number>) => {
        setStep(option);
    };

    const handleNumberOfPeopleClick = (number: string) => {
        setEventDetails((prev) => ({
            ...prev,
            numberOfPeople: number,
        }));
        setStep(2); // Avançar para a primeira pergunta
    };

    const handleGiftsClick = (hasGifts : boolean) => {
        setEventDetails((prev) => ({
            ...prev,
            hasGifts,
        }));
        setStep(3); // Avançar para a segunda pergunta
    };

    return (
        <Card>
            <CardContent className="w-[80%] h-[80%]">
                <div className="chat-container">
                    <div className="chat-message bot-message">
                        {step === 0 && (
                            <>
                                <p>Olá! Eu sou o seu assistente. Estamos pensando em organizar um evento. O que você gostaria de fazer?</p>
                                <div className="options-container">
                                    <Button onClick={() => handleOptionClick(1)}>Planejar um evento</Button>
                                    <Button onClick={() => handleOptionClick(0)}>Cancelar</Button>
                                </div>
                            </>
                        )}
                        {step === 1 && (
                            <>
                                <p>Quantas pessoas participarão do evento?</p>
                                <div className="options-container">
                                    <Button onClick={() => handleNumberOfPeopleClick('80')}>80</Button>
                                    <Button onClick={() => handleNumberOfPeopleClick('160')}>160</Button>
                                    <Button onClick={() => handleNumberOfPeopleClick('240+')}>240+</Button>
                                </div>
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <p>Haverá brindes no evento?</p>
                                <div className="options-container">
                                    <Button onClick={() => handleGiftsClick(true)}>Sim</Button>
                                    <Button onClick={() => handleGiftsClick(false)}>Não</Button>
                                </div>
                            </>
                        )}
                        {step === 3 && (
                            <>
                                <p>Resumo do Evento:</p>
                                <ul>
                                    <li>Tipo de Evento: Planejamento</li>
                                    <li>Número de Pessoas: {eventDetails.numberOfPeople}</li>
                                    <li>Brindes: {eventDetails.hasGifts ? 'Sim' : 'Não'}</li>
                                </ul>
                                <p>Obrigado por fornecer as informações. Se precisar de mais ajuda, estou aqui!</p>
                                <Button onClick={() => setStep(0)}>Iniciar Novo Evento</Button>
                            </>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

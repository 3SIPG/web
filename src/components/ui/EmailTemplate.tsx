import { Html } from '@react-email/components';

interface EmailProps {
    eventDetails: {
        type: string;
        numberOfPeople: string;
        hasGifts: boolean;
        trainingObjective: string;
        meetingDuration: string;
        isAnonymous: boolean;
        email: boolean;
    };
}

export function EmailTemplate({ eventDetails }: EmailProps) {
    return (
        <Html>
            <h1>Resumo do Evento</h1>
            <ul>
                <li>Tipo: {eventDetails.type}</li>
                <li>Número de Pessoas: {eventDetails.numberOfPeople}</li>
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
                <li>Enviar E-mail: {eventDetails.email ? 'Sim' : 'Não'}</li>
            </ul>
            <p>Obrigado por fornecer as informações!</p>
        </Html>
    );
}

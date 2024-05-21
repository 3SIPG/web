"use client"
import React, { useState } from 'react';
import { BotMessageSquare, Brain, Clapperboard, Eye, Home, LogOut, LucideIcon, Menu, Settings, User, X } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
interface Option {
    icon: LucideIcon;
    title: string;
}

const options: Option[] = [
    {
        icon: Home,
        title: "Portal" 
    },
    {
        icon: BotMessageSquare,
        title: "Chatbot"
     },
    {
        icon: Brain,
        title: "IA" 
    },
    {
        icon: Clapperboard,
        title: "Onboarding" 
    },
    {
        icon: User,
        title: "Presença" 
    }
];

export default function Sidebar() {

    const [isMinimized, setIsMinimized] = useState(true);

    const toggleSidebar = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div className={`h-screen bg-primary-euro-300 p-4 flex flex-col justify-between ${isMinimized ? 'w-16 items-center' : 'w-64'}`}>
        <div>
            <div className="flex justify-between items-center mb-4">
                {!isMinimized && <span className="text-gray-300 text-lg font-bold">Menu</span>}
                <button onClick={toggleSidebar} className="p-2 text-gray-300 hover:bg-primary-euro-400 rounded">
                    {isMinimized ? <Menu className="w-6 h-6"/> : <X className="w-6 h-6"/>}
                </button>
            </div>
            <div className="flex flex-col items-center gap-4">
                {options.map((option, index) => (
                    <div key={index} className={`flex items-center p-2 text-gray-300 hover:bg-primary-euro-400 cursor-pointer w-full ${isMinimized ? 'justify-center' : ''}`}>
                         <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                          <option.icon className="w-6 h-6"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            {option.title}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                        {!isMinimized &&  <span className="ml-4">{option.title}</span>}
                    </div>
                ))}
            </div>
        </div>
        <div className={`flex items-center p-2 text-gray-300 hover:bg-primary-euro-400 cursor-pointer ${isMinimized ? 'justify-center' : ''}`}>
            <LogOut className="w-6 h-6"/>
            {!isMinimized && <span className="ml-4">Log Out</span>}
        </div>
    </div>
    );
};

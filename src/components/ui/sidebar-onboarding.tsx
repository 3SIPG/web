"use client"
import React, { useState } from 'react';
import { BotMessageSquare, Brain, Clapperboard, Cog, Home, LogOut, LucideIcon, Menu, User, X } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
interface Option {
    icon: LucideIcon;
    title: string;
    link: string;
}

const options: Option[] = [
    {
        icon: Home,
        title: "Portal",
        link: "/" 
    },
    {
        icon: BotMessageSquare,
        title: "Chatbot",
        link: "/chatbot"
     },
    {
        icon: Brain,
        title: "IA",
        link: "/ia" 
    },
    {
        icon: Clapperboard,
        title: "Onboarding",
        link: "/onboarding"
    },
    {
        icon: User,
        title: "Presença",
        link: "" 
    }
];

export default function SidebarOnboarding() {

    const [isMinimized, setIsMinimized] = useState(true);

    const toggleSidebar = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div className={`h-screen bg-euro-primary-300 p-4 flex flex-col justify-between ${isMinimized ? 'w-16 items-center' : 'w-64'}`}>
        <div>
            <div className="flex justify-between items-center mb-4">
                {!isMinimized && <span className="text-gray-300 text-lg font-bold">Menu</span>}
                <button onClick={toggleSidebar} className="p-2 text-gray-300 hover:bg-primary-euro-400 rounded">
                    {isMinimized ? <Menu className="w-6 h-6"/> : <X className="w-6 h-6"/>}
                </button>
            </div>
        </div>
        <div className={`flex flex-col gap-4 items-left p-2 text-gray-300 hover:bg-primary-euro-400 cursor-pointer ${isMinimized ? 'justify-center' : ''}`}>
            <DropdownMenu>
            <DropdownMenuTrigger className='flex flex-row'>
            <Cog className='w-6 h-6'/>
            {!isMinimized && <span className="ml-4">Navegação</span>}
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-euro-primary-200 border-euro-primary-200'>
            {options.map((option, index) => (
                    <Link href={option.link.toString()} key={index} className="flex items-center bg-euro-primary-300 border-inherit p-2 text-gray-300 hover:bg-primary-euro-400 cursor-pointer w-full ">
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
                    <span className="ml-4">{option.title}</span>
                    </Link>
                ))}
            </DropdownMenuContent>
            </DropdownMenu>
            <div className='flex flex-row'>
            <LogOut className="w-6 h-6"/>
            {!isMinimized && <span className="ml-4">Sair</span>}
            </div>
        </div>
    </div>
    );
};

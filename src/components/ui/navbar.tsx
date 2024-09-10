"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';

interface Option {
    title: string;
    link: string;
}

const options: Option[] = [
    {
        title: "Portal",
        link: "/dashboard/funcionario" 
    },
    {
        title: "Chatbot",
        link: "/chatbot"
    },
    {
        title: "IA",
        link: "/ia"
    },
    {
        title: "Onboarding",
        link: "/onboarding"
    },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-0 left-0 right-0 bg-euro-primary-300 p-4 flex justify-between items-center z-50">
            <div className="flex items-center">
                <button onClick={toggleMenu} className="p-2 text-gray-300 hover:bg-primary-euro-400 rounded lg:hidden">
                    {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                </button>
                <span className="text-gray-300 text-lg font-bold ml-4">Eurofarma</span>
            </div>
            <div className={`flex-col lg:flex-row lg:flex items-center gap-4 absolute lg:relative top-full left-0 right-0 lg:top-auto bg-euro-primary-300 lg:bg-transparent ${isMenuOpen ? 'flex' : 'hidden'} lg:flex`}>
                {options.map((option, index) => (
                    <Link href={option.link.toString()} key={index} className="flex items-center p-2 text-gray-300 hover:bg-primary-euro-400 cursor-pointer">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span>{option.title}</span>
                                </TooltipTrigger>
                                <TooltipContent>
                                    {option.title}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </Link>
                ))}
            </div>
            <div className="flex items-center p-2 text-gray-300 hover:bg-primary-euro-400 cursor-pointer">
                <span>Log Out</span>
            </div>
        </div>
    );
}

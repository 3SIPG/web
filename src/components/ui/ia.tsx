'use client'
import { Input } from "./input";
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Separator } from "./separator";
import { useChat } from 'ai/react';
import { ScrollArea } from "./scroll-area";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from 'axios'
import { v4 } from 'uuid'

const apiUrl = 'http://localhost:3002'
const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    timeout: 5000
  };

  interface Message {
    id: string;
    role: string;
    content: string;
  }
  

export default function Ia() {
    
    const [inputQuestion, setInputQuestion] = useState<string>(''); // Removi o | null aqui
  
    const [messages, setMessages] = useState<Message[]>([]);
  
    const handleQuestionChange = (event: ChangeEvent<HTMLInputElement>) => {
      const question = event.target.value;
      setInputQuestion(question);
    };
  
  
    const AddMessage = (role: string, content: string) => {
      const newMessage: Message = {
        id: v4(),
        role,
        content,
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
    };
  
    const Ask = async (event: FormEvent) => {
      event.preventDefault();
      if (!inputQuestion) return;
      AddMessage('user', inputQuestion);
      try {
        const dataToSend = {
          question: inputQuestion,
        };
        setInputQuestion('')
        const result = await axios.post(`${apiUrl}/ask`, dataToSend);
        const objeto: { message: string } = result.data; // Defina o tipo do objeto
        AddMessage('assistant', objeto.message);
        
      } catch (error) {
        console.error(error);
      }
     
    }
    return (
    <div className='flex justify-center items-center ml-44'>
    <Card className='grid grid-rows-[min-content_1fr_min-content] w-[70vw] h-[80vh] gap-2 flex-col p-5'>
        <CardHeader>
        <CardDescription>
          Inteligência artificial da Eurofarma.
        </CardDescription>
        <Separator />
        </CardHeader>
        <CardContent className="w-full">
        <ScrollArea className="w-full h-[52vh] rounded-sm p-4">

            { messages.map(message => {
                return(
                    <div className="mt-[1.5rem]" key={message.id}>
                    {message.role === 'user' ? (
                        <div className="flex justify-end">
                            <p className="text-center max-w-[70vw] font-sans rounded-3xl px-5 py-2.5 bg-zinc-300 border border-zinc-300">
                                {message.content}
                            </p>
                        </div>
                    ) : (
                        <div className="flex font-sans justify-start flex-row gap-4 max-w-[70vw]">
                            <p>
                                {message.content}
                            </p>
                        </div>
                    )}
                </div>
                )
            })}
             </ScrollArea>
        </CardContent>
        <CardFooter>
            <form onSubmit={Ask} className='flex flex-row gap-4 w-full'>
            <Input
              id="input"
             placeholder='Como posso te ajudar hoje?'
             value={inputQuestion}
             onChange={handleQuestionChange}
             />
            <Button type='submit' className='bg-euro-primary-400 hover:bg-euro-primary-600'>Pesquisar</Button>
            
            </form>
        </CardFooter>
    </Card>

    </div>
)
}
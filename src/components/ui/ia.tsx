'use client';
import { Input } from "./input";
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Separator } from "./separator";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from 'axios';
import { v4 } from 'uuid';
import { ScrollArea } from "./scroll-area";

const apiUrl = 'http://localhost:3002';

interface Message {
  id: string;
  role: string;
  content: string;
}

export default function Ia() {
  const [inputQuestion, setInputQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleQuestionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputQuestion(event.target.value);
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
      const dataToSend = { question: inputQuestion };
      setInputQuestion('');
      const result = await axios.post(`${apiUrl}/ask`, dataToSend);
      const { message } = result.data;
      AddMessage('assistant', message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex justify-center items-center ml-38'>
      <Card className='grid grid-rows-[min-content_1fr_min-content] w-[70vw] h-[80vh] gap-2 flex-col p-5'>
        <CardHeader>
          <CardDescription>
            Inteligência artificial da Eurofarma.
          </CardDescription>
          <Separator />
        </CardHeader>
        <CardContent className="w-full">
          <ScrollArea className="w-full h-[52vh] rounded-sm p-4">
            {messages.map(message => (
              <div className="mt-[1.5rem]" key={message.id}>
                {message.role === 'user' ? (
                  <div className="flex justify-end">
                    <p className="text-center max-w-[70vw] font-sans rounded-3xl px-5 py-2.5 bg-zinc-300 border border-zinc-300">
                      {message.content}
                    </p>
                  </div>
                ) : (
                  <div className="flex font-sans justify-start flex-row gap-4 ">
                    <p className="max-w-[40vw] bg-neutral-200 border border-neutral-200 rounded-3xl px-5 py-2.5">{message.content}</p>
                  </div>
                )}
              </div>
            ))}
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
            <Button type='submit' className='bg-euro-primary-400 hover:bg-euro-primary-600'>
              Perguntar
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}

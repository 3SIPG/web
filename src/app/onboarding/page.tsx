import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Folder, User } from "lucide-react";

 export default function Onboarding() {
   return (
     <div>
       <aside className="inset-y fixed w-[20rem] left-0 z-20 flex h-full flex-col border-r">
         <div className="text-left border-b-[1px] flex flex-col justify-center p-4 gap-[.75rem]">
            <h1>Treinamento de novos funcionarios</h1>
            <div className="flex flex-row gap-[1rem] justify-center items-center">
            <Progress value={76}/>
            <p>76%</p>
            </div>
         </div>
          <nav className="grid gap-1 p-2">
          <Accordion type="single" collapsible className="w-full h-[50%]">
            <AccordionItem value="item-1">
            <AccordionTrigger>
               <div className="flex flex-row justify-center gap-[2rem] items-center">
               <Folder/>
               <h1>LGPD</h1>
               </div>
            </AccordionTrigger>
            <AccordionContent>
               <ul className="flex gap-2 flex-col">
                  <li className="cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 1</li>
                  <li className="cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 2</li>
                  <li className="cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 3</li>
               </ul>
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
            <AccordionTrigger>
               <div className="flex flex-row justify-center gap-[2rem] items-center">
               <User/>
               <h1>RH</h1>
               </div>
            </AccordionTrigger>
            <AccordionContent>
            <ul className="flex gap-2 flex-col">
                  <li className="cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 1</li>
                  <li className="cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 2</li>
                  <li className="cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 3</li>
               </ul>
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
            <AccordionTrigger>Teste</AccordionTrigger>
            <AccordionContent>
            <ul className="flex gap-2 flex-col">
                  <li className="cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 1</li>
                  <li className="cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 2</li>
                  <li className="cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 3</li>
               </ul>
            </AccordionContent>
            </AccordionItem>
         </Accordion>
          </nav>
        </aside>
     </div>
   )
 }
 
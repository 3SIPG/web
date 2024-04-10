import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

 export default function Onboarding() {
   return (
     <div>
       <aside className="inset-y fixed w-[12rem] left-0 z-20 flex h-full flex-col border-r">
          <div className="border-b gap-2 w-full p-4">
            <h1>Onboarding</h1>
          </div>
          <nav className="grid gap-1 p-2">
          <Accordion type="single" collapsible className="w-full h-[50%]">
            <AccordionItem value="item-1">
            <AccordionTrigger>LGPD</AccordionTrigger>
            <AccordionContent>
               <ul className="flex gap-2 flex-col">
                  <li className="cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 1</li>
                  <li className="cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 2</li>
                  <li className="cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 3</li>
               </ul>
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
            <AccordionTrigger>RH</AccordionTrigger>
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
 
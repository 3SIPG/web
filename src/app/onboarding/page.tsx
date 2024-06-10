import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Folder, User, ArrowRight, Landmark, Wallet, BriefcaseBusiness, CheckCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

 export default function Onboarding() {
   return (
     <div className="overflow-x-hidden">
       <aside className="inset-y fixed w-[20rem] left-0 z-20 flex h-full flex-col border-r">
         <div className="text-left border-b-[1px] flex flex-col justify-center p-4 gap-[.75rem]">
            <h1 className="font-bold text-md">Treinamento de novos funcionarios</h1>
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
                  <li className="flex flex-row items-center gap-3 cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 1 <CheckCheck color="#2397b6"/></li>
                  <li className="flex flex-row items-center gap-3 cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 2 <CheckCheck color="#2397b6"/></li>
                  <li className="flex flex-row items-center gap-3 cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 3 <CheckCheck color="#2397b6"/></li>
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
            <AccordionTrigger>
            <div className="flex flex-row justify-center gap-[2rem] items-center">
               <Landmark/>
               <h1>Sobre a empresa</h1>
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
            <AccordionItem value="item-4">
            <AccordionTrigger><div className="flex flex-row justify-center gap-[2rem] items-center">
               <Wallet/>
               <h1>Beneficios</h1>
               </div>
               </AccordionTrigger>
            <AccordionContent>
            <ul className="flex gap-2 flex-col">
                  <li className="cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 1 - VR & VA</li>
                  <li className="cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 2 - VT</li>
                  <li className="cursor-pointer hover:border-b-euro-blue-500 hover:border-b p-1">Video 3 - Férias e outros!</li>
               </ul>
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
            <AccordionTrigger><div className="flex flex-row justify-center gap-[2rem] items-center">
               <BriefcaseBusiness/>
               <h1>Sobre o seu cargo</h1>
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
         </Accordion>
         <Link href="/portal" className="mt-[16.5rem] flex flex-row gap-2 cursor-pointer">
            <ArrowLeft/> Portal
         </Link>
          </nav>
        </aside>
        <div>
        <div className="flex ml-[20rem] p-[2rem] w-full border-b font-bold text-lg">
         <h1>Vídeo 1 - LGPD - Conceitos</h1>
        </div>
        <div className="flex ml-[20rem] overflow-y-hidden">
         <iframe src="http://www.youtube.com/embed/1xLE0zVkeFE"  width={1600} height={720}></iframe>
        </div>
        <nav className="flex justify-end p-4 ml-[20rem]">
         <Button className="bg-euro-blue-400 hover:bg-euro-blue-200">Próximo vídeo
         <ArrowRight />
         </Button>
        </nav>
        </div>
     </div>
   )
 }
 
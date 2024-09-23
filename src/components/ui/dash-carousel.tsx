"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

export function DashCarousel() {

  interface DashProps {
    title: string;
    description: string;
    link: string;
    backgroundImage: string;  
    textColor: "white" | "blue" | "black";
  }

  const items: DashProps[] = [
    {
      title: "Quizz 1 - LGPD",
      description: "Venha ver nosso primeiro Quizz sobre LGPD!",
      link: "/onboarding/lgpd/quizz1",
      backgroundImage: "/assets/quizz.png", 
      textColor: "white",
    },
    {
      title: "Quizz 1 - RH",
      description: "Venha conferir o nosso Quizz sobre perguntas de RH!",
      link: "/onboarding/rh/quizz1",
      backgroundImage: "/assets/quizz2.png",
      textColor: "black",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  // Função para mapear a cor do texto
  const getTextColorClass = (color: "white" | "blue" | "black") => {
    switch (color) {
      case "white":
        return "text-white";
      case "blue":
        return "text-blue-500";
      case "black":
        return "text-black";
      default:
        return "text-white"; // valor padrão
    }
  };

  return (
    <Carousel
      className="w-full max-w-xs"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent
                  className="flex flex-col aspect-auto h-[15rem] items-center justify-center p-6"
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className={`text-4xl font-semibold ${getTextColorClass(item.textColor)}`}>
                    {item.title}
                  </span>
                  <p className={`mt-2 ${getTextColorClass(item.textColor)}`}>
                    {item.description}
                  </p>
                  <Link href={item.link}>
                    <p className={`underline ${getTextColorClass(item.textColor)}`}>Link</p>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

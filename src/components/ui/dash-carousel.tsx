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
    backgroundImage: string;  // Nova propriedade para a imagem de fundo
  }

  const items: DashProps[] = [
    {
      title: "Quizz 1 - LGPD",
      description: "Venha ver nosso primeiro Quizz sobre LGPD!",
      link: "/",
      backgroundImage: "/assets/quizz.png", 
    },
    {
      title: "Training",
      description: "Team training sessions",
      link: "/training",
      backgroundImage: "assets/quizz2.png",
    },
    {
      title: "Projects",
      description: "Overview of ongoing projects",
      link: "/projects",
      backgroundImage: "/path-to-image3.jpg",
    },
    {
      title: "Support",
      description: "Get support for your issues",
      link: "/support",
      backgroundImage: "/path-to-image4.jpg",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

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
                  <span className="text-4xl font-semibold text-white">
                    {item.title}
                  </span>
                  <p className="mt-2 text-white">{item.description}.</p>
                  <Link href={item.link}>
                    <p className="text-white underline">Link</p>
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

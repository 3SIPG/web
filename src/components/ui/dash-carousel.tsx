"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

export function DashCarousel() {

interface DashProps {
    title: String,
    description: String,
    link: String,
}

const items: DashProps[] = [
   {
    title: "Onboarding",
    description: "Our new on boarding",
    link: "/",
   },
   {
    title: "Onboarding",
    description: "Our new on boarding",
    link: "/",
   },
   {
    title: "On",
    description: "Our new on boarding",
    link: "/",
   },
   {
    title: "Onboarding",
    description: "Our new on boarding",
    link: "/",
   },
   {
    title: "Onboarding",
    description: "Our new on boarding",
    link: "/",
   },
]

const plugin = React.useRef(
  Autoplay({ delay: 2000, stopOnInteraction: true })
)

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
                <CardContent className="flex flex-col aspect-auto h-[15rem] items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{item.title}</span>
                  <p className="mt-2">{item.description}.</p>
                  <Link href={item.link.toString()}>
                    <p className="text-euro-text-400">
                        Link
                    </p>
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
  )
}

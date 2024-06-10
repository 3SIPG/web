import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Link from "next/link"

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
   }
]

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
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
    </Carousel>
  )
}

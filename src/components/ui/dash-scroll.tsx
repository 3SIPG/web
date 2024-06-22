import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export interface IVideos {
  category: string
  thumbnail: string
}

export const works: IVideos[] = [
  {
    category: "Ornella Binni",
    thumbnail: "https://github.com/leozvx.png",
  },
  {
    category: "Tom Byrom",
    thumbnail: "https://github.com/leozvx.png",
  },
  {
    category: "Vladimir Malyavko",
    thumbnail: "https://github.com/leozvx.png",
  },
  {
    category: "Ornella Binni",
    thumbnail: "https://github.com/leozvx.png",
  },
  {
    category: "Tom Byrom",
    thumbnail: "https://github.com/leozvx.png",
  },
  {
    category: "Vladimir Malyavko",
    thumbnail: "https://github.com/leozvx.png",
  },
  {
    category: "Ornella Binni",
    thumbnail: "https://github.com/leozvx.png",
  },
  {
    category: "Tom Byrom",
    thumbnail: "https://github.com/leozvx.png",
  },
  {
    category: "Vladimir Malyavko",
    thumbnail: "https://github.com/leozvx.png",
  },
  {
    category: "Ornella Binni",
    thumbnail: "https://github.com/leozvx.png",
  },
  {
    category: "Tom Byrom",
    thumbnail: "https://github.com/leozvx.png",
  },
  {
    category: "Vladimir Malyavko",
    thumbnail: "https://github.com/leozvx.png",
  },
]

export function DashScroll() {
  return (
    <ScrollArea className="w-[80rem] whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.thumbnail}
                alt={`Photo by ${artwork.category}`}
                className="aspect-[4/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Vídeo sobre{" "}
              <span className="font-semibold text-foreground">
                {artwork.thumbnail}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

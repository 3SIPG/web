import * as React from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface IVideos {
  id: string;
  title: string;
  url: string;
  banner: string;
}

interface DashScrollProps {
  works: IVideos[];
}

export function DashScroll({ works }: DashScrollProps) {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {works.map((video) => (
          <figure key={video.id} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={video.banner}
                alt={video.title}
                className="aspect-[4/3] object-cover w-[200px] h-[200px]"
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Noticia sobre{" "}
              <span className="font-semibold text-foreground h-[30px]">
                {video.title}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

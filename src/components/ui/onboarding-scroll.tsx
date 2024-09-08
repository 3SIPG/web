import * as React from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface IVideos {
  id: string;
  title: string;
  url: string;
  banner: string;
}

interface OnboardingScrollProps {
  works: IVideos[];
}

export function OnboardingScroll({ works }: OnboardingScrollProps) {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {works.map((video) => (
          <figure key={video.id} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={video.banner}
                alt={video.title}
                className="aspect-[4/3] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Vídeo sobre{" "}
              <span className="font-semibold text-foreground">
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

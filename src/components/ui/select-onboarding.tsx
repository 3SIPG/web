"use client";

import axios from "axios";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { ScrollArea } from "./scroll-area";
import Link from "next/link";

interface Category {
  id: string;
  title: string;
  videos: Array<{ id: string, title: string, url: string, banner: string }>;
}

async function getCategory() {
  try {
    const response = await axios.get("http://localhost:8080/onboard");
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export default function SelectOnboarding() {
  const [isVisible, setIsVisible] = useState(true);
  const [category, setCategory] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const fetchCategory = async () => {
    try {
      const response = await getCategory();
      setCategory(response);
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleSelectChange = (value: string) => {
    const selected = category.find(cat => cat.id === value) || null;
    setSelectedCategory(selected);
    setIsVisible(false)
  };

  return (
    <main>
      <div>
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger> 
            <SelectValue placeholder="Selecione uma categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {category.map((categories) => (
                <SelectItem key={categories.id} value={categories.id}>
                  {categories.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <ScrollArea className="w-[93vw] h-[89vh] rounded-md border mt-[.5rem] overflow-auto">
        <div className="grid grid-cols-2 gap-2 w-[100vw] mt-[5rem]">
          {isVisible ? (
          <div className="ml-4 top-[20rem] left-[30rem] absolute">
          <h1> Porfavor, selecione uma categoria para começar!</h1>
          </div>
          ) 
         :
        (
          selectedCategory?.videos.map((video) => (
            <div className="flex flex-col items-center justify-center text-center p-[2rem]">
              <Link href={`http://localhost:3000/onboarding/${selectedCategory.id}/${video.id}`}>
              <img className="cursor-pointer" width={360} height={360} src={video.banner} alt={video.id}/>
              <h1>{video.title}</h1>
              </Link>
            </div>
          ))
        )
         }
        </div>
          </ScrollArea>
      </div>
    </main>
  );
}

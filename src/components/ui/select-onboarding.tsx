import axios from "axios";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";

interface Category {
  id: string;
  title: string;
  videos: Array<{ id: string, title: string, url: string }>;
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
        <ul>
          {selectedCategory?.videos.map((video) => (
            <li key={video.id}>
              <a href={video.url}>{video.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

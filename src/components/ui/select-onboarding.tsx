"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { DashScroll } from "./dash-scroll"; // Import DashScroll component

interface Video {
  id: string;
  title: string;
  url: string;
  banner: string;
}

interface Category {
  id: string;
  title: string;
  videos: Video[];
}

async function fetchCategories() {
  try {
    const response = await axios.get("http://localhost:8080/onboard");
    return response.data;
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default function Onboarding() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };
    loadCategories();
  }, []);

  return (
    <main className="p-4">
      {categories.length === 0 ? (
        <div className="text-center">Loading...</div>
      ) : (
        categories.map((category) => (
          <div key={category.id} className="mb-6 mt-[2rem]">
            <h2 className="text-lg font-bold mb-2">{category.title}</h2>
            <DashScroll works={category.videos} />
          </div>
        ))
      )}
    </main>
  );
}

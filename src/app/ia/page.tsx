import Ia from "@/components/ui/ia";
import Navbar from "@/components/ui/navbar";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "IA | Eurofarma",
    description: "Generated by create next app",
    icons: {
      icon: "/icon.png",
    }
  };
export default function IaPage() {
    return (
        <main className="flex flex-col">
        <Navbar/>
        <div className="mt-[6rem]">
        <Ia/>
        </div>
        </main>
    )
}
import { DashCarousel } from "@/components/ui/dash-carousel";
import { DashScroll } from "@/components/ui/dash-scroll";
import Sidebar from "@/components/ui/sidebar";

export default function Aluno() {
    return (
    <div className="flex">
        <div>
        <Sidebar/>
        </div>
        <div className="flex-1">
        <div className="flex justify-center p-4 mr-[10rem]">
        <DashCarousel/>
        </div>
        <div className="w-full p-2 ml-6">
        <h1 className="text-[24px] text-euro-text-400">
        Recent videos
        </h1>
        <DashScroll/>
        </div>
        </div>
    </div>
    )
}
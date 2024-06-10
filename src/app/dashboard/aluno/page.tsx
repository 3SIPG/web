import { DashCarousel } from "@/components/ui/dash-carousel";
import { DashScroll } from "@/components/ui/dash-scroll";
import Sidebar from "@/components/ui/sidebar";

export default function Aluno() {
    return (
    <div>
        <div>
        <Sidebar/>
        </div>
        <div>
        <DashCarousel/>
        </div>
        <div>
        <DashScroll/>
        </div>
    </div>
    )
}
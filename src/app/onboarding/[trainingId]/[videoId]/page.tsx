import { getVideoId } from "@/app/services/get-video-id"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import NextButton from "@/components/ui/next-button"
import PrevButton from "@/components/ui/prev-button"
import Navbar from "@/components/ui/navbar"


export default async function videoId({ params } : { params: { videoId : string, trainingId: string }}) {
    const video = await getVideoId(params.videoId, params.trainingId)
  
    return (
        <main className="flex flex-row gap-4">
            <div>
            <Navbar/>
            </div>
            <div className="absolute left-[36rem] top-[5rem]">
            <Breadcrumb>
            <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink href="/onboarding">Onboarding</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
            <BreadcrumbItem>{params.videoId}</BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>
            <h1>{video.title}</h1>
            <iframe src={video.url} width={360} height={360} />
            <PrevButton params={{
                    videoId: params.videoId,
                    trainingId: params.trainingId
                }}/>
            <NextButton params={{
                    videoId: params.videoId,
                    trainingId: params.trainingId
                }}/>
            </div>
        </main>
    )
}
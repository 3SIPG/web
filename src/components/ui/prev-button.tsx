"use client";

import { useRouter } from "next/navigation"
import { Button } from "./button";

export default function PrevButton({ params } : { params: { videoId : string, trainingId: string }}) {
    const router = useRouter()
    function nextVideo() {
    router.push(`http://localhost:3000/onboarding/${params.trainingId}/${parseInt(params.videoId, 10) - 1}`)
    }
    return (
        <Button onClick={nextVideo}>Prev</Button>
    )
}
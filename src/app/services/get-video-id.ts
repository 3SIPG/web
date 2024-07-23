import axios from "axios";

export async function getVideoId(videoId: string, trainingId: string) {
    const response = await axios.get(`http://localhost:8080/onboard/${trainingId}/${videoId}`)
    return response.data;
}
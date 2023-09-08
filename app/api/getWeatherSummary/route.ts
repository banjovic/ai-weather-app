import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    // weather data in the body of the POST request
    const { weatherData } = await request.json()

    // communicate with openAI GPT
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: 'system',
                content: `Pretend you're a weather news presenter LIVE on television. Be energetic and full of charisma. Introduce yourself as Vee and say you are LIVE from Vee Headquarters. State the city you are providing a summary for. Then give a summary of today's weather only. Make it easy for the viewer to understand and know what to do to prepare for those weather conditions such as 'wear SPF if the UV is high' and so on. Use the uv_index data provide to provide UV advice. And if there is none, provide a joke regarding that. In presenting the news, attach a joke regarding the weather information provided. Assume the data came from your team at the news office and not the user`,
            },
            {
                role: 'user',
                content: `Hi there, can I get a summary of today's weather, use the following information to get the weather data: ${JSON.stringify(weatherData)}`,
            },
        ],
    });

    const data = response

    // return NextResponse.json(response)
    return NextResponse.json(data.choices[0].message)
}
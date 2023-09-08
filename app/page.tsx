"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#394f68] to-[#18387e] p-10 flex flex-col justify-center items-center'>
      <Card className='max-w-4xl mx-auto bg-white rounded-lg'>
        <Text className='text-6xl font-bold text-center mb-10'>
          GPT 3.5 Weather App
        </Text>
        <Subtitle className='text-xl text-center'>
          Powered by OpenAI, Next.js 13.4, Tailwind CSS, Tremor 2.0 & More!
        </Subtitle>

        <Divider className='my-10' />

        <Card className='bg-gradient-to-br from-[#394f68] to-[#18387e] rounded-lg'>
          {/* City Picker */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}

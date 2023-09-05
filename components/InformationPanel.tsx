import React from "react";
import CityPicker from "./CityPicker";
import weatherCodeToString from "@/lib/weatherCodeToString";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

type Props = {
  city: string;
  lat: string;
  long: string;
  result: Root;
};

const InformationPanel = ({ city, lat, long, result }: Props) => {
  return (
    <div className='bg-gradient-to-br from-[#394f68] to-[#18387e] text-white p-10'>
      <div className='pb-5 space-y-3'>
        <h1 className='text-6xl font-bold'>{decodeURI(city)}</h1>
        <p className='text-xs text-gray-400'>
          Long/Lat: {long}, {lat}
        </p>
      </div>

      <CityPicker />

      <hr className='my-10' />

      <div className='mt-5 flex items-center justify-between space-x-10 mb-5'>
        <div>
          <p className='text-xl'>
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p className='font-extralight'>
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>

        <p className='text-xl font-bold'>
          {new Date().toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>

      <hr className='mt-10 mb-5' />

      <div className='flex items-center justify-between'>
        <div>
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeToString[result.current_weather.weathercode].icon
            }.png`}
            alt={weatherCodeToString[result.current_weather.weathercode].label}
            width={75}
            height={75}
          />

          <div className='flex items-center justify-between space-x-10'>
            <p className='text-6xl font-semibold'>
              {result.current_weather.temperature.toFixed(1)}°C
            </p>

            <p className='text-right font-extralight text-lg'>
              {weatherCodeToString[result.current_weather.weathercode].label}
            </p>
          </div>
        </div>
      </div>

      <div className='space-y-2 py-5'>
        <div className='flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]'>
          <SunIcon className='h-10 w-10 text-gray-400' />

          <div className='flex-1 flex justify-between items-center'>
            <p className='font-extralight'>Sunrise</p>
            <p className='uppercase text-2xl'>
              {result.daily.sunrise &&
                new Date(result.daily.sunrise[0]).toLocaleTimeString("en-GB", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
            </p>
          </div>
        </div>

        <div className='flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]'>
          <MoonIcon className='h-10 w-10 text-gray-400' />

          <div className='flex-1 flex justify-between items-center'>
            <p className='font-extralight'>Sunset</p>
            <p className='uppercase text-2xl'>
              {result.daily.sunset &&
                new Date(result.daily.sunset[0]).toLocaleTimeString("en-GB", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPanel;

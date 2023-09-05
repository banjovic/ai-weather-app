import { getClient } from "@/apollo-client";
import CallOutCard from "@/components/CallOutCard";
import InformationPanel from "@/components/InformationPanel";
import RainChart from "@/components/RainChart";
import StatsCard from "@/components/StatsCard";
import TempChart from "@/components/TempChart";
import fetchWeatherQueries from "@/graphql/queries/fetchWeatherQueries";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

const WeatherPage = async ({ params: { city, lat, long } }: Props) => {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQueries,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
      daily: "",
      hourly: "",
    },
  });

  const result: Root = data.myQuery;

  console.log(result.daily);

  return (
    <div className='flex flex-col min-h-screen md:flex-row'>
      <InformationPanel city={city} result={result} lat={lat} long={long} />

      <div className='flex-1 p-5 lg:p-10'>
        <div className='p-5'>
          <div className='pb-5'>
            <h2 className='text-xl font-bold'>Todays Overview</h2>
            <p className='text-sm text-gray-400'>
              Last Updated at:
              {new Date(result.current_weather.time).toLocaleString()} (
              {result.timezone})
            </p>
          </div>

          <div className='m-2 mb-10'>
            <CallOutCard message='This is where GPT-3.5 Summary will go!' />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 m-2'>
            <StatsCard
              title='Maximum Temperature'
              metric={`${
                result.daily.temperature_2m_max &&
                result.daily.temperature_2m_max[0].toFixed(1)
              }°`}
              color='yellow'
            />

            <StatsCard
              title='Minimum Temperature'
              metric={`${
                result.daily.temperature_2m_min &&
                result.daily.temperature_2m_min[0].toFixed(1)
              }°`}
              color='green'
            />

            <div>
              <StatsCard
                title='UV Index'
                metric={`${
                  result.daily.uv_index_max &&
                  result.daily.uv_index_max[0].toFixed(1)
                }°`}
                color='rose'
              />

              {result.daily.uv_index_max &&
                Number(result.daily.uv_index_max[0].toFixed(1)) > 5 && (
                  <CallOutCard
                    message={"The UV is high today, be sure to wear SPF!"}
                    warning
                  />
                )}
            </div>

            <div className='flex space-x-3'>
              <StatsCard
                title='Wind Speed'
                metric={`${result.current_weather.windspeed.toFixed(1)}m/s`}
                color='cyan'
              />

              <StatsCard
                title='Wind Direction'
                metric={`${result.current_weather.winddirection.toFixed(1)}°`}
                color='violet'
              />
            </div>
          </div>
        </div>

        <hr className='mb-5' />

        <div className='space-y-3'>
          <TempChart result={result} />
          <RainChart result={result} />
          {/* <HumidityChart /> */}
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;

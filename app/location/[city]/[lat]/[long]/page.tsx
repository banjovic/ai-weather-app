import { getClient } from '@/apollo-client';
import fetchWeatherQueries from '@/graphql/queries/fetchWeatherQueries';

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
      current_weather: 'true',
      longitude: long,
      latitude: lat,
      timezone: 'GMT',
    },
  });

  const result: Root = data.myQuery;

  console.log(result);

  return (
    <div>
      Welcome to the Weather Page: {city} {lat} {long}
    </div>
  );
};

export default WeatherPage;

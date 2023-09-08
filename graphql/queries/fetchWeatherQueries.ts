import { gql } from '@apollo/client';

const fetchWeatherQueries = gql`
  query MyQuery (
    $current_weather: String
    $daily: String = "apparent_temperature_max,apparent_temperature_min,sunrise,sunset,temperature_2m_min,temperature_2m_max,time,uv_index_clear_sky_max,uv_index_max,weathercode"
    $hourly: String = "apparent_temperature,dewpoint_2m,is_day,precipitation,precipitation_probability,rain,showers,relativehumidity_2m,snow_depth,snowfall,time,uv_index,temperature_2m,uv_index_clear_sky,weathercode"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  )  {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      latitude: $latitude
      hourly: $hourly
      longitude: $longitude
      timezone: $timezone
    ) {
      current_weather {
        is_day
        temperature
        time
        winddirection
        weathercode
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_min
        temperature_2m_max
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        weathercode
        uv_index_max
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        dewpoint_2m
        is_day
        precipitation
        precipitation_probability
        rain
        showers
        relativehumidity_2m
        snow_depth
        snowfall
        time
        uv_index
        temperature_2m
        uv_index_clear_sky
        weathercode
      }
      hourly_units {
        apparent_temperature
        dewpoint_2m
        precipitation
        is_day
        precipitation_probability
        rain
        showers
        relativehumidity_2m
        snow_depth
        temperature_2m
        time
        snowfall
        uv_index
        uv_index_clear_sky
        weathercode
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;

export default fetchWeatherQueries;
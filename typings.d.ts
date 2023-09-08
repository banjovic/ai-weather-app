interface CurrentWeather {
    is_day: number;
    temperature: number;
    time: string;
    weathercode: number;
    winddirection: number;
    windspeed: number;
}

interface Daily {
    time: [string];
    weathercode: [number];
    temperature_2m_max: [number];
    temperature_2m_min: [number];
    apparent_temperature_max: [number]
    apparent_temperature_min: [number]
    sunrise: [string];
    sunset: [string];
    uv_index_max: [number];
    uv_index_clear_sky_max: [number];
}

interface DailyUnits {
    sunrise: string;
    sunset: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    time: string;
    uv_index_clear_sky_max: string;
    uv_index_max: string;
    weathercode: string;
    apparent_temperature_max: string;
    apparent_temperature_min: string;
}

interface Hourly {
    time: [string];
    temperature_2m: [number];
    relativehumidity_2m: [number];
    dewpoint_2m: [number];
    apparent_temperature: [number];
    precipitation_probability: [number];
    precipitation: [number];
    rain: [number];
    showers: [number];
    snowfall: [number];
    snow_depth: [number];
    weathercode: [number];
    uv_index: [number];
    uv_index_clear_sky: [number];
    is_day: [number]
}

interface HourlyUnits {
    apparent_temperature: string;
    dewpoint_2m: string;
    precipitation: string;
    precipitation_probability: string;
    rain: string;
    relativehumidity_2m: string;
    showers: string;
    snow_depth: string;
    snowfall: string;
    temperature_2m: string;
    time: string;
    uv_index: string;
    uv_index_clear_sky: string;
    is_day: string
    weathercode: string
}

interface Root {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_weather: CurrentWeather;
    hourly_units: HourlyUnits;
    hourly: Hourly;
    daily_units: DailyUnits;
    daily: Daily;
}

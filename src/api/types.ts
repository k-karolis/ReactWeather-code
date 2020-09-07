export interface IWeatherData {
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
        humidity: number;
        wind_speed: number;
    };
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    name: string;
}

export interface IExtendedForecastData {
    day: string;
    temp_day: number;
    temp_night: number;

    windSpeed: number;
    humidity: number;

    temp: {
        temp_min: number;
        temp_max: number;
    };
    weather: {
        id: number;
        main: string;
    };
}

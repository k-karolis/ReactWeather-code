import React from "react";
import { useSelector } from "react-redux";
import { AppStore } from "../../../store/appStore";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { ChartContainer } from "./styled";

const Chart = () => {
    const { forecast } = useSelector((state: AppStore) => ({
        forecast: state.weather.extendedWeatherData,
    }));
    console.log(forecast);

    return (
        <ChartContainer>
            <LineChart
                width={800}
                height={500}
                data={forecast}
                margin={{ top: 5, right: 30, left: 20, bottom: 10 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" angle={-45} textAnchor="end" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={36} margin={{ top: 20 }} />
                <Line
                    name="Day Temperature (°C)"
                    type="monotone"
                    dataKey="temp_day"
                    stroke="#cc2222"
                />
                <Line
                    name="Night Temperature (°C)"
                    type="monotone"
                    dataKey="temp_night"
                    stroke="#0000ff"
                />
                <Line
                    name="Wind Speed (kmh)"
                    type="monotone"
                    dataKey="windSpeed"
                    stroke="#8884d8"
                />
                <Line
                    name="Humidity (%)"
                    type="monotone"
                    dataKey="humidity"
                    stroke="#82ca9d"
                />
            </LineChart>
        </ChartContainer>
    );
};

export default Chart;

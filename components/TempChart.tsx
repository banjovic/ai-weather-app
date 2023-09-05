"use client";

import { AreaChart, Card, Title } from "@tremor/react";
import React from "react";

type Props = {
  result: Root;
};

const TempChart = ({ result }: Props) => {
  const hourly = result?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-GB", {
        hour: "numeric",
        hour12: false,
      })
    )
    .slice(0, 24);

  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    "UV Index": result?.hourly?.uv_index,
    "Temperature (C)": result?.hourly?.temperature_2m,
  }));

  const dataFormatter = (number: number) => `${number}°C`;

  return (
    <Card>
      <Title>Temperature & UV Index</Title>
      <AreaChart
        className='mt-6'
        data={data}
        showLegend
        index='time'
        categories={["Temperature (C)", "UV Index"]}
        minValue={0}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default TempChart;

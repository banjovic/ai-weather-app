"use client";

import { AreaChart, Card, Title } from "@tremor/react";
import React from "react";

type Props = {
  result: Root;
};

const RainChart = ({ result }: Props) => {
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
    "Rain (%)": result?.hourly?.precipitation_probability,
  }));

  const dataFormatter = (number: number) => `${number}°C`;

  return (
    <Card>
      <Title>Chances of Rain</Title>
      <AreaChart
        className='mt-6'
        data={data}
        showLegend
        index='time'
        categories={["Rain (%)"]}
        colors={["blue"]}
        minValue={0}
        maxValue={100}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default RainChart;

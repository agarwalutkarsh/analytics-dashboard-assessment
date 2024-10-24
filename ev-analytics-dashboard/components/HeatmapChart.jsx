"use client"

import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
    loading: () => <p>Loading...</p>
})

const HeatmapChart = () => {
  const series = [
    {
      name: 'Seattle',
      data: [15, 30, 45], // Example data: charging stations in different regions/times
    },
    {
      name: 'Bothell',
      data: [10, 25, 35],
    },
    {
      name: 'Olympia',
      data: [5, 15, 25],
    },
    {
      name: 'Yakima',
      data: [8, 12, 20],
    },
  ];

  const options = {
    chart: {
      type: 'heatmap',
    },
    title: {
      text: 'Charging Station Distribution by City',
      align: 'center',
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        colorScale: {
          ranges: [
            { from: 0, to: 10, color: '#ffeb3b' },
            { from: 11, to: 30, color: '#f57c00' },
            { from: 31, to: 50, color: '#e65100' },
          ],
        },
      },
    },
    xaxis: {
      categories: ['Region 1', 'Region 2', 'Region 3'], // Example regions
    },
  };


  return (
    <div>
      <Chart options={options} series={series} type="heatmap" height={350} />
    </div>
  );
};

export default HeatmapChart;

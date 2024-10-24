
"use client"


import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
    loading: () => <p>Loading...</p>
})

const LineChart = () => {
    const series = [{
        name: 'Electric Range',
        data: [150, 220, 350, 400], // Example range data (could be averages per year)
    }];
    const options = {
        chart: {
            type: 'line',
        },
        title: {
            text: 'Electric Vehicle Range by Model Year',
            align: 'center',
        },
        xaxis: {
            categories: [2015, 2017, 2019, 2021], // Example years
        },
        yaxis: {
            title: {
                text: 'Range (miles)',
            },
        },
    };
    return (
        <div>
            <Chart options={options} series={series} type="line" height={350} />
        </div>
    );
};

export default LineChart;

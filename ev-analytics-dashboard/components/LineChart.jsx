
"use client"


import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getElectricRangeDistribution } from '@/GlobalFunctions/HelperFunctions';
const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
    loading: () => <p>Loading...</p>
})

const LineChart = () => {

    useEffect(() => {
    const rangeArr = getElectricRangeDistribution()
    console.log(rangeArr)
    }, [])

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
        <div  className="bg-white p-4 m-4 rounded-2xl border-[#cccccc] border-1 shadow-md ">
            <Chart options={options} series={series} type="line" height={350} />
        </div>
    );
};

export default LineChart;


"use client"


import React, { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { getCountByManufacterer, getProducedInYear } from '@/GlobalFunctions/HelperFunctions';
import { MainContext } from './ContextApi/MainContext';
const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
    loading: () => <p>Loading...</p>
})

const LineChart = () => {
    const mainContext = useContext(MainContext)
    const [prodCountArr, setProdCountArr] = useState([])
    const [prodYrArr, setProdYrArr] = useState([])

    const [makeProdCountArr, setMakeProdCountArr] = useState([])

    useEffect(() => {
        const productionArr = getProducedInYear()

        setProdCountArr(
            productionArr?.map(item => item?.count)
        )
        setProdYrArr(
            productionArr?.map(item => item?.production)
        )

        const manufactererCountObj = getCountByManufacterer(mainContext?.sidebarFilters?.make ?? "")

        const manufactererCountArr = productionArr?.map(item => item?.production)?.map(year => (
            {
                production: year,
                count: manufactererCountObj[year] ?? 0
            }
        ))        
        setMakeProdCountArr(
            manufactererCountArr?.map(item => item?.count)
        )
    }, [mainContext?.sidebarFilters?.make])

    const series = [
        {
            name: 'No. of Total EVs',
            data: [...prodCountArr],
        },
        {
            name: `No. of ${mainContext?.sidebarFilters?.make}`,
            data: [...makeProdCountArr]
        }
    ];
    const options = {
        chart: {
            type: 'line',
        },
        title: {
            text: 'Electric Vehicle in Market by Year',
            align: 'left',
        },
        xaxis: {
            categories: [...prodYrArr],
        },
        yaxis: {
            title: {
                text: 'EVs in Market',
            },
        },
    };
    return (
        <div className="bg-white p-4 m-4 rounded-2xl border-[#cccccc] border-1 shadow-md ">
            <Chart options={options} series={series} type="line" height={350} />
        </div>
    );
};

export default LineChart;

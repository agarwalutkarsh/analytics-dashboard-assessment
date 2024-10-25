
"use client"


import React, { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { getCountByManufacterer, getProducedInYear } from '@/GlobalFunctions/HelperFunctions';
import { MainContext } from './ContextApi/MainContext';

// Dynamic import for apex charts

const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
    loading: () => <p className=" text-2xl font-semibold text-center h-44 ">Loading...</p>
})

const LineChart = () => {
    const mainContext = useContext(MainContext)
    // Line Chart data
    const [prodCountArr, setProdCountArr] = useState([])
    const [prodYrArr, setProdYrArr] = useState([])

    const [makeProdCountArr, setMakeProdCountArr] = useState([])

    // Data manipulation
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

    // Setting up graph
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
            fontFamily: 'Nunito'
        },
        xaxis: {
            categories: [...prodYrArr],
            labels: {
                style: {
                    fontFamily: 'Nunito',
                    fontSize: '13px',
                    fontWeight: 'bold'
                }
            }
        },
        yaxis: {
            title: {
                text: 'EVs in Market',
                fontFamily: 'Nunito',
                style: {
                    fontFamily: 'Nunito',
                    fontSize: '13px'
                }
            },
        },
        legend: {
            fontSize: "13px",
            fontFamily: "Nunito",
            fontWeight: 'bold'
        }
    };
    return (
        <div className="bg-white p-4 m-4 rounded-2xl border-[#cccccc] border-1 shadow-md ">
            <p className='text-xl font-bold ml-2'>Electric Vehicle in Market by Year</p>
            <Chart options={options} series={series} type="line" height={350} />
        </div>
    );
};

export default LineChart;

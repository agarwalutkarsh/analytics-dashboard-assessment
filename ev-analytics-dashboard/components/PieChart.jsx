"use client"

import { getEVTypeDistribution } from '@/GlobalFunctions/HelperFunctions';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const Chart = dynamic(() => import("react-apexcharts"), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

const PieChart = () => {

  const [type, setType] = useState([])
  const [value, setValue] = useState([])
  

  useEffect(() => {
    const evType = getEVTypeDistribution()
    console.log(evType)
    const typesArr = evType?.map(item => item?.type)
    const valuesArr = evType?.map(item => item?.count)
    setType([...typesArr])
    setValue([...valuesArr])
  }, [])

  const series = [...value]; // Example market shares
  const options = {
    chart: {
      type: 'pie',
    },
    labels: [...type],
    title: {
      text: 'Distribution of Electric Vehicle Types',
      align: 'center',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
  };

  return (
    <div  className="bg-white p-4 m-4 rounded-2xl border-[#cccccc] border-1 shadow-md ">
      <Chart options={options} series={series} type="pie" height={350} />
    </div>
  );
};

export default PieChart;

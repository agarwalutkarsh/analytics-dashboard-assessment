"use client"

import { getEVTypeDistribution } from '@/GlobalFunctions/HelperFunctions';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const Chart = dynamic(() => import("react-apexcharts"), {
  loading: () => <p className=" text-2xl font-semibold text-center h-44 ">Loading...</p>,
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
      fontFamily: 'Nunito',
      fontWeight: 'bold',
    },
    legend: {
      position: 'bottom',
      fontSize: "13px",
      fontFamily: "Nunito",
      fontWeight: 'bold'
    },
    labels: [...type],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
      },
    }],
  };

  return (
    <div  className="bg-white p-4 m-4 rounded-2xl border-[#cccccc] border-1 shadow-md ">
      <p className='text-xl font-bold ml-2'>Distribution of Electric Vehicle Types</p>
      <Chart options={options} series={series} type="pie" height={350} />
    </div>
  );
};

export default PieChart;

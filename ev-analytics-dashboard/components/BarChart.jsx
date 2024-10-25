"use client";


import { getMakeCountByCity } from "@/GlobalFunctions/HelperFunctions";
import dynamic from "next/dynamic";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "./ContextApi/MainContext";

// Dynamic Loading for the apex charts

const Chart = dynamic(() => import("react-apexcharts"), {
  loading: () => <p className=" text-2xl font-semibold text-center h-44 ">Loading...</p>,
  ssr: false
});

const BarChart = () => {
  const mainContext = useContext(MainContext)
  // Bar chart states
  const [make, setMake] = useState([])
  const [count, setCount] = useState([])

  // Data manipulation
  useEffect(() => {
    const makeArr = getMakeCountByCity(mainContext?.sidebarFilters?.city, mainContext?.sidebarFilters?.year)

    const makeDistributor = makeArr?.reduce((acc, curr) => {
      acc.push(curr?.make)
      return acc
    }, [])

    const countOfDistributor = makeArr?.map(curr => curr?.count)

    setMake([...makeDistributor])
    setCount([...countOfDistributor])
  }, [mainContext?.sidebarFilters?.city, mainContext?.sidebarFilters?.year])

  // Setting up the chart
  const series = [{
    name: 'No. of EVs',
    data: [...count ?? []],
  }];
  const options = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: [...make ?? []],
      labels: {
        style: {
          fontFamily: 'Nunito',
          fontSize: '13px',
          fontWeight: 'bold'
        }
      }
    }
  };

  return (
    <div className="bg-white p-4 m-4 rounded-2xl border-[#cccccc] border-1 shadow-md ">
      <p className='text-xl font-bold ml-2'>Electric Vehicles By City In A Year</p>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
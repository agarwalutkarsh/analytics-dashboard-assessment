"use client";


import { getElectricUtilitiesByCounty } from "@/GlobalFunctions/HelperFunctions";
import dynamic from "next/dynamic";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "./ContextApi/MainContext";

// Dynamic Loading for the apex charts

const Chart = dynamic(() => import("react-apexcharts"), {
  loading: () => <p className=" text-2xl font-semibold text-center h-44 ">Loading...</p>,
  ssr: false
});

const CountyBar = () => {
  const mainContext = useContext(MainContext)

  // Bar chart states
  const [elecUtility, setElecUtility] = useState([])
  const [count, setCount] = useState([])

  
  // Data manipulation
  useEffect(() => {
    const elecUtilityArr = getElectricUtilitiesByCounty(mainContext?.sidebarFilters?.county)

    const electricUtilityArr = elecUtilityArr?.reduce((acc, curr) => {
      acc.push(curr?.county)
      return acc
    }, [])

    const countOfElecUtility = elecUtilityArr?.map(curr => curr?.count)

    setElecUtility([...electricUtilityArr])
    setCount([...countOfElecUtility])
  }, [mainContext?.sidebarFilters?.county])

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
      categories: [...elecUtility ?? []],
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
      <p className='text-xl font-bold ml-2'>Electric Utilities By County</p>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default CountyBar;
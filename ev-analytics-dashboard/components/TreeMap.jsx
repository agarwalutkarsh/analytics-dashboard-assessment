"use client";

import { getMakeDistribution } from "@/GlobalFunctions/HelperFunctions";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamic import

const Chart = dynamic(() => import("react-apexcharts"), {
  loading: () => <p className=" text-2xl font-semibold text-center h-44 ">Loading...</p>,
  ssr: false
});

const TreeMap = () => {

// map data state
  const [dataArr, setDataArr] = useState([])
// data manipulation
  useEffect(() => {
    const makeArr = getMakeDistribution()
    const makeArrFormatted = makeArr?.reduce((acc, curr) => {
      acc.push({
        x: curr?.make,
        y: curr?.count
      })
      return acc
    }, [])
    setDataArr([...makeArrFormatted])
  }, [])
// setting up data
  const series = [{
    data: [...dataArr ?? []],
  }];
  const options = {
    legend: {
      show: false
    },
    chart: {
      height: 350,
      type: 'treemap',
      fontFamily: 'Nunito',
      fontWeight: 'bold',
      fontsize: '13px'
    }
  }

  return (
    <div className="bg-white p-4 m-4 rounded-2xl border-[#cccccc] border-1 shadow-md ">
      <p className='text-xl font-bold ml-2'>Market Presence by Manufacturer</p>
      <Chart options={options} series={series} type="treemap" height={350} />

    </div>
  );
};

export default TreeMap;
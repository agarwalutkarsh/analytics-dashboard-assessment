"use client";

import { getMakeDistribution } from "@/GlobalFunctions/HelperFunctions";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), {
  loading: () => <p className=" text-2xl font-semibold">Loading...</p>,
  ssr: false
});

const TreeMap = () => {


  const [dataArr, setDataArr] = useState([])

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

  const series = [{
    data: [...dataArr ?? []],
  }];
  const options = {
    legend: {
      show: false
    },
    chart: {
      height: 350,
      type: 'treemap'
    },
    title: {
      text: 'Market Presence by Manufacturer'
    }
  }

  return (
    <div className="bg-white p-4 m-4 rounded-2xl border-[#cccccc] border-1 shadow-md ">
      { dataArr?.length > 0 &&
        <Chart options={options} series={series} type="treemap" height={350} />
      }
    </div>
  );
};

export default TreeMap;
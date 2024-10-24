"use client";

import { getMakeDistribution } from "@/GlobalFunctions/HelperFunctions";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), {
    loading: () => <p className=" text-2xl font-semibold">Loading...</p>,
    ssr: false
  });

const BarChart = () => {

    const [make, setMake] = useState([])
    const [count, setCount] = useState([])

    useEffect(() => {
        const makeArr = getMakeDistribution()

        const makeDistributor = makeArr?.reduce((acc, curr) => {
            acc.push(curr?.make)
            return acc
        }, [])

        const countOfDistributor = makeArr?.map(curr => curr?.count)
        console.log(makeDistributor)
        setMake([...makeDistributor])
        setCount([...countOfDistributor])
    }, [])

    const series = [{
        data: [...count ?? []],
      }];
      const options = {
        chart: {
          type: 'bar',
        },
        title: {
          text: 'Electric Vehicle Makes Distribution',
          align: 'center',
        },
        xaxis: {
          categories: [...make ?? []],
        },
      };

  return (
    <div className="bg-white p-4 m-4 rounded-2xl border-[#cccccc] border-1 shadow-md ">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
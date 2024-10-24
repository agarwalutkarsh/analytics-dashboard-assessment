"use client";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
    loading: () => <p>Loading...</p>,
    ssr: false
  });

const BarChart = () => {
    const series = [{
        data: [10, 5, 3, 2, 1], // Example data: number of vehicles per make (e.g., [TESLA, NISSAN, FORD, BMW, KIA])
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
          categories: ['TESLA', 'NISSAN', 'FORD', 'BMW', 'KIA'], // Example makes
        },
      };

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
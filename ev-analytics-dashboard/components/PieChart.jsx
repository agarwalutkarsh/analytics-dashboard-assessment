"use client"

import dynamic from 'next/dynamic';
const Chart = dynamic(() => import("react-apexcharts"), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

const PieChart = () => {
  const series = [44, 55]; // Example market shares
  const options = {
    chart: {
      type: 'pie',
    },
    labels: ['Battery Electric Vehicle (BEV)', 'Plug-in Hybrid Electric Vehicle (PHEV)'],
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
    <div>
      <Chart options={options} series={series} type="pie" height={350} />
    </div>
  );
};

export default PieChart;

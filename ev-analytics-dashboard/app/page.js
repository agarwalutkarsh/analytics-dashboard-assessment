import BarChart from "@/components/BarChart";
import HeatmapChart from "@/components/HeatmapChart";
import InfoCard from "@/components/InfoCard";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import Sidebar from "@/components/Sidebar";


export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-4" >
        <div className="flex mt-8 mb-14 ">
          <h1 className="ml-4 text-left font-bold text-5xl my-auto">EV Analytics Dashboard</h1>
            <InfoCard />
        </div>
        {/* <hr className="w-[70%] mx-auto mb-4 h-1 bg-[#333]" /> */}
        <div className="grid grid-cols-2">
          <BarChart />
          <PieChart />
          <LineChart />
          <HeatmapChart />
        </div>
      </div>
    </div>
  );
}

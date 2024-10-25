import BarChart from "@/components/BarChart";
import CountyBar from "@/components/CountyBar";
import InfoCard from "@/components/InfoCard";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import Sidebar from "@/components/Sidebar";
import TreeMap from "@/components/TreeMap";


export default function Home() {
  // Entry Point - Root Page. All the Components are displayed
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-4" >
        <div className="flex mt-8 mb-14 ">
          <h1 className="ml-4 text-left font-bold text-5xl my-auto">EV Analytics Dashboard</h1>
            <InfoCard />
        </div>
          <TreeMap />
        <div className="grid grid-cols-2">
          <LineChart />
          <PieChart />
          <BarChart />
          <CountyBar />
        </div>
      </div>
    </div>
  );
}

import BarChart from "@/components/BarChart";
import HeatmapChart from "@/components/HeatmapChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import { Button } from "@headlessui/react";

export default function Home() {
  return (
    <div className="p-5">
      <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
        Save changes
      </Button>
      <div className="grid grid-cols-2">
        <BarChart />
        <PieChart />
        <LineChart />
        <HeatmapChart />
      </div>
    </div>
  );
}

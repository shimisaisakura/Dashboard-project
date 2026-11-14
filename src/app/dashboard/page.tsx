import Total from "@/components/dashboard/Total";
import { dataTotalCards } from "./_data/dashboardData";
import AppLineChart from "./_components/AppLineChart";

export default function Page() {
  return (
    <div className="bg-slate-100 dark:bg-(--color-dashboard) min-h-full px-6">
      <div className="text-3xl font-bold pt-7">
        <h1>Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5 py-7 ">
        {dataTotalCards.map((card, index) => (
          <Total key={index} card={card} />
        ))}
      </div>
      <div className="bg-white dark:bg-black rounded-lg px-3 py-2 flex-1 shadow-xl">
        <AppLineChart />
      </div>
    </div>
  );
}

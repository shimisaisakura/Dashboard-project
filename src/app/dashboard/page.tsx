import Total from "@/components/dashboard/Total";
import { Button } from "@/components/ui/button";
import { dataTotalCards } from "./_data/dashboardData";

export default function Page() {
  return (
    <div className="bg-slate-100">
      <div className="text-3xl font-bold px-6 pt-7">
        <h1>Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5 px-6 py-7 ">
        {dataTotalCards.map((card, index) => (
          <Total key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

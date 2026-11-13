import { TotalCards } from "@/app/dashboard/_data/dashboardData";
import { cn } from "cn";
import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

export default function Total({ card }: { card: TotalCards }) {
  return (
    <div className="bg-white rounded-lg px-3 py-2 flex-1 font-nunito font-normal shadow-xl">
      <div className="flex justify-between items-center pb-2">
        <div>
          <div>{card.title}</div>
          <div className="text-2xl font-nunito font-bold">{card.value}</div>
        </div>
        <div>
          <card.icon />
        </div>
      </div>
      <div>
        <span
          className={cn(card.isPositive ? "text-green-500" : "text-red-500")}
        >
          {card.isPositive ? <TrendingUp /> : <TrendingDown />}
          <span>{card.percentage}%</span>&nbsp;
        </span>
        {card.change}
      </div>
    </div>
  );
}

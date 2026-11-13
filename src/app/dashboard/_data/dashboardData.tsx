import { ChartLine, Package, RotateCcwClock, Users } from "lucide-react";

export interface TotalCards {
  title: string;
  value: string;
  icon: React.ElementType;
  percentage: number;
  change: string;
  isPositive: boolean;
}

export const dataTotalCards = [
  {
    title: "Total User",
    value: "40,689",
    percentage: 8.5,
    change: "Up from yesterday",
    isPositive: true,
    icon: Users,
  },
  {
    title: "Total Order",
    value: "10,293",
    percentage: 1.3,
    change: "Up from past week",
    isPositive: true,
    icon: Package,
  },
  {
    title: "Total Sales",
    value: "$89,000",
    percentage: 4.3,
    change: "Down from yesterday",
    isPositive: false,
    icon: ChartLine,
  },
  {
    title: "Total Pending",
    value: "2040",
    percentage: 1.8,
    change: "Up from yesterday",
    isPositive: true,
    icon: RotateCcwClock,
  },
];

/* filepath: /c:/Users/LenOvo/Desktop/master/next project/msc_next_project/app/components/sections/stats-section.tsx */
"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";
import { Users, Trophy, Code, Clock } from "lucide-react";
import { useLanguage } from "@/app/contexts/language-context";

export default function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: "5,000+",
      labelKey: "stats.graduatesHired",
      color: "blue",
    },
    {
      icon: Trophy,
      value: "95%",
      labelKey: "stats.jobPlacement",
      color: "purple",
    },
    {
      icon: Code,
      value: "$75k",
      labelKey: "stats.averageSalary",
      color: "green",
    },
    {
      icon: Clock,
      value: "6",
      labelKey: "stats.monthsToCareer",
      color: "orange",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-none shadow-lg">
              <CardHeader className="pb-2">
                <div
                  className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {t(stat.labelKey)}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

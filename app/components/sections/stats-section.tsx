/* filepath: /c:/Users/LenOvo/Desktop/master/next project/msc_next_project/app/components/sections/stats-section.tsx */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";
import { Users, Trophy, Code, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Graduates Hired",
    color: "blue",
  },
  {
    icon: Trophy,
    value: "95%",
    label: "Job Placement Rate",
    color: "purple",
  },
  {
    icon: Code,
    value: "$75k",
    label: "Average Starting Salary",
    color: "green",
  },
  {
    icon: Clock,
    value: "6",
    label: "Months to Career",
    color: "orange",
  },
];

export default function StatsSection() {
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
                  {stat.label}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

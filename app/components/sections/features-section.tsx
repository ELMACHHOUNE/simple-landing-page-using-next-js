/* filepath: /c:/Users/LenOvo/Desktop/master/next project/msc_next_project/app/components/sections/features-section.tsx */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Code, Users, Trophy, Clock, Award, Globe } from "lucide-react";

const features = [
  {
    title: "Project-Based Learning",
    description:
      "Build real-world applications that you can showcase to employers and add to your portfolio.",
    icon: Code,
    color: "blue",
  },
  {
    title: "1-on-1 Mentorship",
    description:
      "Personal guidance from industry experts throughout your journey with weekly check-ins.",
    icon: Users,
    color: "purple",
  },
  {
    title: "Job Placement Support",
    description:
      "Resume reviews, interview prep, and direct connections to our 500+ hiring partners.",
    icon: Trophy,
    color: "green",
  },
  {
    title: "Flexible Learning",
    description:
      "Study at your own pace with both live sessions and recorded content available 24/7.",
    icon: Clock,
    color: "orange",
  },
  {
    title: "Industry Certifications",
    description:
      "Earn recognized certifications that validate your skills to potential employers.",
    icon: Award,
    color: "red",
  },
  {
    title: "Global Community",
    description:
      "Join a worldwide network of developers, alumni, and industry professionals.",
    icon: Globe,
    color: "indigo",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Why Choose MSc-GoMyCode?
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to become a professional developer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4`}
                >
                  <feature.icon
                    className={`h-6 w-6 text-${feature.color}-600`}
                  />
                </div>
                <CardTitle className="text-xl font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

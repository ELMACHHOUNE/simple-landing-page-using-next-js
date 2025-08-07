"use client";
/* filepath: /c:/Users/LenOvo/Desktop/master/next project/msc_next_project/app/components/sections/features-section.tsx */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Code, Users, Trophy, Clock, Award, Globe } from "lucide-react";
import { useLanguage } from "@/app/contexts/language-context";

const features = [
  {
    titleKey: "features.projectBased.title",
    descriptionKey: "features.projectBased.description",
    icon: Code,
    color: "blue",
  },
  {
    titleKey: "features.mentorship.title",
    descriptionKey: "features.mentorship.description",
    icon: Users,
    color: "purple",
  },
  {
    titleKey: "features.jobPlacement.title",
    descriptionKey: "features.jobPlacement.description",
    icon: Trophy,
    color: "green",
  },
  {
    titleKey: "features.flexible.title",
    descriptionKey: "features.flexible.description",
    icon: Clock,
    color: "orange",
  },
  {
    titleKey: "features.certifications.title",
    descriptionKey: "features.certifications.description",
    icon: Award,
    color: "red",
  },
  {
    titleKey: "features.community.title",
    descriptionKey: "features.community.description",
    icon: Globe,
    color: "indigo",
  },
];

export default function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t("features.title")}
          </h2>
          <p className="text-xl text-gray-600">{t("features.subtitle")}</p>
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
                  {t(feature.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {t(feature.descriptionKey)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

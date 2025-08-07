"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { useLanguage } from "@/app/contexts/language-context";

const programs = [
  {
    titleKey: "programs.fullStack.title",
    descriptionKey: "programs.fullStack.description",
    duration: "6 months",
    levelKey: "programs.levels.beginnerToAdvanced",
    skills: ["React", "Node.js", "MongoDB", "TypeScript"],
    popular: true,
  },
  {
    titleKey: "programs.frontend.title",
    descriptionKey: "programs.frontend.description",
    duration: "4 months",
    levelKey: "programs.levels.beginnerToIntermediate",
    skills: ["React", "Vue.js", "CSS/SASS", "JavaScript"],
    popular: false,
  },
  {
    titleKey: "programs.backend.title",
    descriptionKey: "programs.backend.description",
    duration: "5 months",
    levelKey: "programs.levels.intermediateToAdvanced",
    skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
    popular: false,
  },
];

export default function ProgramsSection() {
  const { t } = useLanguage();

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t("programs.title")}
          </h2>
          <p className="text-xl text-gray-600">{t("programs.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-xl transition-shadow relative ${
                program.popular ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {program.popular && (
                <Badge className="absolute -top-3 left-6 bg-blue-600 text-white hover:bg-blue-700">
                  {t("programs.mostPopular")}
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {t(program.titleKey)}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {t(program.descriptionKey)}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    {t("programs.duration")}
                  </span>
                  <span className="font-semibold">{program.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">{t("programs.level")}</span>
                  <span className="font-semibold">{t(program.levelKey)}</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    {t("programs.keySkills")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button
                  className="w-full mt-4"
                  variant={program.popular ? "default" : "outline"}
                >
                  {t("programs.learnMore")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

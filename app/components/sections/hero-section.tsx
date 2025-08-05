/* filepath: /c:/Users/LenOvo/Desktop/master/next project/msc_next_project/app/components/sections/hero-section.tsx */
"use client";

import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/app/contexts/language-context";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-50 to-blue-50 py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
          {t("hero.badge")}
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          {t("hero.title")}
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            {t("hero.startJourney")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            {t("hero.watchDemo")}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-sm text-gray-600">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>{t("hero.noExperience")}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>{t("hero.jobGuarantee")}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>{t("hero.liveMentorship")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

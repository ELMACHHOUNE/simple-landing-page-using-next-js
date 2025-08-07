/* filepath: /c:/Users/LenOvo/Desktop/master/next project/msc_next_project/app/components/sections/cta-section.tsx */
"use client";
import { Button } from "@/app/components/ui/button";
import { useLanguage } from "@/app/contexts/language-context";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{t("cta.title")}</h2>
        <p className="text-xl mb-8 opacity-90">{t("cta.subtitle")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            {t("cta.applyNow")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600"
          >
            {t("cta.scheduleCall")}
          </Button>
        </div>

        <div className="mt-12 text-center opacity-75">
          <p className="text-sm">{t("cta.benefits")}</p>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useLanguage } from "@/app/contexts/language-context";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t("common.backToHome")}
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t("privacy.title")}
          </h1>
          <p className="text-gray-600 mb-8">
            {t("privacy.lastUpdated")}: {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("privacy.introduction.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("privacy.introduction.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("privacy.dataCollection.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("privacy.dataCollection.content")}
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>{t("privacy.dataCollection.personalInfo")}</li>
                <li>{t("privacy.dataCollection.academicInfo")}</li>
                <li>{t("privacy.dataCollection.technicalInfo")}</li>
                <li>{t("privacy.dataCollection.communicationInfo")}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("privacy.dataUse.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("privacy.dataUse.content")}
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>{t("privacy.dataUse.serviceProvision")}</li>
                <li>{t("privacy.dataUse.communication")}</li>
                <li>{t("privacy.dataUse.improvement")}</li>
                <li>{t("privacy.dataUse.legal")}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("privacy.dataSharing.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("privacy.dataSharing.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("privacy.userRights.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("privacy.userRights.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("privacy.contact.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("privacy.contact.content")}{" "}
                <a
                  href="mailto:privacy@msc-gomycode.com"
                  className="text-blue-600 hover:underline"
                >
                  privacy@msc-gomycode.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useLanguage } from "@/app/contexts/language-context";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
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
            {t("terms.title")}
          </h1>
          <p className="text-gray-600 mb-8">
            {t("terms.lastUpdated")}: {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("terms.acceptance.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("terms.acceptance.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("terms.services.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("terms.services.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("terms.userObligations.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("terms.userObligations.content")}
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>{t("terms.userObligations.respectful")}</li>
                <li>{t("terms.userObligations.accurate")}</li>
                <li>{t("terms.userObligations.prohibited")}</li>
                <li>{t("terms.userObligations.intellectual")}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("terms.payment.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("terms.payment.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("terms.termination.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("terms.termination.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("terms.liability.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("terms.liability.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("terms.contact.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("terms.contact.content")}{" "}
                <a
                  href="mailto:legal@msc-gomycode.com"
                  className="text-blue-600 hover:underline"
                >
                  legal@msc-gomycode.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

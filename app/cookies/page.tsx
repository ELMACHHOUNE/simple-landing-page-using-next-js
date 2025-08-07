"use client";
import { useLanguage } from "@/app/contexts/language-context";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CookiePolicy() {
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
            {t("cookies.title")}
          </h1>
          <p className="text-gray-600 mb-8">
            {t("cookies.lastUpdated")}: {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("cookies.whatAreCookies.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("cookies.whatAreCookies.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("cookies.typesOfCookies.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("cookies.typesOfCookies.content")}
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    {t("cookies.typesOfCookies.essential.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("cookies.typesOfCookies.essential.description")}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    {t("cookies.typesOfCookies.analytics.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("cookies.typesOfCookies.analytics.description")}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    {t("cookies.typesOfCookies.marketing.title")}
                  </h3>
                  <p className="text-gray-700">
                    {t("cookies.typesOfCookies.marketing.description")}
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("cookies.manageCookies.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("cookies.manageCookies.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("cookies.thirdParty.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("cookies.thirdParty.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("cookies.updates.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("cookies.updates.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("cookies.contact.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("cookies.contact.content")}{" "}
                <a
                  href="mailto:cookies@msc-gomycode.com"
                  className="text-blue-600 hover:underline"
                >
                  cookies@msc-gomycode.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

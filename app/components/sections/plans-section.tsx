"use client";

import { useLanguage } from "@/app/contexts/language-context";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Check, Star, Users, Clock, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PlansSection() {
  const { t } = useLanguage();
  const router = useRouter();

  const plans = [
    {
      id: "frontend",
      popular: false,
      icon: <TrendingUp className="h-6 w-6" />,
      badge: null,
    },
    {
      id: "fullstack",
      popular: true,
      icon: <Star className="h-6 w-6" />,
      badge: t("plans.popular"),
    },
    {
      id: "backend",
      popular: false,
      icon: <Users className="h-6 w-6" />,
      badge: t("plans.bestValue"),
    },
  ];

  const handleEnrollNow = (planId: string) => {
    const planData = {
      id: planId,
      titleKey: `plans.courses.${planId}.title`,
      price: t(`plans.courses.${planId}.price`),
      duration: t(`plans.courses.${planId}.duration`),
    };

    // Store selected plan in localStorage or state management
    localStorage.setItem("selectedPlan", JSON.stringify(planData));

    // Redirect to payment page
    router.push("/payment");
  };

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("plans.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("plans.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const course = t(`plans.courses.${plan.id}`);

            return (
              <Card
                key={plan.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? "border-blue-500 shadow-lg scale-105"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-lg">
                    <span className="text-sm font-semibold">{plan.badge}</span>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      plan.popular
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {plan.icon}
                  </div>

                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </CardTitle>

                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center space-x-2 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-500">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{course.students}</span>
                    </div>
                    <div className="text-sm text-gray-600">{course.level}</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-gray-900">
                        ${course.price}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ${course.originalPrice}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {t("payment.oneTimePayment")}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {t("plans.whatYouGet")}
                    </h4>
                    <ul className="space-y-2">
                      {(course.features || [])
                        .slice(0, 6)
                        .map((feature: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </li>
                        ))}
                      {(course.features || []).length > 6 && (
                        <li className="text-sm text-gray-500 ml-6">
                          +{(course.features || []).length - 6} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={() => handleEnrollNow(plan.id)}
                      className={`w-full ${
                        plan.popular
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-gray-900 hover:bg-gray-800"
                      }`}
                    >
                      {t("plans.enrollNow")}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        document.getElementById("programs")?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      {t("plans.learnMore")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">{t("plans.startLearning")}</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>{t("plans.features.mentorship")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>{t("plans.features.projects")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>{t("plans.features.certificate")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>{t("plans.features.placement")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

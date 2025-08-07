"use client";

import { useLanguage } from "@/app/contexts/language-context";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Check, Star, Users, Clock, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

interface CourseData {
  title: string;
  description: string;
  duration: string;
  students: string;
  level: string;
  price: string;
  originalPrice: string;
  features: string[];
}

interface Plan {
  id: string;
  popular: boolean;
  icon: React.ReactNode;
  badge: string | null;
}

interface PlanData {
  id: string;
  titleKey: string;
  price: string;
  duration: string;
}

export default function PlansSection() {
  const { t } = useLanguage();
  const router = useRouter();

  const plans: Plan[] = [
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
      badge: (t("plans.popular") as string) || "Popular",
    },
    {
      id: "backend",
      popular: false,
      icon: <Users className="h-6 w-6" />,
      badge: (t("plans.bestValue") as string) || "Best Value",
    },
  ];

  const handleEnrollNow = (planId: string) => {
    try {
      const courseData = t(`plans.courses.${planId}`) as unknown as CourseData;

      const planData: PlanData = {
        id: planId,
        titleKey: `plans.courses.${planId}.title`,
        price: courseData?.price || "0",
        duration: courseData?.duration || "",
      };

      if (typeof window !== "undefined") {
        localStorage.setItem("selectedPlan", JSON.stringify(planData));
      }
      router.push("/payment");
    } catch (error) {
      console.error("Error handling enrollment:", error);
    }
  };

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {(t("plans.title") as string) || "Our Plans"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {(t("plans.subtitle") as string) ||
              "Choose the perfect plan for your learning journey"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const course = t(`plans.courses.${plan.id}`) as unknown as
              | CourseData
              | undefined;

            const courseData: CourseData = {
              title: course?.title || "Course Title",
              description: course?.description || "Course description",
              duration: course?.duration || "Duration not specified",
              students: course?.students || "Students info not available",
              level: course?.level || "Level not specified",
              price: course?.price || "0",
              originalPrice: course?.originalPrice || "0",
              features: Array.isArray(course?.features) ? course.features : [],
            };

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
                    {courseData.title}
                  </CardTitle>

                  <p className="text-gray-600 mb-4">{courseData.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center space-x-2 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{courseData.duration}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-500">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{courseData.students}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {courseData.level}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-gray-900">
                        ${courseData.price}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ${courseData.originalPrice}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {(t("payment.oneTimePayment") as string) ||
                        "One-time payment"}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {(t("plans.whatYouGet") as string) || "What you'll get:"}
                    </h4>
                    <ul className="space-y-2">
                      {courseData.features
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
                      {courseData.features.length > 6 && (
                        <li className="text-sm text-gray-500 ml-6">
                          +{courseData.features.length - 6} more features
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
                      {(t("plans.enrollNow") as string) || "Enroll Now"}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        const programsElement =
                          document.getElementById("programs");
                        if (programsElement) {
                          programsElement.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      {(t("plans.learnMore") as string) || "Learn More"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            {(t("plans.startLearning") as string) ||
              "Start your learning journey today"}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>
                {(t("plans.features.mentorship") as string) ||
                  "Expert Mentorship"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>
                {(t("plans.features.projects") as string) || "Real Projects"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>
                {(t("plans.features.certificate") as string) || "Certificate"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>
                {(t("plans.features.placement") as string) || "Job Placement"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

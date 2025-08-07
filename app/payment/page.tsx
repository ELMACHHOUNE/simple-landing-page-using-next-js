"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PaymentSection from "@/app/components/sections/payment-section";
import { useLanguage } from "@/app/contexts/language-context";
import { Button } from "@/app/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface SelectedPlan {
  id: string;
  titleKey: string;
  price: string;
  duration: string;
}

export default function PaymentPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [selectedProgram, setSelectedProgram] = useState<SelectedPlan | null>(
    null
  );

  useEffect(() => {
    // Get selected plan from localStorage
    const storedPlan = localStorage.getItem("selectedPlan");
    if (storedPlan) {
      const plan = JSON.parse(storedPlan) as SelectedPlan;
      setSelectedProgram(plan);
    } else {
      // If no plan selected, redirect to home
      router.push("/");
    }
  }, [router]);

  if (!selectedProgram) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Loading...</p>
        </div>
      </div>
    );
  }

  // Convert SelectedPlan to the format expected by PaymentSection
  const programForPayment = {
    id: selectedProgram.id,
    titleKey: selectedProgram.titleKey,
    price: parseInt(selectedProgram.price) || 0,
    duration: selectedProgram.duration,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t("common.backToHome")}</span>
          </Button>
        </div>
      </div>

      <PaymentSection selectedProgram={programForPayment} />
    </div>
  );
}

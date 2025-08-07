"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { useLanguage } from "@/app/contexts/language-context";
import { CheckCircle } from "lucide-react";
import PaymentMethodSelector from "@/app/components/payment/payment-method-selector";
import CreditCardForm from "@/app/components/payment/credit-card-form";
import PayPalForm from "@/app/components/payment/paypal-form";
import BankTransferForm from "@/app/components/payment/bank-transfer-form";
import MobilePaymentForm from "@/app/components/payment/mobile-payment-form";
import PaymentConfirmation from "@/app/components/payment/payment-confirmation";

export type PaymentMethod =
  | "credit-card"
  | "paypal"
  | "bank-transfer"
  | "mobile";
export type PaymentStep =
  | "method-selection"
  | "payment-form"
  | "confirmation"
  | "success";

interface BankDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
  routingNumber: string;
  reference: string;
}

interface PaymentFormData {
  [key: string]: string | number | BankDetails | undefined;
}

interface PaymentSectionProps {
  selectedProgram?: {
    id?: string;
    titleKey: string;
    price: number;
    duration: string;
  };
}

export default function PaymentSection({
  selectedProgram,
}: PaymentSectionProps) {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] =
    useState<PaymentStep>("method-selection");
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(
    null
  );
  const [paymentData, setPaymentData] = useState<PaymentFormData>({});

  const handleMethodSelect = (method: PaymentMethod) => {
    setSelectedMethod(method);
    setCurrentStep("payment-form");
  };

  const handlePaymentSubmit = (data: PaymentFormData) => {
    setPaymentData(data);
    setCurrentStep("confirmation");
  };

  const handleConfirmPayment = () => {
    // Here you would integrate with actual payment processing
    setCurrentStep("success");
  };

  const handleBackToMethod = () => {
    setCurrentStep("method-selection");
    setSelectedMethod(null);
  };

  const handleBackToForm = () => {
    setCurrentStep("payment-form");
  };

  const renderPaymentForm = () => {
    if (!selectedMethod) return null;

    switch (selectedMethod) {
      case "credit-card":
        return (
          <CreditCardForm
            onSubmit={handlePaymentSubmit}
            onBack={handleBackToMethod}
          />
        );
      case "paypal":
        return (
          <PayPalForm
            onSubmit={handlePaymentSubmit}
            onBack={handleBackToMethod}
          />
        );
      case "bank-transfer":
        return (
          <BankTransferForm
            onSubmit={handlePaymentSubmit}
            onBack={handleBackToMethod}
          />
        );
      case "mobile":
        return (
          <MobilePaymentForm
            onSubmit={handlePaymentSubmit}
            onBack={handleBackToMethod}
          />
        );
      default:
        return null;
    }
  };

  if (currentStep === "success") {
    return (
      <section id="payment" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("payment.success.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t("payment.success.message")}
            </p>
            <div className="space-y-4">
              <Button
                onClick={() => (window.location.href = "/dashboard")}
                className="w-full sm:w-auto"
              >
                {t("payment.success.goToDashboard")}
              </Button>
              <Button
                variant="outline"
                onClick={() => (window.location.href = "/")}
                className="w-full sm:w-auto ml-0 sm:ml-4"
              >
                {t("payment.success.backToHome")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="payment" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t("payment.title")}
            </h2>
            <p className="text-xl text-gray-600">{t("payment.subtitle")}</p>
          </div>

          {selectedProgram && (
            <Card className="mb-8 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{t("payment.selectedProgram")}</span>
                  <Badge className="bg-blue-600">{t("payment.selected")}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {t(selectedProgram.titleKey)}
                    </h3>
                    <p className="text-gray-600">
                      {t("programs.duration")}: {selectedProgram.duration}
                    </p>
                  </div>
                  <div className="text-right mt-4 sm:mt-0">
                    <p className="text-2xl font-bold text-blue-600">
                      ${selectedProgram.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      {t("payment.oneTimePayment")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === "method-selection" && (
            <PaymentMethodSelector onMethodSelect={handleMethodSelect} />
          )}

          {currentStep === "payment-form" && renderPaymentForm()}

          {currentStep === "confirmation" && (
            <PaymentConfirmation
              method={selectedMethod!}
              paymentData={paymentData}
              program={
                selectedProgram
                  ? {
                      id: selectedProgram.id || "unknown",
                      titleKey: selectedProgram.titleKey,
                      price: selectedProgram.price.toString(),
                      duration: selectedProgram.duration,
                    }
                  : undefined
              }
              onConfirm={handleConfirmPayment}
              onBack={handleBackToForm}
            />
          )}
        </div>
      </div>
    </section>
  );
}

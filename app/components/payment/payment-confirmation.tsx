"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { useLanguage } from "@/app/contexts/language-context";
import {
  ArrowLeft,
  CreditCard,
  DollarSign,
  Building,
  Smartphone,
  CheckCircle,
} from "lucide-react";
import type { PaymentMethod } from "@/app/components/sections/payment-section";

interface PaymentConfirmationProps {
  method: PaymentMethod;
  paymentData: any;
  program?: any;
  onConfirm: () => void;
  onBack: () => void;
}

export default function PaymentConfirmation({
  method,
  paymentData,
  program,
  onConfirm,
  onBack,
}: PaymentConfirmationProps) {
  const { t } = useLanguage();

  const getMethodIcon = () => {
    switch (method) {
      case "credit-card":
        return <CreditCard className="h-5 w-5 text-blue-600" />;
      case "paypal":
        return <DollarSign className="h-5 w-5 text-indigo-600" />;
      case "bank-transfer":
        return <Building className="h-5 w-5 text-green-600" />;
      case "mobile":
        return <Smartphone className="h-5 w-5 text-purple-600" />;
    }
  };

  const getMethodTitle = () => {
    switch (method) {
      case "credit-card":
        return t("payment.methods.creditCard.title");
      case "paypal":
        return t("payment.methods.paypal.title");
      case "bank-transfer":
        return t("payment.methods.bankTransfer.title");
      case "mobile":
        return t("payment.methods.mobile.title");
    }
  };

  const renderPaymentDetails = () => {
    switch (method) {
      case "credit-card":
        return (
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">
                {t("payment.confirmation.cardNumber")}
              </span>
              <span>**** **** **** {paymentData.cardNumber?.slice(-4)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">
                {t("payment.confirmation.cardholderName")}
              </span>
              <span>{paymentData.cardholderName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t("payment.form.email")}</span>
              <span>{paymentData.email}</span>
            </div>
          </div>
        );
      case "paypal":
        return (
          <div className="flex justify-between">
            <span className="text-gray-600">
              {t("payment.form.paypalEmail")}
            </span>
            <span>{paymentData.email}</span>
          </div>
        );
      case "bank-transfer":
        return (
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">
                {t("payment.form.fullName")}
              </span>
              <span>{paymentData.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t("payment.form.email")}</span>
              <span>{paymentData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">
                {t("payment.bankTransfer.reference")}
              </span>
              <span className="font-mono">
                {paymentData.bankDetails?.reference}
              </span>
            </div>
          </div>
        );
      case "mobile":
        return (
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">
                {t("payment.mobile.provider")}
              </span>
              <span className="capitalize">
                {paymentData.provider?.replace("-", " ")}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">
                {t("payment.form.phoneNumber")}
              </span>
              <span>{paymentData.phoneNumber}</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-6 hover:bg-gray-100"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        {t("payment.backToForm")}
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
            {t("payment.confirmation.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Program Summary */}
          {program && (
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-3">
                {t("payment.confirmation.programSummary")}
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-blue-700">
                    {t("payment.confirmation.program")}
                  </span>
                  <span className="font-medium">{t(program.titleKey)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">
                    {t("programs.duration")}
                  </span>
                  <span className="font-medium">{program.duration}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-blue-700">
                    {t("payment.confirmation.amount")}
                  </span>
                  <span>${program.price}</span>
                </div>
              </div>
            </div>
          )}

          {/* Payment Method Summary */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              {getMethodIcon()}
              <span className="ml-2">{getMethodTitle()}</span>
            </h3>
            {renderPaymentDetails()}
          </div>

          {/* Terms and Conditions */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">
              {t("payment.confirmation.termsTitle")}
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• {t("payment.confirmation.terms1")}</li>
              <li>• {t("payment.confirmation.terms2")}</li>
              <li>• {t("payment.confirmation.terms3")}</li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <Button variant="outline" onClick={onBack} className="flex-1">
              {t("payment.confirmation.goBack")}
            </Button>
            <Button
              onClick={onConfirm}
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              {t("payment.confirmation.confirmPayment")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

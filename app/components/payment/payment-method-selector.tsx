"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { useLanguage } from "@/app/contexts/language-context";
import {
  CreditCard,
  DollarSign,
  Building,
  Smartphone,
  Star,
} from "lucide-react";
import type { PaymentMethod } from "@/app/components/sections/payment-section";

interface PaymentMethodSelectorProps {
  onMethodSelect: (method: PaymentMethod) => void;
}

export default function PaymentMethodSelector({
  onMethodSelect,
}: PaymentMethodSelectorProps) {
  const { t } = useLanguage();

  const paymentMethods = [
    {
      id: "credit-card" as PaymentMethod,
      icon: CreditCard,
      titleKey: "payment.methods.creditCard.title",
      descriptionKey: "payment.methods.creditCard.description",
      popular: true,
      features: [
        "payment.methods.creditCard.instant",
        "payment.methods.creditCard.secure",
      ],
      color: "blue",
    },
    {
      id: "paypal" as PaymentMethod,
      icon: DollarSign,
      titleKey: "payment.methods.paypal.title",
      descriptionKey: "payment.methods.paypal.description",
      popular: false,
      features: [
        "payment.methods.paypal.buyerProtection",
        "payment.methods.paypal.noCardNeeded",
      ],
      color: "indigo",
    },
    {
      id: "bank-transfer" as PaymentMethod,
      icon: Building,
      titleKey: "payment.methods.bankTransfer.title",
      descriptionKey: "payment.methods.bankTransfer.description",
      popular: false,
      features: [
        "payment.methods.bankTransfer.lowFees",
        "payment.methods.bankTransfer.secure",
      ],
      color: "green",
    },
    {
      id: "mobile" as PaymentMethod,
      icon: Smartphone,
      titleKey: "payment.methods.mobile.title",
      descriptionKey: "payment.methods.mobile.description",
      popular: false,
      features: [
        "payment.methods.mobile.quick",
        "payment.methods.mobile.convenient",
      ],
      color: "purple",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {paymentMethods.map((method) => (
        <Card
          key={method.id}
          className={`cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 relative ${
            method.popular ? "ring-2 ring-blue-500" : ""
          }`}
          onClick={() => onMethodSelect(method.id)}
        >
          {method.popular && (
            <Badge className="absolute -top-3 left-6 bg-blue-600 text-white hover:bg-blue-700">
              <Star className="h-3 w-3 mr-1" />
              {t("payment.mostPopular")}
            </Badge>
          )}
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div
                className={`w-12 h-12 bg-${method.color}-100 rounded-lg flex items-center justify-center`}
              >
                <method.icon className={`h-6 w-6 text-${method.color}-600`} />
              </div>
              <div>
                <CardTitle className="text-lg">{t(method.titleKey)}</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{t(method.descriptionKey)}</p>
            <ul className="space-y-2">
              {method.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm text-gray-500"
                >
                  <div
                    className={`w-1.5 h-1.5 bg-${method.color}-500 rounded-full mr-2`}
                  />
                  {t(feature)}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

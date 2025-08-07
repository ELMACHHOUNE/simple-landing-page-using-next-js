"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { useLanguage } from "@/app/contexts/language-context";
import { CreditCard, DollarSign, Building, Smartphone } from "lucide-react";
import { PaymentMethod } from "@/app/components/sections/payment-section";

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
      icon: <CreditCard className="h-8 w-8" />,
      title: t("payment.methods.creditCard.title"),
      description: t("payment.methods.creditCard.description"),
      features: [
        t("payment.methods.creditCard.instant"),
        t("payment.methods.creditCard.secure"),
      ],
    },
    {
      id: "paypal" as PaymentMethod,
      icon: <DollarSign className="h-8 w-8" />,
      title: t("payment.methods.paypal.title"),
      description: t("payment.methods.paypal.description"),
      features: [
        t("payment.methods.paypal.buyerProtection"),
        t("payment.methods.paypal.noCardNeeded"),
      ],
    },
    {
      id: "bank-transfer" as PaymentMethod,
      icon: <Building className="h-8 w-8" />,
      title: t("payment.methods.bankTransfer.title"),
      description: t("payment.methods.bankTransfer.description"),
      features: [
        t("payment.methods.bankTransfer.lowFees"),
        t("payment.methods.bankTransfer.secure"),
      ],
    },
    {
      id: "mobile" as PaymentMethod,
      icon: <Smartphone className="h-8 w-8" />,
      title: t("payment.methods.mobile.title"),
      description: t("payment.methods.mobile.description"),
      features: [
        t("payment.methods.mobile.quick"),
        t("payment.methods.mobile.convenient"),
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {paymentMethods.map((method) => (
        <Card
          key={method.id}
          className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-blue-300"
          onClick={() => onMethodSelect(method.id)}
        >
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              {method.icon}
            </div>
            <CardTitle className="text-xl">{method.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">{method.description}</p>
            <ul className="space-y-2 mb-6">
              {method.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm text-green-600 flex items-center justify-center"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">
              Select {method.title}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

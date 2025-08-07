"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useLanguage } from "@/app/contexts/language-context";
import { ArrowLeft, DollarSign, Shield } from "lucide-react";

interface PayPalFormProps {
  onSubmit: (data: any) => void;
  onBack: () => void;
  program?: any;
}

export default function PayPalForm({
  onSubmit,
  onBack,
  program,
}: PayPalFormProps) {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, method: "paypal" });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-6 hover:bg-gray-100"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        {t("payment.backToMethods")}
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="h-5 w-5 mr-2 text-indigo-600" />
            {t("payment.methods.paypal.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t("payment.paypal.title")}
            </h3>
            <p className="text-gray-600">{t("payment.paypal.description")}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="paypal-email">
                {t("payment.form.paypalEmail")}
              </Label>
              <Input
                id="paypal-email"
                type="email"
                placeholder="your-paypal@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2"
              />
              <p className="text-sm text-gray-500 mt-2">
                {t("payment.paypal.emailNote")}
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-4 w-4 text-blue-600" />
                <span className="font-medium text-blue-900">
                  {t("payment.paypal.protection")}
                </span>
              </div>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• {t("payment.paypal.protectionFeature1")}</li>
                <li>• {t("payment.paypal.protectionFeature2")}</li>
                <li>• {t("payment.paypal.protectionFeature3")}</li>
              </ul>
            </div>

            <div className="space-y-3 text-sm text-gray-600">
              <p>{t("payment.paypal.redirectNote")}</p>
              <p>{t("payment.paypal.accountNote")}</p>
            </div>

            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700"
              size="lg"
            >
              {t("payment.paypal.continueToPayPal")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

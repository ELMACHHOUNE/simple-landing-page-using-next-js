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
import { ArrowLeft, Shield, CheckCircle } from "lucide-react";

interface PayPalData {
  paypalEmail: string;
  fullName: string;
  phone: string;
  [key: string]: string;
}

interface PayPalFormProps {
  onSubmit: (data: PayPalData) => void;
  onBack: () => void;
}

export default function PayPalForm({ onSubmit, onBack }: PayPalFormProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<PayPalData>({
    paypalEmail: "",
    fullName: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Button variant="ghost" onClick={onBack} className="mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        {t("payment.backToMethods")}
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>{t("payment.paypal.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              {t("payment.paypal.description")}
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                {t("payment.paypal.protection")}
              </h4>
              <ul className="space-y-1 text-sm text-blue-800">
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 mr-2" />
                  {t("payment.paypal.protectionFeature1")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 mr-2" />
                  {t("payment.paypal.protectionFeature2")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 mr-2" />
                  {t("payment.paypal.protectionFeature3")}
                </li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="paypalEmail">
                {t("payment.form.paypalEmail")}
              </Label>
              <Input
                id="paypalEmail"
                type="email"
                value={formData.paypalEmail}
                onChange={(e) =>
                  handleInputChange("paypalEmail", e.target.value)
                }
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                {t("payment.paypal.emailNote")}
              </p>
            </div>

            <div>
              <Label htmlFor="fullName">{t("payment.form.fullName")}</Label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">{t("payment.form.phone")}</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
              <p className="mb-2">{t("payment.paypal.redirectNote")}</p>
              <p>{t("payment.paypal.accountNote")}</p>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {t("payment.paypal.continueToPayPal")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

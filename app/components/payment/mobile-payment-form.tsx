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
import { ArrowLeft, Smartphone } from "lucide-react";

interface MobilePaymentFormProps {
  onSubmit: (data: any) => void;
  onBack: () => void;
  program?: any;
}

export default function MobilePaymentForm({
  onSubmit,
  onBack,
  program,
}: MobilePaymentFormProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    provider: "",
    phoneNumber: "",
    fullName: "",
    email: "",
  });

  const providers = [
    { id: "apple-pay", name: "Apple Pay", icon: "🍎" },
    { id: "google-pay", name: "Google Pay", icon: "🟢" },
    { id: "samsung-pay", name: "Samsung Pay", icon: "📱" },
  ];

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
          <CardTitle className="flex items-center">
            <Smartphone className="h-5 w-5 mr-2" />
            {t("payment.mobile.selectProvider")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label className="text-base font-medium">
                {t("payment.mobile.provider")}
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                {providers.map((provider) => (
                  <div
                    key={provider.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      formData.provider === provider.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleInputChange("provider", provider.id)}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">{provider.icon}</div>
                      <div className="font-medium">{provider.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="phoneNumber">
                {t("payment.form.phoneNumber")}
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                {t("payment.mobile.phoneNote")}
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
              <Label htmlFor="email">{t("payment.form.email")}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">
                {t("payment.mobile.howItWorks")}
              </h4>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. {t("payment.mobile.step1")}</li>
                <li>2. {t("payment.mobile.step2")}</li>
                <li>3. {t("payment.mobile.step3")}</li>
              </ol>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={!formData.provider}
            >
              {t("payment.mobile.sendPaymentRequest")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

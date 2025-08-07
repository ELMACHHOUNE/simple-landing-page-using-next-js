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
import { ArrowLeft, Smartphone, QrCode } from "lucide-react";

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
  const [selectedProvider, setSelectedProvider] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const mobileProviders = [
    { id: "apple-pay", name: "Apple Pay", icon: "📱" },
    { id: "google-pay", name: "Google Pay", icon: "🏪" },
    { id: "venmo", name: "Venmo", icon: "💳" },
    { id: "cashapp", name: "Cash App", icon: "💰" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ provider: selectedProvider, phoneNumber, method: "mobile" });
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
            <Smartphone className="h-5 w-5 mr-2 text-purple-600" />
            {t("payment.methods.mobile.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label className="text-base font-medium">
                {t("payment.mobile.selectProvider")}
              </Label>
              <div className="grid grid-cols-2 gap-3 mt-3">
                {mobileProviders.map((provider) => (
                  <button
                    key={provider.id}
                    type="button"
                    onClick={() => setSelectedProvider(provider.id)}
                    className={`p-4 border-2 rounded-lg flex items-center space-x-3 transition-all ${
                      selectedProvider === provider.id
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className="text-2xl">{provider.icon}</span>
                    <span className="font-medium">{provider.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {selectedProvider && (
              <div>
                <Label htmlFor="phoneNumber">
                  {t("payment.form.phoneNumber")}
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-2">
                  {t("payment.mobile.phoneNote")}
                </p>
              </div>
            )}

            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <QrCode className="h-4 w-4 text-purple-600" />
                <span className="font-medium text-purple-900">
                  {t("payment.mobile.howItWorks")}
                </span>
              </div>
              <ol className="text-sm text-purple-800 space-y-1 ml-6 list-decimal">
                <li>{t("payment.mobile.step1")}</li>
                <li>{t("payment.mobile.step2")}</li>
                <li>{t("payment.mobile.step3")}</li>
              </ol>
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700"
              size="lg"
              disabled={!selectedProvider || !phoneNumber}
            >
              {t("payment.mobile.sendPaymentRequest")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

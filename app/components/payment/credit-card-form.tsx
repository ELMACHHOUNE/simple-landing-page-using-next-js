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
import { ArrowLeft, CreditCard, Lock } from "lucide-react";

interface CreditCardFormProps {
  onSubmit: (data: any) => void;
  onBack: () => void;
  program?: any;
}

export default function CreditCardForm({
  onSubmit,
  onBack,
  program,
}: CreditCardFormProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    email: "",
    billingAddress: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });

  const handleInputChange = (field: string, value: string) => {
    if (field.startsWith("billing.")) {
      const billingField = field.replace("billing.", "");
      setFormData((prev) => ({
        ...prev,
        billingAddress: {
          ...prev.billingAddress,
          [billingField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, method: "credit-card" });
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
            <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
            {t("payment.methods.creditCard.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Card Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">
                {t("payment.form.cardInformation")}
              </h3>

              <div>
                <Label htmlFor="cardNumber">
                  {t("payment.form.cardNumber")}
                </Label>
                <Input
                  id="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={(e) =>
                    handleInputChange(
                      "cardNumber",
                      formatCardNumber(e.target.value)
                    )
                  }
                  maxLength={19}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">
                    {t("payment.form.expiryDate")}
                  </Label>
                  <Input
                    id="expiryDate"
                    type="text"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={(e) =>
                      handleInputChange(
                        "expiryDate",
                        formatExpiryDate(e.target.value)
                      )
                    }
                    maxLength={5}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">{t("payment.form.cvv")}</Label>
                  <Input
                    id="cvv"
                    type="text"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={(e) =>
                      handleInputChange(
                        "cvv",
                        e.target.value.replace(/\D/g, "")
                      )
                    }
                    maxLength={4}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="cardholderName">
                  {t("payment.form.cardholderName")}
                </Label>
                <Input
                  id="cardholderName"
                  type="text"
                  placeholder={t("payment.form.cardholderNamePlaceholder")}
                  value={formData.cardholderName}
                  onChange={(e) =>
                    handleInputChange("cardholderName", e.target.value)
                  }
                  required
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">
                {t("payment.form.contactInformation")}
              </h3>
              <div>
                <Label htmlFor="email">{t("payment.form.email")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Billing Address */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">
                {t("payment.form.billingAddress")}
              </h3>
              <div>
                <Label htmlFor="street">
                  {t("payment.form.streetAddress")}
                </Label>
                <Input
                  id="street"
                  type="text"
                  value={formData.billingAddress.street}
                  onChange={(e) =>
                    handleInputChange("billing.street", e.target.value)
                  }
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">{t("payment.form.city")}</Label>
                  <Input
                    id="city"
                    type="text"
                    value={formData.billingAddress.city}
                    onChange={(e) =>
                      handleInputChange("billing.city", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="state">{t("payment.form.state")}</Label>
                  <Input
                    id="state"
                    type="text"
                    value={formData.billingAddress.state}
                    onChange={(e) =>
                      handleInputChange("billing.state", e.target.value)
                    }
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="zipCode">{t("payment.form.zipCode")}</Label>
                  <Input
                    id="zipCode"
                    type="text"
                    value={formData.billingAddress.zipCode}
                    onChange={(e) =>
                      handleInputChange("billing.zipCode", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="country">{t("payment.form.country")}</Label>
                  <Input
                    id="country"
                    type="text"
                    value={formData.billingAddress.country}
                    onChange={(e) =>
                      handleInputChange("billing.country", e.target.value)
                    }
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
              <Lock className="h-4 w-4" />
              <span>{t("payment.form.securePayment")}</span>
            </div>

            <Button type="submit" className="w-full" size="lg">
              {t("payment.form.proceedToReview")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

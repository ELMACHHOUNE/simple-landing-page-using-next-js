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
import { ArrowLeft, AlertTriangle, Copy } from "lucide-react";

interface BankDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
  routingNumber: string;
  reference: string;
}

interface BankTransferData {
  fullName: string;
  email: string;
  phone: string;
  bankDetails?: BankDetails;
  [key: string]: string | BankDetails | undefined;
}

interface BankTransferFormProps {
  onSubmit: (data: BankTransferData) => void;
  onBack: () => void;
}

export default function BankTransferForm({
  onSubmit,
  onBack,
}: BankTransferFormProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<BankTransferData>({
    fullName: "",
    email: "",
    phone: "",
  });

  const bankDetails = {
    bankName: "MSc-GoMyCode Bank",
    accountName: "MSc-GoMyCode Education",
    accountNumber: "1234567890",
    routingNumber: "021000021",
    reference: `MSC${Date.now()}`,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, bankDetails });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Button variant="ghost" onClick={onBack} className="mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        {t("payment.backToMethods")}
      </Button>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>{t("payment.bankTransfer.details")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-600">
                  {t("payment.bankTransfer.bankName")}
                </Label>
                <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <span className="font-mono">{bankDetails.bankName}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(bankDetails.bankName)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-600">
                  {t("payment.bankTransfer.accountName")}
                </Label>
                <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <span className="font-mono">{bankDetails.accountName}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(bankDetails.accountName)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-600">
                  {t("payment.bankTransfer.accountNumber")}
                </Label>
                <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <span className="font-mono">{bankDetails.accountNumber}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(bankDetails.accountNumber)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-600">
                  {t("payment.bankTransfer.routingNumber")}
                </Label>
                <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <span className="font-mono">{bankDetails.routingNumber}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(bankDetails.routingNumber)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800">
                    {t("payment.bankTransfer.important")}
                  </h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    {t("payment.bankTransfer.referenceNote")}
                  </p>
                  <div className="flex items-center justify-between bg-yellow-100 p-2 rounded mt-2">
                    <span className="font-mono text-yellow-800">
                      {bankDetails.reference}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(bankDetails.reference)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <p>{t("payment.bankTransfer.instructions1")}</p>
              <p>{t("payment.bankTransfer.instructions2")}</p>
              <p>{t("payment.bankTransfer.instructions3")}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("payment.bankTransfer.contactInfo")}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName">{t("payment.form.fullName")}</Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
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
              <div>
                <Label htmlFor="phone">{t("payment.form.phoneNumber")}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                {t("payment.bankTransfer.submitRequest")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

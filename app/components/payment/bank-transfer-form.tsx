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
import { ArrowLeft, Building, Copy, Check } from "lucide-react";

interface BankTransferFormProps {
  onSubmit: (data: any) => void;
  onBack: () => void;
  program?: any;
}

export default function BankTransferForm({
  onSubmit,
  onBack,
  program,
}: BankTransferFormProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankDetails = {
    bankName: "MSc-GoMyCode Bank",
    accountName: "MSc-GoMyCode Education Ltd",
    accountNumber: "1234567890",
    routingNumber: "987654321",
    swift: "MSCGMCUS33",
    reference: `MSC-${Date.now()}`,
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, bankDetails, method: "bank-transfer" });
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

      <div className="space-y-6">
        {/* Bank Details Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="h-5 w-5 mr-2 text-green-600" />
              {t("payment.bankTransfer.details")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500">
                    {t("payment.bankTransfer.bankName")}
                  </p>
                  <p className="font-medium">{bankDetails.bankName}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    copyToClipboard(bankDetails.bankName, "bankName")
                  }
                >
                  {copiedField === "bankName" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500">
                    {t("payment.bankTransfer.accountName")}
                  </p>
                  <p className="font-medium">{bankDetails.accountName}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    copyToClipboard(bankDetails.accountName, "accountName")
                  }
                >
                  {copiedField === "accountName" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500">
                    {t("payment.bankTransfer.accountNumber")}
                  </p>
                  <p className="font-medium">{bankDetails.accountNumber}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    copyToClipboard(bankDetails.accountNumber, "accountNumber")
                  }
                >
                  {copiedField === "accountNumber" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500">
                    {t("payment.bankTransfer.routingNumber")}
                  </p>
                  <p className="font-medium">{bankDetails.routingNumber}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    copyToClipboard(bankDetails.routingNumber, "routingNumber")
                  }
                >
                  {copiedField === "routingNumber" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>

              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div>
                  <p className="text-sm text-blue-600 font-medium">
                    {t("payment.bankTransfer.reference")}
                  </p>
                  <p className="font-bold text-blue-800">
                    {bankDetails.reference}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    copyToClipboard(bankDetails.reference, "reference")
                  }
                  className="border-blue-300 hover:bg-blue-100"
                >
                  {copiedField === "reference" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>{t("payment.bankTransfer.important")}:</strong>{" "}
                {t("payment.bankTransfer.referenceNote")}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
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
                <Label htmlFor="phone">{t("payment.form.phone")}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>

              <div className="text-sm text-gray-600 space-y-2">
                <p>{t("payment.bankTransfer.instructions1")}</p>
                <p>{t("payment.bankTransfer.instructions2")}</p>
                <p>{t("payment.bankTransfer.instructions3")}</p>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
                size="lg"
              >
                {t("payment.bankTransfer.submitRequest")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

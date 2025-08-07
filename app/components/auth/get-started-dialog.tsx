/* filepath: /c:/Users/LenOvo/Desktop/master/next project/msc_next_project/app/components/auth/get-started-dialog.tsx */
"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Checkbox } from "@/app/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { Separator } from "@/app/components/ui/separator";
import { Github, Mail, ArrowRight } from "lucide-react";
import { useLanguage } from "@/app/contexts/language-context";

interface GetStartedDialogProps {
  children: React.ReactNode;
}

export default function GetStartedDialog({ children }: GetStartedDialogProps) {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    experience: "",
    goals: "",
    timeline: "",
    agreeTerms: false,
    agreeMarketing: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Get started form:", formData);
    setIsLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {t("auth.getStarted.title")}
          </DialogTitle>
          <DialogDescription className="text-center">
            {t("auth.getStarted.stepProgress").replace(
              "{step}",
              step.toString()
            )}
          </DialogDescription>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                {t("auth.getStarted.personalInfo.title")}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    {t("auth.getStarted.personalInfo.firstName")}{" "}
                    {t("auth.getStarted.required")}
                  </Label>
                  <Input
                    id="firstName"
                    placeholder={t(
                      "auth.getStarted.personalInfo.firstNamePlaceholder"
                    )}
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    {t("auth.getStarted.personalInfo.lastName")}{" "}
                    {t("auth.getStarted.required")}
                  </Label>
                  <Input
                    id="lastName"
                    placeholder={t(
                      "auth.getStarted.personalInfo.lastNamePlaceholder"
                    )}
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  {t("auth.getStarted.personalInfo.email")}{" "}
                  {t("auth.getStarted.required")}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t(
                    "auth.getStarted.personalInfo.emailPlaceholder"
                  )}
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  {t("auth.getStarted.personalInfo.phone")}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t(
                    "auth.getStarted.personalInfo.phonePlaceholder"
                  )}
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>

              <div className="pt-4">
                <Button type="button" onClick={handleNext} className="w-full">
                  {t("auth.getStarted.buttons.continue")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Program Selection */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                {t("auth.getStarted.programSelection.title")}
              </h3>

              <div className="space-y-2">
                <Label>
                  {t("auth.getStarted.programSelection.programLabel")}{" "}
                  {t("auth.getStarted.required")}
                </Label>
                <Select
                  value={formData.program}
                  onValueChange={(value) => handleInputChange("program", value)}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={t(
                        "auth.getStarted.programSelection.programPlaceholder"
                      )}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-stack">
                      {t("auth.getStarted.programSelection.programs.fullStack")}
                    </SelectItem>
                    <SelectItem value="frontend">
                      {t("auth.getStarted.programSelection.programs.frontend")}
                    </SelectItem>
                    <SelectItem value="backend">
                      {t("auth.getStarted.programSelection.programs.backend")}
                    </SelectItem>
                    <SelectItem value="mobile">
                      {t("auth.getStarted.programSelection.programs.mobile")}
                    </SelectItem>
                    <SelectItem value="devops">
                      {t("auth.getStarted.programSelection.programs.devops")}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>
                  {t("auth.getStarted.programSelection.experienceLabel")}
                </Label>
                <RadioGroup
                  value={formData.experience}
                  onValueChange={(value) =>
                    handleInputChange("experience", value)
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="beginner" id="beginner" />
                    <Label htmlFor="beginner">
                      {t(
                        "auth.getStarted.programSelection.experienceLevels.beginner"
                      )}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="some" id="some" />
                    <Label htmlFor="some">
                      {t(
                        "auth.getStarted.programSelection.experienceLevels.some"
                      )}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intermediate" id="intermediate" />
                    <Label htmlFor="intermediate">
                      {t(
                        "auth.getStarted.programSelection.experienceLevels.intermediate"
                      )}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="advanced" id="advanced" />
                    <Label htmlFor="advanced">
                      {t(
                        "auth.getStarted.programSelection.experienceLevels.advanced"
                      )}
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>
                  {t("auth.getStarted.programSelection.timelineLabel")}
                </Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) =>
                    handleInputChange("timeline", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={t(
                        "auth.getStarted.programSelection.timelinePlaceholder"
                      )}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">
                      {t("auth.getStarted.programSelection.timelines.asap")}
                    </SelectItem>
                    <SelectItem value="1month">
                      {t("auth.getStarted.programSelection.timelines.1month")}
                    </SelectItem>
                    <SelectItem value="3months">
                      {t("auth.getStarted.programSelection.timelines.3months")}
                    </SelectItem>
                    <SelectItem value="6months">
                      {t("auth.getStarted.programSelection.timelines.6months")}
                    </SelectItem>
                    <SelectItem value="exploring">
                      {t(
                        "auth.getStarted.programSelection.timelines.exploring"
                      )}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1"
                >
                  {t("auth.getStarted.buttons.back")}
                </Button>
                <Button type="button" onClick={handleNext} className="flex-1">
                  {t("auth.getStarted.buttons.continue")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Goals and Confirmation */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                {t("auth.getStarted.goals.title")}
              </h3>

              <div className="space-y-2">
                <Label htmlFor="goals">
                  {t("auth.getStarted.goals.goalsLabel")}
                </Label>
                <Textarea
                  id="goals"
                  placeholder={t("auth.getStarted.goals.goalsPlaceholder")}
                  value={formData.goals}
                  onChange={(e) => handleInputChange("goals", e.target.value)}
                  rows={4}
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) =>
                      handleInputChange("agreeTerms", checked)
                    }
                  />
                  <Label htmlFor="terms" className="text-sm">
                    {t("auth.getStarted.goals.agreeTerms")}
                    {t("auth.getStarted.required")}
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="marketing"
                    checked={formData.agreeMarketing}
                    onCheckedChange={(checked) =>
                      handleInputChange("agreeMarketing", checked)
                    }
                  />
                  <Label htmlFor="marketing" className="text-sm">
                    {t("auth.getStarted.goals.agreeMarketing")}
                  </Label>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1"
                >
                  {t("auth.getStarted.buttons.back")}
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={!formData.agreeTerms || isLoading}
                >
                  {isLoading
                    ? t("auth.getStarted.buttons.submitting")
                    : t("auth.getStarted.buttons.getStarted")}
                </Button>
              </div>
            </div>
          )}
        </form>

        {step === 1 && (
          <>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  {t("auth.getStarted.orSignUpWith")}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                {t("auth.signIn.github")}
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                {t("auth.signIn.google")}
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

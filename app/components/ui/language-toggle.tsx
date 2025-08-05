/* filepath: /c:/Users/LenOvo/Desktop/master/next project/msc_next_project/app/components/ui/language-toggle.tsx */
"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Globe, Check } from "lucide-react";
import { useLanguage } from "@/app/contexts/language-context";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en" as const, name: "English", flag: "🇺🇸" },
    { code: "fr" as const, name: "Français", flag: "🇫🇷" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 px-2 text-gray-700 hover:bg-gray-100"
        >
          <Globe className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline-block mr-1">
            {currentLanguage?.flag}
          </span>
          <span className="text-sm font-medium">{language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code);
              setIsOpen(false);
            }}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center">
              <span className="mr-2">{lang.flag}</span>
              <span>{lang.name}</span>
            </div>
            {language === lang.code && (
              <Check className="h-4 w-4 text-blue-600" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

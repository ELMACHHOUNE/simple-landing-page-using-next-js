"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [mounted, setMounted] = useState(false);

  // Set mounted state after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load language from localStorage only after mounting
  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
        setLanguage(savedLanguage);
      }
    }
  }, [mounted]);

  // Save language to localStorage when it changes (only after mounting)
  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language, mounted]);

  // Load translations dynamically based on the selected language
  useEffect(() => {
    async function loadTranslations() {
      try {
        const response = await import(`../locales/${language}.json`);
        setTranslations(response.default);
      } catch (error) {
        console.error(
          `Error loading translations for language "${language}":`,
          error
        );
      }
    }
    loadTranslations();
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        console.warn(
          `Translation key "${key}" not found for language "${language}"`
        );
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

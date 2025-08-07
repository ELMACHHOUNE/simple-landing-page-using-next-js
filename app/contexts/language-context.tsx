"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "fr";

type TranslationValue = string | { [key: string]: TranslationValue };
type Translations = Record<string, TranslationValue>;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [translations, setTranslations] = useState<Translations>({});
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(true);
      try {
        const response = await fetch(`/locales/${language}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load translations: ${response.status}`);
        }
        const data = await response.json();
        setTranslations(data);
        console.log(`Translations loaded for ${language}:`, Object.keys(data));
      } catch (error) {
        console.error(
          `Error loading translations for language "${language}":`,
          error
        );
        // Fallback to empty object if loading fails
        setTranslations({});
      } finally {
        setIsLoading(false);
      }
    }
    loadTranslations();
  }, [language]);

  const t = (key: string): string => {
    if (isLoading) {
      return key; // Return key while loading
    }

    const keys = key.split(".");
    let value: TranslationValue = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        console.warn(
          `Translation key "${key}" not found for language "${language}". Available keys:`,
          Object.keys(translations)
        );
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
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

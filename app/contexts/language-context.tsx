/* filepath: /c:/Users/LenOvo/Desktop/master/next project/msc_next_project/app/contexts/language-context.tsx */
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

// Direct translations object
const translations = {
  en: {
    nav: {
      home: "Home",
      programs: "Programs",
      features: "Features",
      testimonials: "Reviews",
      contact: "Contact",
      signIn: "Sign In",
      getStarted: "Get Started",
    },
    hero: {
      badge: "🚀 New: Advanced React & Next.js Course Available",
      title: "Master Modern Web Development",
      subtitle:
        "Join thousands of developers who've transformed their careers with our comprehensive coding bootcamp. From beginner to professional in 6 months.",
      startJourney: "Start Your Journey",
      watchDemo: "Watch Demo",
      noExperience: "No experience needed",
      jobGuarantee: "Job guarantee",
      liveMentorship: "Live mentorship",
    },
    stats: {
      graduatesHired: "Graduates Hired",
      jobPlacement: "Job Placement Rate",
      averageSalary: "Average Starting Salary",
      monthsToCareer: "Months to Career",
    },
    programs: {
      title: "Choose Your Path",
      subtitle: "Specialized programs designed for your career goals",
      mostPopular: "Most Popular",
      fullStack: {
        title: "Full Stack Development",
        description:
          "Master both frontend and backend technologies with React, Node.js, and databases.",
      },
      frontend: {
        title: "Frontend Specialist",
        description:
          "Focus on creating beautiful, responsive user interfaces and experiences.",
      },
      backend: {
        title: "Backend Engineering",
        description:
          "Build robust server-side applications and APIs with modern frameworks.",
      },
      duration: "Duration:",
      level: "Level:",
      keySkills: "Key Skills:",
      learnMore: "Learn More",
    },
    features: {
      title: "Why Choose MSc-GoMyCode?",
      subtitle: "Everything you need to become a professional developer",
    },
    testimonials: {
      title: "Success Stories",
      subtitle: "Hear from our graduates who transformed their careers",
      sarah: {
        quote:
          "MSc-GoMyCode gave me the skills and confidence to land my dream job. The mentorship was invaluable!",
      },
      marcus: {
        quote:
          "From zero coding experience to a six-figure salary in 8 months. The program really works!",
      },
      emily: {
        quote:
          "The project-based approach helped me build a portfolio that impressed employers.",
      },
    },
    cta: {
      title: "Ready to Start Your Coding Journey?",
      subtitle: "Join our next cohort starting in September 2025",
      applyNow: "Apply Now - Limited Spots Available",
      scheduleCall: "Schedule a Call",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      programs: "Programmes",
      features: "Fonctionnalités",
      testimonials: "Avis",
      contact: "Contact",
      signIn: "Se connecter",
      getStarted: "Commencer",
    },
    hero: {
      badge: "🚀 Nouveau : Cours Avancé React & Next.js Disponible",
      title: "Maîtrisez le Développement Web Moderne",
      subtitle:
        "Rejoignez des milliers de développeurs qui ont transformé leur carrière avec notre bootcamp de programmation complet. De débutant à professionnel en 6 mois.",
      startJourney: "Commencez Votre Parcours",
      watchDemo: "Voir la Démo",
      noExperience: "Aucune expérience requise",
      jobGuarantee: "Garantie d'emploi",
      liveMentorship: "Mentorat en direct",
    },
    stats: {
      graduatesHired: "Diplômés Embauchés",
      jobPlacement: "Taux de Placement",
      averageSalary: "Salaire de Départ Moyen",
      monthsToCareer: "Mois vers Carrière",
    },
    programs: {
      title: "Choisissez Votre Voie",
      subtitle: "Programmes spécialisés conçus pour vos objectifs de carrière",
      mostPopular: "Le Plus Populaire",
      fullStack: {
        title: "Développement Full Stack",
        description:
          "Maîtrisez les technologies frontend et backend avec React, Node.js et les bases de données.",
      },
      frontend: {
        title: "Spécialiste Frontend",
        description:
          "Concentrez-vous sur la création d'interfaces utilisateur belles et réactives.",
      },
      backend: {
        title: "Ingénierie Backend",
        description:
          "Construisez des applications côté serveur robustes et des API avec des frameworks modernes.",
      },
      duration: "Durée :",
      level: "Niveau :",
      keySkills: "Compétences Clés :",
      learnMore: "En Savoir Plus",
    },
    features: {
      title: "Pourquoi Choisir MSc-GoMyCode ?",
      subtitle:
        "Tout ce dont vous avez besoin pour devenir un développeur professionnel",
    },
    testimonials: {
      title: "Histoires de Succès",
      subtitle: "Écoutez nos diplômés qui ont transformé leur carrière",
      sarah: {
        quote:
          "MSc-GoMyCode m'a donné les compétences et la confiance pour décrocher mon emploi de rêve !",
      },
      marcus: {
        quote:
          "De zéro expérience en programmation à un salaire à six chiffres en 8 mois. Le programme fonctionne vraiment !",
      },
      emily: {
        quote:
          "L'approche basée sur les projets m'a aidé à construire un portfolio qui a impressionné les employeurs.",
      },
    },
    cta: {
      title: "Prêt à Commencer Votre Parcours de Programmation ?",
      subtitle:
        "Rejoignez notre prochaine cohorte qui commence en septembre 2025",
      applyNow: "Postulez Maintenant - Places Limitées",
      scheduleCall: "Planifier un Appel",
    },
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load language from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];

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

"use client";
import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { useLanguage } from "@/app/contexts/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">MSc-GoMyCode</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {t("footer.description")}
            </p>
            <div className="flex space-x-3">
              <Button
                size="sm"
                variant="ghost"
                className="p-2 hover:bg-gray-800 hover:text-white transition-all duration-200"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="p-2 hover:bg-gray-800 hover:text-white transition-all duration-200"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="p-2 hover:bg-gray-800 hover:text-white transition-all duration-200"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="p-2 hover:bg-gray-800 hover:text-white transition-all duration-200"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="p-2 hover:bg-gray-800 hover:text-white transition-all duration-200"
                aria-label="Visit our GitHub page"
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              {t("footer.programs")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#programs"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base block py-1"
                >
                  {t("programs.fullStack.title")}
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base block py-1"
                >
                  {t("programs.frontend.title")}
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base block py-1"
                >
                  {t("programs.backend.title")}
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base block py-1"
                >
                  Mobile Development
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base block py-1"
                >
                  DevOps & Cloud
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              {t("footer.company")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base block py-1"
                >
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base block py-1"
                >
                  {t("footer.ourStory")}
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base block py-1"
                >
                  {t("footer.careers")}
                </a>
              </li>
              <li>
                <a
                  href="#press"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base block py-1"
                >
                  {t("footer.press")}
                </a>
              </li>
              <li>
                <a
                  href="#partnership"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base block py-1"
                >
                  {t("footer.partnership")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              {t("footer.getInTouch")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-300">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@msc-gomycode.com"
                  className="text-sm hover:text-white transition-colors break-all"
                >
                  info@msc-gomycode.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-sm hover:text-white transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3 text-white">
                {t("footer.support")}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#help"
                    className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                  >
                    {t("footer.helpCenter")}
                  </a>
                </li>
                <li>
                  <a
                    href="#portal"
                    className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                  >
                    {t("footer.studentPortal")}
                  </a>
                </li>
                <li>
                  <a
                    href="#community"
                    className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
                  >
                    {t("footer.community")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-300 text-sm text-center md:text-left">
            {t("footer.copyright")}
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm">
            <a
              href="#privacy"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("footer.privacyPolicy")}
            </a>
            <a
              href="#terms"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("footer.termsOfService")}
            </a>
            <a
              href="#cookies"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("footer.cookiePolicy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* filepath: /c:/Users/LenOvo/Desktop/master/next project/msc_next_project/app/components/sections/cta-section.tsx */
import { Button } from "@/app/components/ui/button";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Start Your Coding Journey?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join our next cohort starting in September 2025
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Apply Now - Limited Spots Available
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600"
          >
            Schedule a Call
          </Button>
        </div>

        <div className="mt-12 text-center opacity-75">
          <p className="text-sm">
            💳 No upfront payment • 💼 Job guarantee • 🔄 Full refund policy
          </p>
        </div>
      </div>
    </section>
  );
}

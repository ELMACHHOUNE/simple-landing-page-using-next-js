/* filepath: /c:/Users/LenOvo/Desktop/master/next project/msc_next_project/app/components/sections/testimonials-section.tsx */
import { Card, CardContent } from "@/app/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer at Google",
    initials: "SJ",
    color: "from-pink-500 to-rose-500",
    quote:
      "MSc-GoMyCode gave me the skills and confidence to land my dream job. The mentorship was invaluable!",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Full Stack Developer at Microsoft",
    initials: "MC",
    color: "from-blue-500 to-cyan-500",
    quote:
      "From zero coding experience to a six-figure salary in 8 months. The program really works!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Backend Engineer at Amazon",
    initials: "ER",
    color: "from-purple-500 to-indigo-500",
    quote:
      "The project-based approach helped me build a portfolio that impressed employers.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our graduates who transformed their careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center space-x-3">
                  {/* CSS-based avatar with initials */}
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

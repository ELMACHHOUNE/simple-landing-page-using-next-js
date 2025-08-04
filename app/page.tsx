import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code,
  Users,
  Trophy,
  Star,
  CheckCircle,
  BookOpen,
  Award,
  Clock,
  Globe,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-slate-50 to-blue-50 py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
            🚀 New: Advanced React & Next.js Course Available
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Master Modern
            <br />
            Web Development
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who've transformed their careers with
            our comprehensive coding bootcamp. From beginner to professional in
            6 months.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-sm text-gray-600">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>No experience needed</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Job guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Live mentorship</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-none shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  5,000+
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Graduates Hired
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-6 border-none shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  95%
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Job Placement Rate
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-6 border-none shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  $75k
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Average Starting Salary
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-6 border-none shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  6
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Months to Career
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600">
              Specialized programs designed for your career goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Full Stack Development",
                description:
                  "Master both frontend and backend technologies with React, Node.js, and databases.",
                duration: "6 months",
                level: "Beginner to Advanced",
                skills: ["React", "Node.js", "MongoDB", "TypeScript"],
                popular: true,
              },
              {
                title: "Frontend Specialist",
                description:
                  "Focus on creating beautiful, responsive user interfaces and experiences.",
                duration: "4 months",
                level: "Beginner to Intermediate",
                skills: ["React", "Vue.js", "CSS/SASS", "JavaScript"],
                popular: false,
              },
              {
                title: "Backend Engineering",
                description:
                  "Build robust server-side applications and APIs with modern frameworks.",
                duration: "5 months",
                level: "Intermediate to Advanced",
                skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
                popular: false,
              },
            ].map((program, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-xl transition-shadow relative ${
                  program.popular ? "ring-2 ring-blue-500" : ""
                }`}
              >
                {program.popular && (
                  <Badge className="absolute -top-3 left-6 bg-blue-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-semibold">{program.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Level:</span>
                    <span className="font-semibold">{program.level}</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full mt-4"
                    variant={program.popular ? "default" : "outline"}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose MSc-GoMyCode?
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to become a professional developer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Project-Based Learning",
                description:
                  "Build real-world applications that you can showcase to employers and add to your portfolio.",
                icon: Code,
                color: "blue",
              },
              {
                title: "1-on-1 Mentorship",
                description:
                  "Personal guidance from industry experts throughout your journey with weekly check-ins.",
                icon: Users,
                color: "purple",
              },
              {
                title: "Job Placement Support",
                description:
                  "Resume reviews, interview prep, and direct connections to our 500+ hiring partners.",
                icon: Trophy,
                color: "green",
              },
              {
                title: "Flexible Learning",
                description:
                  "Study at your own pace with both live sessions and recorded content available 24/7.",
                icon: Clock,
                color: "orange",
              },
              {
                title: "Industry Certifications",
                description:
                  "Earn recognized certifications that validate your skills to potential employers.",
                icon: Award,
                color: "red",
              },
              {
                title: "Global Community",
                description:
                  "Join a worldwide network of developers, alumni, and industry professionals.",
                icon: Globe,
                color: "indigo",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4`}
                  >
                    <feature.icon
                      className={`h-6 w-6 text-${feature.color}-600`}
                    />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
            {[
              {
                name: "Sarah Johnson",
                role: "Frontend Developer at Google",
                image:
                  "https://images.unsplash.com/photo-1494790108755-2616b612b190?w=150&h=150&fit=crop&crop=face",
                quote:
                  "MSc-GoMyCode gave me the skills and confidence to land my dream job. The mentorship was invaluable!",
                rating: 5,
              },
              {
                name: "Marcus Chen",
                role: "Full Stack Developer at Microsoft",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                quote:
                  "From zero coding experience to a six-figure salary in 8 months. The program really works!",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Backend Engineer at Amazon",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                quote:
                  "The project-based approach helped me build a portfolio that impressed employers.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="space-y-4">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
}

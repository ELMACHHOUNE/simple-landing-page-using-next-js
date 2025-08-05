/* filepath: /c:/Users/LenOvo/Desktop/master/next project/msc_next_project/app/components/sections/programs-section.tsx */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";

const programs = [
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
];

export default function ProgramsSection() {
  return (
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
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-xl transition-shadow relative ${
                program.popular ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {program.popular && (
                <Badge className="absolute -top-3 left-6 bg-blue-600 text-white hover:bg-blue-700">
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
  );
}

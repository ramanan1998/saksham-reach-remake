import { Card, CardContent } from "@/components/ui/card";

const coordinators = [
  {
    initial: "R",
    name: "R. Koteeswari",
    role: "Dheemahi Incharge",
  },
  {
    initial: "K",
    name: "Kumaresan",
    role: "Yuva Incharge",
  },
  {
    initial: "R",
    name: "Ranjani",
    role: "Skill Training Incharge",
  },
];

export default function ProjectCordinators() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Project Coordinators
        </h2>
        <p className="text-gray-600 mb-12">
          Our project coordinators oversee the daily operations of our various
          initiatives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coordinators.map((person, index) => (
            <Card
              key={index}
              className="rounded-xl shadow-md hover:shadow-lg transition"
            >
              <CardContent className="flex flex-col items-center p-6">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-yellow-400 text-xl font-bold text-gray-900 mb-4">
                  {person.initial}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm text-green-800 mt-1">{person.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

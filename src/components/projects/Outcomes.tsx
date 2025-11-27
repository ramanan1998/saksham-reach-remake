import { CheckCircle2 } from "lucide-react"

const outcomes = [
  "Improved academic performance for students with learning disabilities",
  "Preparation for higher education and vocational training",
  "Integration into mainstream education where possible",
  "Enhanced self-confidence and social skills",
  "Development of independence and life skills",
]

export default function ProjectOutcomes() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Project Outcomes</h3>

        {/* Outcomes List */}
        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
          {outcomes.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-700 mt-1" />
              <span className="text-gray-800">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

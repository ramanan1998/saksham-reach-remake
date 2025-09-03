import { Card, CardContent } from "@/components/ui/card"
import { MessageSquareQuote } from "lucide-react"

const testimonials = [
  {
    text: "SAKSHAM has been a blessing for my child. The teachers are patient and caring, and my son has shown remarkable improvement in his studies and confidence.",
    name: "Priya Ramesh",
    role: "Parent of a student with learning disability",
  },
  {
    text: "The Dheemahi project has transformed the lives of many children who were struggling in conventional classrooms. The personalized attention they receive here makes all the difference.",
    name: "Dr. Meenakshi S",
    role: "Educational Consultant",
  },
  {
    text: "Supporting SAKSHAM has been one of the most rewarding decisions we've made as a company. Their transparency and the impact they create is truly inspiring.",
    name: "Rajesh Kumar",
    role: "Corporate Donor",
  },
]

export default function Testimonials() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          What People Say
        </h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-2 rounded" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="relative border-t-4 border-green-800 rounded-xl shadow-sm"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-800 rounded-full p-2">
                <MessageSquareQuote className="h-5 w-5 text-white" />
              </div>
              <CardContent className="pt-10 pb-6 px-6 text-left">
                <p className="italic text-gray-700">{item.text}</p>
                <p className="mt-4 font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const impacts = [
  { value: "₹8,650", description: "Sponsors one student for a full year" },
  { value: "₹2,60,000", description: "Funds an entire batch of 30 students" },
  { value: "100%", description: "Of your donation goes directly to program costs" },
]

export default function ImpactOfSupport() {
  return (
    <section className="w-full bg-green-900 py-16 text-center text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold">The Impact of Your Support</h2>
        <p className="mt-3 text-green-100 max-w-3xl mx-auto">
          When you donate to SAKSHAM, you're making a real difference in the lives of 
          people with disabilities. Here's how your contribution helps:
        </p>

        {/* Impact Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {impacts.map((item, index) => (
            <Card
              key={index}
              className="bg-green-800 border-none shadow-none rounded-xl"
            >
              <CardContent className="py-8 flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-yellow-400">{item.value}</p>
                <p className="mt-2 text-green-100">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Donate Button */}
        <div className="mt-10">
          <Button className="bg-green-700 hover:bg-green-800 text-white text-base px-6 py-2 rounded-lg">
            Make a Donation Today
          </Button>
        </div>
      </div>
    </section>
  )
}

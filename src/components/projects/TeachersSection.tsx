import { Button } from "@/components/ui/button"

export default function TeachersSection() {
  const teachers = [
    "Sethu Sundaram", "Sulochana P", "Swetha Kannan", "Dr. VS Gayathri",
    "Baskar Subramanian", "Ezhilarasi", "Geetha Ravindaran", "Baskar",
    "Shyla Rao", "Janani S", "Uma Rajamani", "Rohini Venkatesh",
    "Bhuvaneshwari", "Sumathi Ramanujam", "Koteeswari R", "Vikram",
    "Shrinidhi S", "Radha Satish", "Vivekanand", "Anjana"
  ]

  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Our Dedicated Teachers
        </h3>

        {/* Teacher Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {teachers.map((name, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-lg px-4 py-3 text-gray-800 font-medium shadow-sm"
            >
              {name}
            </div>
          ))}
        </div>

        {/* Support Text */}
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Your support makes it possible for us to continue this impactful
          project and help more children with disabilities achieve their
          educational goals.
        </p>

        {/* CTA Button */}
        <Button className="bg-green-800 hover:bg-green-900 text-white px-6 py-2 rounded-md">
          Support the Dheemahi Project
        </Button>
      </div>
    </section>
  )
}

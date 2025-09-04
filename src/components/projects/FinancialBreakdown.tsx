import { CheckSquare, User, BookOpen, Briefcase } from "lucide-react"

export default function FinancialBreakdown() {
  const breakdown = [
    { label: "General learning kit", value: "₹300" },
    { label: "Food & refreshments", value: "₹1,500" },
    { label: "Textbooks/materials", value: "₹700" },
    { label: "Maintenance", value: "₹800" },
    { label: "Trainer fee", value: "₹3,350" },
    { label: "Administration", value: "₹2,000" },
  ]

  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Financial Breakdown
        </h3>

        {/* Top Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-xl shadow-sm border p-6 bg-gray-50">
            <h4 className="text-lg font-semibold text-gray-800">
              Cost per Student
            </h4>
            <p className="text-3xl font-bold text-green-700 mt-2">₹8,650</p>
            <p className="text-sm text-gray-600 mt-1">For 12 months</p>
          </div>

          <div className="rounded-xl shadow-sm border p-6 bg-gray-50">
            <h4 className="text-lg font-semibold text-gray-800">
              Cost per Batch
            </h4>
            <p className="text-3xl font-bold text-green-700 mt-2">₹2,60,000</p>
            <p className="text-sm text-gray-600 mt-1">For 30 students</p>
          </div>

          <div className="rounded-xl shadow-sm border p-6 bg-gray-50">
            <h4 className="text-lg font-semibold text-gray-800">
              Program Duration
            </h4>
            <p className="text-3xl font-bold text-green-700 mt-2">1 Year</p>
            <p className="text-sm text-gray-600 mt-1">
              Academic year 2024-2025
            </p>
          </div>
        </div>

        {/* Breakdown List */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Cost Breakdown per Student
          </h4>
          <div className="grid sm:grid-cols-2 gap-y-3 gap-x-8">
            {breakdown.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckSquare className="h-5 w-5 text-green-700 mt-0.5" />
                <span className="text-gray-800">
                  {item.label}: <span className="font-medium">{item.value}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


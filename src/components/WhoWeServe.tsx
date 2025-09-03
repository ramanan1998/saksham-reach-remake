import { Card, CardContent } from "@/components/ui/card"

const disabilities = [
  { code: "VI", label: "Visual Impairment" },
  { code: "HI", label: "Hearing Impairment" },
  { code: "ASD", label: "Autism Spectrum Disorder" },
  { code: "CP", label: "Cerebral Palsy" },
  { code: "ID", label: "Intellectual Disability" },
  { code: "LD", label: "Learning Disability" },
]

export default function WhoWeServe() {
    
  return (
    <section className="w-full bg-muted/30 py-12">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-2xl font-bold text-green-800">Who We Serve</h2>
        <p className="mt-2 text-muted-foreground">
          SAKSHAM supports persons with various disabilities, including:
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {disabilities.map((item) => (
            <Card
              key={item.code}
              className="hover:shadow-lg transition rounded-xl border border-gray-200"
            >
              <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted text-green-900 font-semibold text-lg mb-4">
                  {item.code}
                </div>
                <p className="text-base font-medium text-gray-800">
                  {item.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

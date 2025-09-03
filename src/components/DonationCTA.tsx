import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function DonationCTA() {
  return (
    <section className="w-full bg-yellow-100 py-16 text-center">
      <div className="max-w-3xl mx-auto px-4">
        {/* Icon */}
        <Heart className="h-10 w-10 mx-auto text-green-800" />

        {/* Heading */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          Your Support Makes a Difference
        </h2>

        {/* Quote */}
        <p className="mt-4 italic text-gray-700">
          "Your gesture will go a long way in encouraging us to carry on our humble
          contribution in the service of humanity with renewed vigor."
        </p>

        {/* Description */}
        <p className="mt-4 text-gray-800">
          Every donation helps us provide education, support, and opportunities for
          people with disabilities. Join us in creating a more inclusive world where
          everyone can reach their potential.
        </p>

        {/* Donate Button */}
        <div className="mt-8">
          <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-2 text-base rounded-lg">
            Donate Now
          </Button>
        </div>

        {/* CSR Registration */}
        <p className="mt-6 text-sm text-gray-600">
          CSR Registration Number: <span className="font-medium">CSR00004180</span>
        </p>
      </div>
    </section>
  )
}

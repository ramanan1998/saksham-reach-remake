import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, BookOpen, Clock } from "lucide-react"

export default function OurProject() {
  return (
    <section className="w-full bg-muted/30 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Our Projects
        </h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-2 rounded" />
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Discover our initiatives aimed at empowering people with disabilities and 
          creating a more inclusive society.
        </p>

        <Card className="mt-10 overflow-hidden rounded-2xl shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Image */}
            <div className="h-72 lg:h-full">
              <img
                src="https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg"
                alt="Project"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <CardContent className="flex flex-col justify-center text-left p-8">
              <h3 className="text-2xl font-semibold text-green-800">
                Dheemahi Project
              </h3>
              <p className="mt-2 text-muted-foreground">
                A tuition center for children with intellectual and learning disabilities, 
                aiming to help them complete 10th grade and enroll in ITI, diploma, 
                or vocational training courses.
              </p>

              {/* Project Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-sm">
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-green-700" />
                  <div>
                    <p className="font-medium">Schedule</p>
                    <p className="text-muted-foreground">
                      Monday to Saturday, 5:00 PM - 7:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-green-700" />
                  <div>
                    <p className="font-medium">Class Size</p>
                    <p className="text-muted-foreground">
                      Teacher to student ratio of 1:3
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <BookOpen className="h-5 w-5 text-green-700" />
                  <div>
                    <p className="font-medium">Curriculum</p>
                    <p className="text-muted-foreground">
                      Special education for slow learners (Class I to X)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-green-700" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-muted-foreground">
                      1 year (June 2024 - April 2025)
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="bg-green-700 hover:bg-green-800 text-white">
                  Learn More
                </Button>
                <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                  Support This Project
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
}

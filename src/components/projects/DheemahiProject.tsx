import { Calendar, Clock, Users, BookOpen } from "lucide-react"

export default function DheemahiProject() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Project Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">Dheemahi Project</h2>
          <p className="mt-2 text-gray-600 text-lg">
            A tuition center for children with intellectual and learning disabilities
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="Dheemahi Project"
              className="rounded-xl shadow-md"
            />
          </div>

          {/* Right - Details */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Project Overview</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              The Dheemahi Project is a specialized tuition center that aims to help
              children with intellectual and learning disabilities complete their 10th
              grade education and prepare them for ITI, diploma, or vocational training
              courses.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              In India, approximately 15%-23% of students are slow learners who struggle
              in conventional classrooms. The Dheemahi Project addresses this need by
              providing personalized education with a teacher-to-student ratio of 1:3.
            </p>

            {/* Key Details */}
            <div className="mt-6 bg-gray-50 rounded-lg p-5 grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-700" />
                <span className="text-gray-800">June 2024 - April 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-700" />
                <span className="text-gray-800">5:00 PM - 7:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-700" />
                <span className="text-gray-800">1:3 Teacher-Student Ratio</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-700" />
                <span className="text-gray-800">Classes I to X</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

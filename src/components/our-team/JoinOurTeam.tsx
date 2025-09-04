import { Card, CardContent } from "@/components/ui/card";

export default function JoinOurTeam() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Join Our Team</h2>
        <p className="text-gray-600 mb-12">
          Interested in making a difference in the lives of people with
          disabilities? We're always looking for passionate individuals to join
          our mission.
        </p>

        <Card className="rounded-xl shadow-md">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-green-800 mb-6">
              Current Opportunities
            </h3>
            <ul className="text-left space-y-3 text-gray-800">
              <li>• Volunteer Teachers for the Dheemahi Project</li>
              <li>• Special Education Specialists</li>
              <li>• Administrative Support</li>
              <li>• Fundraising Coordinators</li>
            </ul>
            <p className="text-gray-600 mt-8">
              To apply or learn more about these opportunities, please contact
              us at:
            </p>
            <p className="text-green-800 font-medium mt-2">
              sakshamprojectchennai@gmail.com
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}


interface Member {
  name: string
  role: string
  organization: string
  contact: string
}

function LeadershipTeam() {

    const members: Member[] = [
        {
            name: "Kuili Raja Rajeswari",
            role: "Vice President",
            organization: "Director - SIDEL Pvt. Ltd.",
            contact: "9444749586",
        },
        {
            name: "Sankara Narayanan",
            role: "President",
            organization: "SAKSHAM Chennai",
            contact: "",
        },
        {
            name: "Srinidhi Sathyanarayanan",
            role: "Joint Secretary",
            organization: "Director - Citadel Chess World",
            contact: "9884800162",
        },
        {
            name: "I P Ramachandran",
            role: "Secretary",
            organization: "SAKSHAM Chennai",
            contact: "9443438101",
        },
        {
            name: "Srinivasan Chandran",
            role: "R&D Coordinator",
            organization: "Sr. Architect - Bank of America",
            contact: "9500850636",
        },
        {
            name: "Balaji Sridharan",
            role: "Joint Secretary",
            organization: "SAKSHAM Chennai",
            contact: "9176661900",
        },
    ]

    return (
        <section className="w-full py-16 px-4 bg-white">
        <div className="mx-auto container">
            {/* Project Title */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-green-800">Seva Team</h2>
                <p className="mt-2 text-gray-600 text-lg">
                    Our seva team brings diverse expertise and a shared commitment to empowering people with disabilities.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {members.map((member, i) => (
                    <div
                    key={i}
                    className="bg-gray-50 rounded-lg p-6 shadow-sm flex flex-col items-center text-center"
                    >
                    {/* Circle Initial */}
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-800 text-white text-xl font-bold mb-4">
                        {member.name.charAt(0)}
                    </div>

                    {/* Member Info */}
                    <h4 className="text-lg font-semibold text-gray-900">
                        {member.name}
                    </h4>
                    <p className="text-green-700 font-medium">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.organization}</p>
                    {member.contact && (
                        <p className="text-gray-700 text-sm mt-2">
                        <span className="font-medium">Contact:</span> {member.contact}
                        </p>
                    )}
                    </div>
                ))}
            </div>

        </div>
        </section>
    )
}

export default LeadershipTeam
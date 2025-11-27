import { Card, CardContent } from "@/components/ui/card";

export default function OtherWaysToDonate() {
  return (
    <section className="w-full py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
            {/* Heading */}
            <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Other Ways to Donate</h2>
            <p className="text-gray-600 text-sm">
                If you prefer to donate through bank transfer or cheque, you can use the following options.
            </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bank Transfer */}
            <Card className="shadow-sm rounded-xl">
                <CardContent className="space-y-5 p-6">
                {/* Title Row */}
                <div className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">💲</span>
                    <h3 className="font-semibold text-lg">Bank Transfer</h3>
                </div>

                {/* Info List */}
                <div className="text-sm space-y-3">
                    <p>
                    <span className="font-medium text-gray-700">Account Name:</span> SAKSHAM
                    </p>
                    <p>
                    <span className="font-medium text-gray-700">Account Number:</span> 50100576427109
                    </p>
                    <p>
                    <span className="font-medium text-gray-700">Bank Name:</span> HDFC Bank
                    </p>
                    <p>
                    <span className="font-medium text-gray-700">IFSC Code:</span> HDFC0000000
                    </p>
                </div>

                {/* Yellow Note Box */}
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md text-sm text-gray-700">
                    After making a bank transfer, please email us at
                    <span className="font-semibold"> sakshamprojectchennai@gmail.com</span> with your transaction
                    details so we can acknowledge your donation.
                </div>
                </CardContent>
            </Card>

            {/* Donate by Cheque */}
            <Card className="shadow-sm rounded-xl">
                <CardContent className="space-y-5 p-6">
                <div className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">🧾</span>
                    <h3 className="font-semibold text-lg">Donate by Cheque</h3>
                </div>

                <p className="text-sm text-gray-700">
                    Please make your cheque payable to <span className="font-semibold">'SAKSHAM'</span> and send it
                    to our administrative office:
                </p>

                <div className="bg-gray-50 border border-gray-200 p-4 rounded-md text-sm text-gray-700 leading-relaxed">
                    16, Nethaji Road, Ganesh Nagar,<br />
                    Adambakkam, Chennai - 600088<br />
                    Tamil Nadu, India
                </div>

                <p className="text-sm text-gray-600">
                    Please include your contact information (name, address, phone, and email) with your cheque so we
                    can send you an acknowledgement.
                </p>
                </CardContent>
            </Card>
            </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-8">
            <Card className="shadow-sm rounded-xl">
                <CardContent className="space-y-5 p-6">
                {/* Header */}
                <div className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">🏢</span>
                    <h2 className="font-semibold text-lg">
                        Corporate Social Responsibility (CSR)
                    </h2>
                </div>


                {/* Description */}
                <p className="text-sm text-gray-700 leading-relaxed">
                    SAKSHAM is eligible to receive Corporate Social Responsibility (CSR) funds as per
                    Section 135 of the Companies Act, 2013.
                </p>


                {/* Highlighted CSR Number */}
                <div className="bg-green-50 border border-green-200 p-4 rounded-md font-medium text-green-800 text-sm tracking-wide">
                    CSR Registration Number: CSR00004180
                </div>


                {/* Partnership Text */}
                <p className="text-sm text-gray-700 leading-relaxed">
                    We welcome partnerships with corporations to support our projects. Your CSR contribution
                    can make a significant impact on the lives of people with disabilities.
                </p>


                {/* Contact Information */}
                <p className="text-sm text-gray-700 leading-relaxed">
                    For CSR partnerships, please contact us at
                    <span className="font-semibold"> sakshamprojectchennai@gmail.com</span> or call
                    <span className="font-semibold"> 044-4854 1450</span>.
                </p>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}

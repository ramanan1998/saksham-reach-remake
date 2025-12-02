import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left Section */}
        <div>
          <div>
            <img className='w-56 object-contain' src="/logo.png" alt="logo" />
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            National Organisation Committed for the Welfare of Persons with Disability
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            CSR Registration Number: <br /> <span className="font-medium">CSR00004180</span>
          </p>
          <Button className="mt-4 bg-yellow-400 text-black hover:bg-yellow-500">
            Donate Now
          </Button>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold text-gray-900">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-green-800">Home</a></li>
            <li><a href="#" className="hover:text-green-800">About Us</a></li>
            <li><a href="#" className="hover:text-green-800">Projects</a></li>
            <li><a href="#" className="hover:text-green-800">Our Team</a></li>
            <li><a href="#" className="hover:text-green-800">Contact Us</a></li>
            <li><a href="#" className="hover:text-green-800">Make a Donation</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-base font-semibold text-gray-900">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-gray-600 text-sm">
            <li className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 text-green-800" />
              <span>
                Hari Om Vidyalaya, No 23 & 24, <br />
                5th Sector, KK Nagar, Chennai, <br />
                Tamil Nadu - 600078
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-green-800" />
              <span>044-4854 1450</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-green-800" />
              <a href="mailto:sakshamprojectchennai@gmail.com" className="hover:text-green-800">
                sakshamprojectchennai@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-base font-semibold text-gray-900">Follow Us</h3>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="p-2 bg-green-800 text-white rounded-full hover:bg-green-700">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-green-800 text-white rounded-full hover:bg-green-700">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-green-800 text-white rounded-full hover:bg-green-700">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-green-800 text-white rounded-full hover:bg-green-700">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            Sign up for our newsletter to receive updates on our projects and impact.
          </p>
          <div className="mt-3 flex">
            <Input type="email" placeholder="Your email" className="rounded-r-none" />
            <Button className="rounded-l-none bg-green-800 hover:bg-green-700">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-gray-500 text-sm">
        © 2025 SAKSHAM Tamil Nadu. All rights reserved.
      </div>
    </footer>
  )
}

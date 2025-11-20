import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function ContactForm() {

    const form = useForm({
        defaultValues: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        },
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className="pt-20 bg-background flex flex-col lg:flex-row justify-center gap-10 items-start">

            <div className="p-6 space-y-10">
                <h2 className="text-2xl font-semibold">Contact Information</h2>

                {/* Project Office */}
                <div className="space-y-6">
                    <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                        <h3 className="font-semibold">Project Office</h3>
                        <p className="text-gray-700">
                        Hari Om Vidyalaya, No 23 & 24, 5th Sector, KK Nagar, Chennai, Tamil Nadhu - 600078
                        </p>
                    </div>
                    </div>

                    {/* State Office */}
                    <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                        <h3 className="font-semibold">State Office</h3>
                        <p className="text-gray-700">
                        16, Nethaji Road, Ganesh Nagar, Adambakkam, Chennai - 600088
                        </p>
                    </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-700">Office: 044-4854 1450</p>
                        <p className="text-gray-700">Mobile: 7904325220</p>
                    </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-700">sakshamprojectchennai@gmail.com</p>
                    </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                        <h3 className="font-semibold">Working Hours</h3>
                        <p className="text-gray-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                    </div>
                </div>

                {/* Key Contacts */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Key Contacts</h3>

                    <div className="space-y-4">
                    {/* Person 1 */}
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-semibold">Mr. Sabashraj</p>
                        <p className="text-gray-700">President</p>
                        <p className="text-gray-700">9751053433</p>
                    </div>

                    {/* Person 2 */}
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-semibold">Mr. Krishnaraj</p>
                        <p className="text-gray-700">Secretary</p>
                        <p className="text-gray-700">9443438101</p>
                    </div>

                    {/* Person 3 */}
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-semibold">Mrs. Shrinidhi</p>
                        <p className="text-gray-700">Joint Secretary</p>
                        <p className="text-gray-700">9884900162</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="p-6 space-y-10 bg-slate-100 rounded-2xl w-full md:w-fit">
                <h2 className="text-2xl font-semibold">Send Us a Message</h2>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* Name */}
                    <FormField
                        control={form.control}
                        name="name"
                        rules={{ required: "Name is required" }}
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <FormField
                        control={form.control}
                        name="email"
                        rules={{
                            required: "Email is required",
                            pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "Enter a valid email",
                            },
                        }}
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example@mail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField
                        control={form.control}
                        name="phone"
                        rules={{
                            required: "Phone number is required",
                            minLength: {
                            value: 10,
                            message: "Enter a valid phone number",
                            },
                        }}
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>

                    {/* Subject */}
                    <FormField
                        control={form.control}
                        name="subject"
                        rules={{ required: "Subject is required" }}
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                            <Input placeholder="Enter subject" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    {/* Message */}
                    <FormField
                        control={form.control}
                        name="message"
                        rules={{ required: "Message cannot be empty" }}
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                            <Textarea
                                rows={5}
                                className="resize-none"
                                placeholder="Write your message..."
                                {...field}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    {/* Submit */}
                    <Button
                        type="submit"
                    >
                        Send Message
                    </Button>
                </form>
            </Form>
            </div>
        </div>
    );
}
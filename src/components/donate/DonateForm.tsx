import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CircleCheckBig } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function DonationForm() {

  const form = useForm({
    defaultValues: {
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        pan: "",
        adhar: "",
        projectType: "",
        amount: "",
        otherAmount: "",
    },
  });

  const { watch } = form;

  const selectedAmount = watch("amount");
  const otherAmount = watch("otherAmount");

  const displayAmount = selectedAmount || otherAmount || 0;

  const onSubmit = (data) => {
    console.log(data);
  };

  const oneTimeAmounts = ["1000", "2500", "5000", "8650", "10000"];

  const projectTypeList = [
    "General",
    "Dheemahi (A) - Therapy, ASLD, Occasional training",
    "Dheemahi (A) - Autism spectrum disorder",
    "Dheemahi (A) - Mental retardation",
    "Dheemahi (A) - Cerebral palsy",
    "Dheemahi (A) - Mental illness",
    "Dheemahi (B) - Remedial classes for children with SLD",
    "Surdhas Academy - Competitive exam coaching for people with any type of disability",
    "Kreeda - Parasports",
    "Rozgar - Skill training in tailoring, computer classes, people with disabilities and immediate family members"
  ];

  const impacts = [
    { amount: 1000, text: "Provides learning materials for a student" },
    { amount: 2500, text: "Sponsors a student's refreshments for a year" },
    { amount: 5000, text: "Covers educational resources for a student" },
    { amount: 8650, text: "Sponsors one student for a full year" },
    { amount: 25000, text: "Supports 3 students for a year" },
  ];

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-40 py-20 bg-gray-50">
        {/* Left Section */}
        <Card className="shadow-sm">
            <CardContent className="space-y-6 p-6">
                <h2 className="text-xl font-semibold">Your Donation</h2>
                
                <Form {...form}>
                    
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                        {/* Name */}
                        <FormField
                            control={form.control}
                            name="name"
                            rules={{ required: "Name is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name *</FormLabel>
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
                                    <FormLabel>Email *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="example@mail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                rules={{
                                    required: "Phone number is required",
                                    minLength: {
                                    value: 10,
                                    message: "Enter a valid phone number",
                                    },
                                }}
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Phone *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your phone number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* PAN Number */}
                        <FormField
                            control={form.control}
                            name="pan"
                            rules={{ required: "PAN Number is required" }}
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>PAN Number *</FormLabel>
                                <FormControl>
                                <Input placeholder="Enter PAN Number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />

                        {/* Adhar Number */}
                        <FormField
                            control={form.control}
                            name="adhar"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Adhar Number (optional)</FormLabel>
                                <FormControl>
                                <Input placeholder="Enter Adhar Number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />

                        {/* Project */}
                        <FormField
                            control={form.control}
                            name="projectType"
                            rules={{ required: "Project type is required" }}
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Project Type *</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Project Type" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {projectTypeList.map(item => (
                                            <SelectItem key={item} value={item}>{item}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Message */}
                        <FormField
                            control={form.control}
                            name="address"
                            rules={{ required: "Address cannot be empty" }}
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                <Textarea
                                    rows={4}
                                    className="resize-none"
                                    placeholder="Enter your Address..."
                                    {...field}
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">Donate Now</Button>
                        
                    </form>
                </Form>
                
            </CardContent>
        </Card>

        {/* Right Section */}
        <div className="space-y-6">
            <Card className="shadow-sm">
            <CardContent className="space-y-4 p-6">
                <h2 className="text-xl font-semibold">Your Impact</h2>
                <div className="space-y-3">
                {impacts.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border rounded-md bg-white">
                    <CircleCheckBig className="h-6 w-6 stroke-primary" />
                    <div>
                        <p className="font-semibold text-sm">₹{item.amount}</p>
                        <p className="text-xs text-gray-600">{item.text}</p>
                    </div>
                    </div>
                ))}
                </div>
            </CardContent>
            </Card>

            {/* Donation Help Info */}
            <Card className="shadow-sm bg-green-50">
            <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-lg">How Your Donation Helps</h3>
                <ul className="text-sm space-y-2">
                <li>📘 General learning kits (₹300/student)</li>
                <li>📚 Textbooks and training materials (₹700/student)</li>
                <li>👨‍🏫 Qualified trainer fees (₹3,350/student)</li>
                <li>🍛 Food and refreshments (₹1,500/student)</li>
                </ul>
            </CardContent>
            </Card>
        </div>
        </div>
    );
}
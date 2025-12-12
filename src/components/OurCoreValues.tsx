import { Globe, Heart, Shield, Star, Users } from "lucide-react";

function OurCoreValues() {

    const values = [
        {
            icon: Heart,
            title: "Service and Sharing",
            description: "We are committed to serving others and sharing resources with those in need."
        },
        {
            icon: Users,
            title: "Equality",
            description: "We believe in equal opportunities and rights for all people, regardless of disability."
        },
        {
            icon: Shield,
            title: "Moral Uprightness",
            description: "We maintain the highest ethical standards in all our activities and interactions."
        },
        {
            icon: Star,
            title: "Excellence",
            description: "We strive for excellence in our programs and services to maximize impact."
        },
        {
            icon: Globe,
            title: "Transparency",
            description: "We operate with complete transparency in our finances and decision-making processes."
        }
    ];
    return (
        <div className="animate-slide-up pb-20">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">
                Our Core Values
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 px-4 md:px-20">
                {values.map((value, index) => (
                <div
                    key={index}
                    className="text-center p-6 bg-card rounded-xl shadow-medium hover:shadow-large transition-all duration-300 transform hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                    </h4>
                    <p className="text-muted-foreground">
                    {value.description}
                    </p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default OurCoreValues
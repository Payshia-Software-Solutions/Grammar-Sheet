import { BookOpen, FileText, Monitor, Users } from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Experienced Teacher",
        description: "15+ years teaching experience"
    },
    {
        icon: BookOpen,
        title: "Syllabus-Aligned",
        description: "Following official curriculum"
    },
    {
        icon: FileText,
        title: "Past Paper Practice",
        description: "Extensive exam preparation"
    },
    {
        icon: Monitor,
        title: "Flexible Learning",
        description: "Online & in-person options"
    }
];

export function WhyChooseClassesSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-green-100 text-green-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-green-900">
                        Why Choose Our Classes
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="flex flex-col items-center gap-4">
                                <Icon className="w-10 h-10 text-green-700" />
                                <h3 className="text-lg font-bold font-headline text-green-900">{feature.title}</h3>
                                <p className="text-green-800">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

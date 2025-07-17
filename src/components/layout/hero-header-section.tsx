import Image from "next/image";

type HeroHeaderSectionProps = {
    title: string;
    subtitle: string;
    imageUrl: string;
    imageHint: string;
}

export function HeroHeaderSection({ title, subtitle, imageUrl, imageHint }: HeroHeaderSectionProps) {
    return (
        <section className="relative w-full h-[50vh] flex items-center justify-center text-center text-white">
            <Image
                src={imageUrl}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="z-0"
                data-ai-hint={imageHint}
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="container relative z-20 px-4 md:px-6 mx-auto">
                <div className="space-y-4 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl max-w-[600px] mx-auto text-gray-200">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";

interface HeroProps {
    title?: string;
    subtitle?: string;
    backgroundImage?: string;
}

export const Hero = ({
    title = "MERLIN LABS",
    subtitle = "Consulting | Marketing | Solution",
    backgroundImage = "/introduction-background.svg",
}: HeroProps) => {
    return (
        <section className="flex min-h-[100dvh] flex-col items-center justify-center text-white relative overflow-hidden">
            {/* Hero Content */}
            <div className="z-20 text-center space-y-3 sm:space-y-4 md:space-y-5 px-4 max-w-4xl mx-auto">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight animate-fade-in-up">
                    {title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
                    {subtitle}
                </p>
            </div>

            {/* Background Image */}
            <Image
                className="absolute inset-0 object-cover scale-105 transition-transform duration-1000 ease-out"
                src={backgroundImage}
                alt="Merlin Labs Web3 Solutions Background"
                fill
                priority
                sizes="100vw"
                quality={90}
            />

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]" />
        </section>
    );
};

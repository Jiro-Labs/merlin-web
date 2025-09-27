import Image from "next/image";

interface HeroProps {
    title?: string;
    subtitle?: string;
    mobileBackground?: string;
    tabletBackground?: string;
    desktopBackground?: string;
}

export const Hero = ({
    title = "MERLIN LABS",
    subtitle = "Consulting | Marketing | Solution",
    mobileBackground = "/introduction-background-mobile.svg",
    tabletBackground = "/introduction-background-tablet.svg", 
    desktopBackground = "/introduction-background.svg",
}: HeroProps) => {
    return (
        <section className="flex h-[320px] sm:h-[537px] xl:min-h-[100dvh] flex-col items-center justify-center text-white relative overflow-hidden">
            {/* Hero Content */}
            <div className="z-20 text-center space-y-3 sm:space-y-4 md:space-y-5 px-4 max-w-4xl mx-auto">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight animate-fade-in-up">
                    {title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
                    {subtitle}
                </p>
            </div>

            {/* iPhone Background (0-480px) - Portrait & Small screens */}
            <Image
                className="absolute inset-0 object-cover object-center transition-transform duration-1000 ease-out sm:hidden"
                src={mobileBackground}
                alt="Merlin Labs Web3 Solutions Background - iPhone"
                fill
                priority
                sizes="100vw"
                quality={95}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center center'
                }}
            />

            {/* Tablet Background (640px-1279px) - iPad Mini, iPad Air, iPad Pro */}
            <Image
                className="absolute inset-0 object-cover object-center transition-transform duration-1000 ease-out hidden sm:block xl:hidden"
                src={tabletBackground}
                alt="Merlin Labs Web3 Solutions Background - iPad"
                fill
                priority
                sizes="100vw"
                quality={95}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center center'
                }}
            />

            {/* Desktop Background (1280px+) */}
            <Image
                className="absolute inset-0 object-cover object-center transition-transform duration-1000 ease-out hidden xl:block"
                src={desktopBackground}
                alt="Merlin Labs Web3 Solutions Background - Desktop"
                fill
                priority
                sizes="100vw"
                quality={95}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center center'
                }}
            />

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]" />
        </section>
    );
};

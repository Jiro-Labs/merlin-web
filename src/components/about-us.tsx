import Image from "next/image";
import { EventCarousel } from "./event-carousel";

interface AboutUsProps {
    title?: string;
    subtitle?: string;
    description?: string;
    eventCarouselSpeed?: number;
    eventCarouselChildren?: React.ReactNode;
}

export const AboutUs = ({
    title = "Company Profile",
    subtitle = "About Us",
    description = "Merlin Labs specializes in developing IT solutions and comprehensive digital marketing strategies specifically designed for the Web3 ecosystem.",
    eventCarouselSpeed = 2,
    eventCarouselChildren,
}: AboutUsProps) => {
    return (
        <div className="relative xl:min-h-[120vh] xl:overflow-visible">
            {/* Mobile Background (0-639px) */}
            <Image
                className="absolute inset-0 object-cover object-top transition-transform duration-1000 ease-out sm:hidden"
                src="/middle-mobile-background.svg"
                alt="Events and About Us Background - Mobile"
                fill
                priority
                sizes="100vw"
                quality={95}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center top'
                }}
            />

            {/* Tablet Background (640px-1279px) */}
            <Image
                className="absolute inset-0 object-cover object-top transition-transform duration-1000 ease-out hidden sm:block xl:hidden"
                src="/middle-tablet-background.svg"
                alt="Events and About Us Background - Tablet"
                fill
                priority
                sizes="100vw"
                quality={95}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center top'
                }}
            />

            {/* Desktop Background (1280px+) - Extended background for both sections */}
            <Image
                className="absolute inset-0 object-cover object-top transition-transform duration-1000 ease-out hidden xl:block"
                src="/middle-background.svg"
                alt="Events and About Us Background - Desktop"
                fill
                priority
                sizes="100vw"
                quality={95}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center top'
                }}
            />
            
            {/* Overlay for better content readability */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]" />

            {/* Content Container */}
            <div className="relative z-10">
                {/* Event Carousel Section */}
                {eventCarouselChildren && (
                    <EventCarousel speed={eventCarouselSpeed}>
                        {eventCarouselChildren}
                    </EventCarousel>
                )}

                {/* About Us Section */}
                <div className="px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-12 pb-6 sm:pb-8 lg:pb-10">
                    {/* Add 5% margin from left and right */}
                    <div className="mx-[5%]">
                        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 lg:gap-16 xl:gap-20">
                            {/* About Us Image Section - Left side on tablet and desktop */}
                            <div className="w-full md:w-1/2 flex justify-start">
                                <div className="relative w-[100%] md:w-full max-w-md md:max-w-full">
                                    <Image
                                        className="object-contain w-full h-auto"
                                        src="/about-us.svg"
                                        alt="About Merlin Labs - Company Overview"
                                        width={600}
                                        height={400}
                                        priority
                                        sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 50vw"
                                    />
                                </div>
                            </div>

                            {/* Text Content Section - Right side on tablet and desktop */}
                            <div className="w-full md:w-1/2 text-white text-left md:pt-4 lg:pt-8 xl:pt-12">
                                <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold">
                                    {title}
                                </p>
                                <p className="my-3 text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-bold">
                                    {subtitle}
                                </p>
                                <p className="my-4 sm:my-5 text-sm sm:text-base md:text-sm lg:text-base text-gray-400 leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

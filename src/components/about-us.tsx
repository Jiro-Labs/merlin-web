'use client';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import type { PropsWithChildren } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

// Event Carousel Components (merged from event-carousel.tsx)
export const EventCard = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <CarouselItem className="pl-0 mr-4 flex items-center flex-basis-2/7">
            <div className="w-full relative h-60 md:h-80 mx-auto group overflow-hidden rounded-lg">
                {/* Background Image - Grayscale (Silver) */}
                <Image
                    className="object-cover transition-transform duration-300 group-hover:scale-105 grayscale"
                    src={src}
                    alt={alt}
                    fill
                />
                {/* Purple Tint from Bottom - 35% height with custom color */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[35%] opacity-60"
                    style={{
                        background: `linear-gradient(to top, #37108A, transparent)`,
                    }}
                ></div>
            </div>
        </CarouselItem>
    );
};

export const EventCarousel = ({
    children,
    delay,
}: PropsWithChildren<{ delay: number }>) => {
    return (
        <Carousel
            opts={{ loop: true }}
            className="w-full"
            plugins={[
                Autoplay({
                    delay,
                }),
            ]}
        >
            <CarouselContent className="ml-0">{children}</CarouselContent>
        </Carousel>
    );
};

export const AboutUs = () => {
    return (
        <section
            className="relative pt-16 lg:pt-24 pb-2 lg:pb-4 overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/background-aboutus.svg')",
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/20 z-0"></div>

            {/* Event Carousel Section - Full Width */}
            <div className="relative z-10 w-full mb-16 lg:mb-20">
                <EventCarousel delay={2000}>
                    <EventCard src="/event/1.jpg" alt="" />
                    <EventCard src="/event/2.jpg" alt="" />
                    <EventCard src="/event/3.jpg" alt="" />
                    <EventCard src="/event/4.jpg" alt="" />
                </EventCarousel>
            </div>

            {/* About Us Content - 80% Width */}
            <div className="relative z-10 mx-auto w-full max-w-none lg:max-w-[80vw] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Left side - Statistics SVG */}
                    <div className="order-2 lg:order-1">
                        <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                            <Image
                                src="/aboutus.svg"
                                alt="Company Statistics - 35+ Best Team, 50+ Total Client, 8+ Years of Industry Experience"
                                width={500}
                                height={400}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="order-1 lg:order-2 text-center lg:text-left space-y-3 flex flex-col justify-start pt-4">
                        {/* Company Profile Label */}
                        <div>
                            <span className="text-white font-semibold tracking-wide uppercase text-xl sm:text-2xl lg:text-3xl">
                                Company Profile
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight">
                            About Us
                        </h2>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Merlin Labs specializes in developing IT solutions
                            and comprehensive digital marketing strategies
                            specifically designed for the Web3 ecosystem.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

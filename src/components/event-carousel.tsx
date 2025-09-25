"use client";

import Image from "next/image";
import type { PropsWithChildren } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

export const EventCard = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <CarouselItem className="pl-2 sm:pl-3 md:pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
            <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden group">
                <Image
                    className="object-contain w-full h-full filter grayscale brightness-75 transition-all duration-300"
                    src={src}
                    alt={alt}
                    fill
                />
                {/* Purple gradient overlay from bottom */}
                <div
                    className="h-2/5 absolute inset-0 top-auto bottom-5 bg-gradient-to-t from-purple-600/70 via-purple-500/30 to-transparent opacity-80 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(0.45deg, rgba(62,12,158,0.9) -20%, rgba(69,23,200,0.25), rgba(100,100,100,0) 70%)",
                    }}
                />
            </div>
        </CarouselItem>
    );
};

export const EventCarousel = ({
    children,
    speed,
}: PropsWithChildren<{ speed: number }>) => {
    return (
        <Carousel
            opts={{ loop: true }}
            className="bg-black px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6"
            plugins={[
                AutoScroll({
                    speed,
                }),
            ]}
        >
            <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
                {children}
            </CarouselContent>
        </Carousel>
    );
};

"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import type { PropsWithChildren } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export const EventCard = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <CarouselItem className="pl-4 flex items-center basis-1/2 md:basis-1/3">
            <div className="w-full relative h-100 mx-auto group overflow-hidden rounded-lg">
                {/* Background Image - Grayscale (Silver) */}
                <Image 
                    className="object-cover transition-transform duration-300 group-hover:scale-105 grayscale" 
                    src={src} 
                    alt={alt} 
                    fill 
                />
                {/* Purple Tint from Bottom - 35% height */}
                <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-purple-500/60 to-transparent"></div>
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
            className="bg-black p-5"
            plugins={[
                Autoplay({
                    delay,
                }),
            ]}
        >
            <CarouselContent className="-ml-4">{children}</CarouselContent>
        </Carousel>
    );
};

"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import type { PropsWithChildren } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export const EventCard = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <CarouselItem className="pl-2 sm:pl-3 md:pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
            <div className="isolate w-full aspect-[4/3] relative rounded-lg overflow-hidden group">
                <Image
                    className="object-cover filter grayscale brightness-75 transition-all duration-300"
                    src={src}
                    alt={alt}
                    fill
                />
                {/* Purple gradient overlay from bottom */}
                <div
                    className="rotate-180 h-full absolute inset-0 pointer-events-none z-10 mix-blend-multiply"
                    style={{
                        background:
                            "linear-gradient(180.45deg, rgba(62, 12, 158, 0.8) -19.95%, rgba(69, 23, 177, 0.65) 15.71%, rgba(255, 255, 255, 0) 105.69%)",
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
            className="bg-transparent px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 xl:pb-2"
            plugins={[
                AutoScroll({
                    speed,
                    stopOnInteraction: false,
                    stopOnMouseEnter: false,
                }),
            ]}
        >
            <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
                {children}
            </CarouselContent>
        </Carousel>
    );
};

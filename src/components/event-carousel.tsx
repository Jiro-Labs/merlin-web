"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { PropsWithChildren } from "react";
import Image from "next/image";

export const EventCard = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <CarouselItem className="pl-4 flex items-center basis-1/2 md:basis-1/3">
            <div className="w-full relative h-100 mx-auto">
                <Image className="object-contain" src={src} alt={alt} fill />
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

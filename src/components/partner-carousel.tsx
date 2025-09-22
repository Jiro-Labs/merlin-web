"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export const PartnerLogo = ({
    className,
    src,
    alt,
}: {
    className?: string;
    src: string;
    alt: string;
}) => {
    return (
        <CarouselItem className="pl-2 sm:pl-3 md:pl-4 flex items-center basis-1/3 sm:basis-1/4 lg:basis-1/6">
            <div className={cn("w-full relative h-8 sm:h-10 md:h-12 mx-auto", className)}>
                <Image className="object-contain" src={src} alt={alt} fill />
            </div>
        </CarouselItem>
    );
};

export const PartnerCarousel = ({
    children,
    delay,
}: PropsWithChildren<{ delay: number }>) => {
    return (
        <Carousel
            opts={{ loop: true }}
            className="bg-black px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6"
            plugins={[
                Autoplay({
                    delay,
                }),
            ]}
        >
            <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">{children}</CarouselContent>
        </Carousel>
    );
};

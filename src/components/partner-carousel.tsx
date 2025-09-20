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
        <CarouselItem className="pl-4 flex items-center basis-1/4 md:basis-1/6">
            <div className={cn("w-full relative h-8 mx-auto", className)}>
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
            className="p-5"
            style={{ backgroundColor: '#1F2326' }}
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

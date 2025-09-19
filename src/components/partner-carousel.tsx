"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const PartnerLogo = ({
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
            <div className={cn("w-full relative h-10 mx-auto", className)}>
                <Image className="object-contain" src={src} alt={alt} fill />
            </div>
        </CarouselItem>
    );
};

export const PartnerCarousel = () => {
    return (
        <Carousel
            opts={{ loop: true }}
            className="bg-black p-5"
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            <CarouselContent className="-ml-4">
                <PartnerLogo src="/partner/dsg.svg" alt="Dong Sai Gon" />
                <PartnerLogo src="/partner/bingx.png" alt="BingX" />
                <PartnerLogo src="/partner/okx.png" alt="OKX" />
                <PartnerLogo src="/partner/starknet.svg" alt="STARKNET" />
                <PartnerLogo src="/partner/sei.png" alt="sei" />
                <PartnerLogo src="/partner/sui.png" alt="Sui" />
                <PartnerLogo src="/partner/anomaly.svg" alt="ANOMALY" />
                <PartnerLogo
                    className="h-20"
                    src="/partner/oio-followin.png"
                    alt="OIO Followin"
                />
                <PartnerLogo
                    className="h-20"
                    src="/partner/dwf-labs.png"
                    alt="DWF LABS"
                />
            </CarouselContent>
        </Carousel>
    );
};

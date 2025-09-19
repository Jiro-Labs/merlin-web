"use server";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { EventCard, EventCarousel } from "@/components/event-carousel";
import { PartnerCarousel, PartnerLogo } from "@/components/partner-carousel";
import { Button } from "@/components/ui/button";

export default async function Home() {
    return (
        <div>
            <div className="flex min-h-svh flex-col items-center justify-center text-white">
                <div className="z-20 text-center space-y-5">
                    <p className="font-bold text-6xl">MERLIN LABS</p>
                    <p className="text-lg">Consulting | Marketing | Solution</p>
                </div>
                <Image
                    className="absolute object-cover"
                    src="/introduction-background.svg"
                    alt="background"
                    fill
                    priority
                />
            </div>

            <PartnerCarousel delay={1000}>
                <PartnerLogo src="/partner/dsg.svg" alt="Dong Sai Gon" />
                <PartnerLogo src="/partner/bingx.png" alt="BingX" />
                <PartnerLogo src="/partner/okx.png" alt="OKX" />
                <PartnerLogo src="/partner/starknet.svg" alt="STARKNET" />
                <PartnerLogo src="/partner/sei.png" alt="sei" />
                <PartnerLogo src="/partner/sui.png" alt="Sui" />
                <PartnerLogo src="/partner/anomaly.svg" alt="ANOMALY" />
                <PartnerLogo
                    className="h-16"
                    src="/partner/oio-followin.png"
                    alt="OIO Followin"
                />
                <PartnerLogo
                    className="h-16"
                    src="/partner/dwf-labs.png"
                    alt="DWF LABS"
                />
            </PartnerCarousel>

            <EventCarousel delay={2000}>
                <EventCard src="/event/1.jpg" alt="" />
                <EventCard src="/event/2.jpg" alt="" />
                <EventCard src="/event/3.jpg" alt="" />
                <EventCard src="/event/4.jpg" alt="" />
            </EventCarousel>

            <div className="my-8">
                <p className="text-center text-white font-bold text-4xl my-8">
                    WHY CHOOSE US?
                </p>
                <div className="w-full h-100 relative mx-auto">
                    <Image
                        className="object-contain"
                        src="/reason.svg"
                        alt="reason"
                        fill
                    />
                </div>
            </div>

            <div className="my-16 text-center">
                <p className="text-white font-bold text-4xl">
                    Transform Your Tech Vision Into Reality!
                </p>
                <p className="my-8 text-gray-500 text-xl">
                    Let’s innovate and succeed together
                </p>
                <Button className="max-auto !p-5 bg-violet-500 hover:bg-violet-700 rounded-full">
                    <p>Contact Us</p>
                    <ChevronRight />
                </Button>
            </div>
        </div>
    );
}

'use server';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { EventCard, EventCarousel } from '@/components/event-carousel';
import { PartnerCarousel, PartnerLogo } from '@/components/partner-carousel';
import { Button } from '@/components/ui/button';
import {
    Statistics,
    StatisticsDescription,
    StatisticsNumber,
} from '@/components/statistics';

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

            <div className="mx-10 my-10 md:flex justify-between">
                <div className="grid grid-cols-3 gap-5">
                    <div className="size-50 relative">
                        <Image
                            className="object-cover"
                            src="/busy-business-people-walking.jpg"
                            alt=""
                            fill
                        />
                    </div>
                    <Statistics src="/team.svg" alt="team" orientation="top">
                        <StatisticsNumber>35+</StatisticsNumber>
                        <StatisticsDescription>Best Team</StatisticsDescription>
                    </Statistics>
                    <div className="size-50 relative">
                        <Image
                            className="object-cover"
                            src="/close-up-businessman-with-digital-tablet.jpg"
                            alt=""
                            fill
                        />
                    </div>
                    <Statistics
                        src="/client.svg"
                        alt="client"
                        orientation="bottom"
                    >
                        <StatisticsNumber>50+</StatisticsNumber>
                        <StatisticsDescription>
                            Total Client
                        </StatisticsDescription>
                    </Statistics>
                    <div className="size-50 relative">
                        <Image
                            className="object-cover"
                            src="/businessman-with-tablet-after-closing-deal.jpg"
                            alt=""
                            fill
                        />
                    </div>
                    <Statistics
                        src="/experience.svg"
                        alt="experience"
                        orientation="bottom"
                    >
                        <StatisticsNumber>8+</StatisticsNumber>
                        <StatisticsDescription>
                            Years Of Industry Experience
                        </StatisticsDescription>
                    </Statistics>
                </div>
                <div className="max-w-160 text-white">
                    <p className="text-2xl font-bold">Company Profile</p>
                    <p className="my-3 text-4xl font-bold">About Us</p>
                    <p className="my-5 text-gray-500">
                        Merlin Labs specializes in developing IT solutions and
                        comprehensive digital marketing strategies specifically
                        designed for the Web3 ecosystem.
                    </p>
                </div>
            </div>

            <div className="mx-10 my-10 md:flex justify-between">
                <div className="grid grid-cols-3 gap-5">
                    <div className="size-50 relative">
                        <Image
                            className="object-cover"
                            src="/busy-business-people-walking.jpg"
                            alt=""
                            fill
                        />
                    </div>
                    <Statistics src="/team.svg" alt="team" orientation="top">
                        <StatisticsNumber>35+</StatisticsNumber>
                        <StatisticsDescription>Best Team</StatisticsDescription>
                    </Statistics>
                    <div className="size-50 relative">
                        <Image
                            className="object-cover"
                            src="/close-up-businessman-with-digital-tablet.jpg"
                            alt=""
                            fill
                        />
                    </div>
                    <Statistics
                        src="/client.svg"
                        alt="client"
                        orientation="bottom"
                    >
                        <StatisticsNumber>50+</StatisticsNumber>
                        <StatisticsDescription>
                            Total Client
                        </StatisticsDescription>
                    </Statistics>
                    <div className="size-50 relative">
                        <Image
                            className="object-cover"
                            src="/businessman-with-tablet-after-closing-deal.jpg"
                            alt=""
                            fill
                        />
                    </div>
                    <Statistics
                        src="/experience.svg"
                        alt="experience"
                        orientation="bottom"
                    >
                        <StatisticsNumber>8+</StatisticsNumber>
                        <StatisticsDescription>
                            Years Of Industry Experience
                        </StatisticsDescription>
                    </Statistics>
                </div>
                <div className="max-w-160 text-white">
                    <p className="text-2xl font-bold">Our services</p>
                    <p className="my-3 text-4xl font-bold">WHAT WE OFFER</p>
                    <p className="my-5 text-gray-500">
                        We deliver solutions to empower your business to grow
                        securely and efficiently. Our solutions are designed to
                        help you achieve results through advanced technology and
                        hands-on guidance.
                    </p>
                    <Button className="max-auto !p-5 bg-gray-500 hover:bg-violet-700 rounded-full">
                        <p>All Services</p>
                        <ChevronRight />
                    </Button>
                </div>
            </div>

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

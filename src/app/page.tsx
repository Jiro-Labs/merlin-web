"use server";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { AboutUs } from "@/components/about-us";
import { OurServices } from "@/components/our-services";
import { PartnerCarousel, PartnerLogo } from "@/components/partner-carousel";
import {
    Statistics,
    StatisticsDescription,
    StatisticsNumber,
} from "@/components/statistics";
import { Button } from "@/components/ui/button";

export default async function Home() {
    return (
        <div className="relative min-h-screen">
            <div className="relative z-10">
                <section
                    className="flex min-h-svh flex-col items-center justify-center text-white bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: "url('/introduction-background.svg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/20 z-0"></div>
                    <div className="relative z-20 text-center space-y-5 px-4">
                        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">
                            MERLIN LABS
                        </h1>
                        <p className="text-lg sm:text-xl">
                            Consulting | Marketing | Solution
                        </p>
                    </div>
                </section>

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

                <AboutUs />

                <OurServices />

                <section className="my-2 lg:my-4">
                    <div className="relative mx-auto w-full max-w-none lg:max-w-[80vw] px-4 sm:px-6 lg:px-8">
                        <h2 className="text-center text-white font-bold text-3xl lg:text-4xl mb-4 lg:mb-8">
                            WHY CHOOSE US?
                        </h2>
                        <div className="w-full h-48 sm:h-64 lg:h-80 relative mx-auto">
                            <Image
                                className="object-contain"
                                src="/reason.svg"
                                alt="reason"
                                fill
                                style={{ padding: 0, margin: 0 }}
                            />
                        </div>
                    </div>
                </section>

                <section className="my-16 text-center">
                    <h2 className="text-white font-bold text-4xl">
                        Transform Your Tech Vision Into Reality!
                    </h2>
                    <p className="my-8 text-gray-300 text-xl">
                        Let's innovate and succeed together
                    </p>
                    <Button className="max-auto !p-5 bg-violet-500 hover:bg-violet-700 rounded-full">
                        <a href="#">
                            <p>Contact Us</p>
                        </a>
                        <ChevronRight />
                    </Button>
                </section>
            </div>
        </div>
    );
}

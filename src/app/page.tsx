"use server";

import Image from "next/image";
import { PartnerCarousel } from "@/components/partner-carousel";

export default async function Home() {
    return (
        <div>
            <div className="flex min-h-svh flex-col items-center justify-center bg-black text-white">
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
            <PartnerCarousel />
        </div>
    );
}

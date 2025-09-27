import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface WhyChooseUsProps {
    title?: string;
    imageSrc?: string;
    imageAlt?: string;
    ctaTitle?: string;
    ctaSubtitle?: string;
    ctaButtonText?: string;
}

export const WhyChooseUs = ({
    title = "WHY CHOOSE US?",
    ctaTitle = "TRANSFORM YOUR TECH VISION INTO REALITY!",
    ctaSubtitle = "Let's innovate and succeed together",
    ctaButtonText = "Contact Us",
}: WhyChooseUsProps) => {
    return (
        <>
            <div className="hidden md:block my-4 md:my-8">
                <p className="text-center text-white font-bold text-2xl sm:text-3xl md:text-4xl my-4 md:my-8">
                    {title}
                </p>
                <div className="w-full relative mx-auto">
                    {/* biome-ignore lint/performance/noImgElement: use img instead of Image for responsive image */}
                    <img className="mx-auto" src="/reason.svg" alt="reason" />
                </div>
            </div>
            {/* biome-ignore lint/performance/noImgElement: use img instead of Image for responsive image */}
            <img
                className="md:hidden w-full"
                src="/reason-mobile.svg"
                alt="reason"
            />

            <div className="my-8 md:my-16 text-center">
                <p className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
                    {ctaTitle}
                </p>
                <p className="my-4 md:my-8 text-gray-500 text-lg sm:text-xl">
                    {ctaSubtitle}
                </p>
                <Link href="mailto:contact@merlin-labs.co">
                    <Button className="max-auto !p-5 bg-violet-500 hover:bg-violet-700 rounded-full">
                        <p>{ctaButtonText}</p>
                        <ChevronRight />
                    </Button>
                </Link>
            </div>
        </>
    );
};
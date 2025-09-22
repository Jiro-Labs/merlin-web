import Image from "next/image";
import { ChevronRight } from "lucide-react";
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
    imageSrc = "/reason.svg",
    imageAlt = "reason",
    ctaTitle = "Transform Your Tech Vision Into Reality!",
    ctaSubtitle = "Let's innovate and succeed together",
    ctaButtonText = "Contact Us"
}: WhyChooseUsProps) => {
    return (
        <>
            <div className="my-4 md:my-8">
                <p className="text-center text-white font-bold text-2xl sm:text-3xl md:text-4xl my-4 md:my-8">
                    {title}
                </p>
                <div className="w-full h-60 sm:h-80 md:h-100 relative mx-auto">
                    <Image
                        className="object-contain"
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                    />
                </div>
            </div>

            <div className="my-8 md:my-16 text-center">
                <p className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
                    {ctaTitle}
                </p>
                <p className="my-4 md:my-8 text-gray-500 text-lg sm:text-xl">
                    {ctaSubtitle}
                </p>
                <Button className="max-auto !p-5 bg-violet-500 hover:bg-violet-700 rounded-full">
                    <p>{ctaButtonText}</p>
                    <ChevronRight />
                </Button>
            </div>
        </>
    );
};
"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
    const [isWhyChooseUsVisible, setIsWhyChooseUsVisible] = useState(false);
    const [isCtaVisible, setIsCtaVisible] = useState(false);
    const whyChooseUsRef = useRef<HTMLDivElement>(null);
    const whyChooseUsMobileRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const whyChooseUsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsWhyChooseUsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '-50px',
            }
        );

        const whyChooseUsMobileObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsWhyChooseUsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '-50px',
            }
        );

        const ctaObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsCtaVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '-50px',
            }
        );

        if (whyChooseUsRef.current) {
            whyChooseUsObserver.observe(whyChooseUsRef.current);
        }

        if (whyChooseUsMobileRef.current) {
            whyChooseUsMobileObserver.observe(whyChooseUsMobileRef.current);
        }

        if (ctaRef.current) {
            ctaObserver.observe(ctaRef.current);
        }

        return () => {
            if (whyChooseUsRef.current) {
                whyChooseUsObserver.unobserve(whyChooseUsRef.current);
            }
            if (whyChooseUsMobileRef.current) {
                whyChooseUsMobileObserver.unobserve(whyChooseUsMobileRef.current);
            }
            if (ctaRef.current) {
                ctaObserver.unobserve(ctaRef.current);
            }
        };
    }, []);
    return (
        <>
            <div ref={whyChooseUsRef} className={`hidden md:block my-4 md:my-8 transition-all duration-1000 ease-out ${
                isWhyChooseUsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
            }`}>
                <p className="text-center text-white font-bold text-2xl sm:text-3xl md:text-4xl my-4 md:my-8">
                    {title}
                </p>
                <div className="w-full relative mx-auto">
                    {/* biome-ignore lint/performance/noImgElement: use img instead of Image for responsive image */}
                    <img className="mx-auto" src="/reason.svg" alt="reason" />
                </div>
            </div>
            {/* biome-ignore lint/performance/noImgElement: use img instead of Image for responsive image */}
            <div ref={whyChooseUsMobileRef} className={`md:hidden transition-all duration-1000 ease-out ${
                isWhyChooseUsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
            }`}>
                <img
                    className="w-full"
                    src="/reason-mobile.svg"
                    alt="reason"
                />
            </div>

            <div ref={ctaRef} className={`my-8 md:my-16 text-center transition-all duration-1000 ease-out ${
                isCtaVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: isCtaVisible ? '200ms' : '0ms' }}>
                <p className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
                    {ctaTitle}
                </p>
                <p className="my-4 md:my-8 text-gray-500 text-lg sm:text-xl">
                    {ctaSubtitle}
                </p>
                <Link href="https://t.me/bebunangqua" target="_blank" rel="noopener noreferrer">
                    <Button className="max-auto !p-5 bg-violet-500 hover:bg-violet-700 rounded-full">
                        <p>{ctaButtonText}</p>
                        <ChevronRight />
                    </Button>
                </Link>
            </div>
        </>
    );
};
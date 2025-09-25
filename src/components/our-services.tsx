import { ChevronRight } from "lucide-react";
import { FeatureCard, FeatureCardTitle } from "@/components/feature-card";
import { Button } from "@/components/ui/button";

interface OurServicesProps {
    title?: string;
    subtitle?: string;
    description?: string;
    buttonText?: string;
}

export const OurServices = ({
    title = "Our services",
    subtitle = "WHAT WE OFFER",
    description = "We deliver solutions to empower your business to grow securely and efficiently. Our solutions are designed to help you achieve results through advanced technology and hands-on guidance.",
    buttonText = "All Services",
}: OurServicesProps) => {
    return (
        <div className="px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20">
            {/* Add 5% margin from left and right to match About Us */}
            <div className="mx-[5%]">
                <div className="flex flex-col xl:flex-row xl:justify-between gap-8 xl:gap-12">
                    {/* Services Grid */}
                    <div className="w-full xl:flex-1">
                        {/* Mobile: Single column, Tablet: 2 columns full width, Desktop: 2 columns with staggered layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 place-items-start md:place-items-stretch">
                            {/* Column 1 - Tablet: Lower, Desktop: Higher */}
                            <div className="flex flex-col gap-6 lg:gap-5 md:mt-10 lg:mt-20 md:pr-1 lg:pr-1 w-full max-w-sm md:max-w-none items-start md:items-stretch">
                                <FeatureCard
                                    src="/infrastructure.svg"
                                    alt="infrastructure"
                                    className="w-[85%] md:w-full max-w-xs md:max-w-sm lg:max-w-xs xl:max-w-sm"
                                >
                                    <div className="text-left">
                                        <FeatureCardTitle>
                                            Infrastructure Supply
                                        </FeatureCardTitle>
                                        <ul className="list-disc pl-5 text-base sm:text-base text-left">
                                            <li>Proxy & MMO Supplier</li>
                                            <li>Retro/Airdrop Services</li>
                                            <li>Cloud/Hardware Services</li>
                                            <li>Security/Audit Services</li>
                                        </ul>
                                    </div>
                                </FeatureCard>
                                <FeatureCard
                                    src="/marketing-service.svg"
                                    alt="Marketing Services"
                                    className="w-[85%] md:w-full max-w-xs md:max-w-sm lg:max-w-xs xl:max-w-sm"
                                >
                                    <div className="text-left">
                                        <FeatureCardTitle>
                                            Marketing Services
                                        </FeatureCardTitle>
                                        <ul className="list-disc pl-5 text-base sm:text-base text-left">
                                            <li>Agency Policy/Reseller</li>
                                            <li>Packaged Services</li>
                                            <li>
                                                Performance-Based User Gathering
                                            </li>
                                            <li>Premium Dealroom</li>
                                        </ul>
                                    </div>
                                </FeatureCard>
                            </div>

                            {/* Column 2 - Tablet: Higher, Desktop: Normal */}
                            <div className="flex flex-col gap-6 lg:gap-5 lg:mt-0 md:pl-1 lg:pl-1 w-full max-w-sm md:max-w-none items-start md:items-stretch">
                                <FeatureCard
                                    src="/it-consulting.svg"
                                    alt="it consulting"
                                    className="w-[85%] md:w-full max-w-xs md:max-w-sm lg:max-w-xs xl:max-w-sm"
                                >
                                    <div className="text-left">
                                        <FeatureCardTitle>
                                            IT consulting
                                        </FeatureCardTitle>
                                        <p className="text-base sm:text-base">
                                            Strategic consultation and hands-on
                                            deployment from ideation to
                                            execution.
                                        </p>
                                    </div>
                                </FeatureCard>
                                <FeatureCard
                                    src="/listing-support.svg"
                                    alt="listing support"
                                    className="w-[85%] md:w-full max-w-xs md:max-w-sm lg:max-w-xs xl:max-w-sm"
                                >
                                    <div className="text-left">
                                        <FeatureCardTitle>
                                            Listing Supports
                                        </FeatureCardTitle>
                                        <p className="text-base sm:text-base">
                                            We connect with 600+ Web3 VCs,
                                            including OKX Ventures, Paradigm,
                                            and Spartan Group,…
                                        </p>
                                    </div>
                                </FeatureCard>
                            </div>
                        </div>
                    </div>

                    {/* Text Content Section */}
                    <div className="w-full xl:max-w-md 2xl:max-w-lg xl:mt-60 text-white text-left">
                        <p className="text-xl sm:text-2xl xl:text-2xl font-bold">
                            {title}
                        </p>
                        <p className="my-3 text-2xl sm:text-3xl xl:text-4xl font-bold">
                            {subtitle}
                        </p>
                        <p className="my-4 sm:my-5 text-sm sm:text-base xl:text-base text-gray-500 leading-relaxed">
                            {description}
                        </p>
                        <Button className="!p-4 sm:!p-5 bg-gray-500 hover:bg-violet-700 rounded-full">
                            <p className="text-sm sm:text-base">{buttonText}</p>
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

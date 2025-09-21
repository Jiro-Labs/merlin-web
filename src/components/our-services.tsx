import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const OurServices = () => {
    return (
        <section className="relative pt-2 lg:pt-4 pb-16 lg:pb-24 overflow-hidden">
            <div className="relative mx-auto w-full max-w-none lg:max-w-[80vw] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left side - Our Services SVG */}
                    <div className="order-2 lg:order-1">
                        <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                            <Image
                                src="/our-service.svg"
                                alt="Our Services - Infrastructure Supply, IT Consulting, Listing Supports, Marketing Services"
                                width={600}
                                height={500}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="order-1 lg:order-2 text-center lg:text-left space-y-3 flex flex-col justify-center">
                        {/* Our Services Label */}
                        <div>
                            <span className="text-white font-semibold tracking-wide uppercase text-xl sm:text-2xl lg:text-3xl">
                                Our services
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight">
                            WHAT WE OFFER
                        </h2>

                        {/* Description */}
                        <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            We deliver solutions to empower your business to
                            grow securely and efficiently. Our solutions are
                            designed to help you achieve results through
                            advanced technology and hands-on guidance.
                        </p>

                        {/* All Services Button */}
                        <div className="flex justify-center lg:justify-start pt-2">
                            <Link
                                href="#all-services"
                                className="inline-flex items-center px-6 py-3 lg:px-8 lg:py-4 bg-gray-600/50 hover:bg-gray-500/50 text-white rounded-full font-medium transition-all duration-300 border border-gray-500/50 hover:border-gray-400/50 text-sm lg:text-base"
                            >
                                All Services
                                <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

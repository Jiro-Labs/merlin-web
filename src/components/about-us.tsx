import Image from "next/image";

interface AboutUsProps {
    title?: string;
    subtitle?: string;
    description?: string;
}

export const AboutUs = ({
    title = "Company Profile",
    subtitle = "About Us",
    description = "Merlin Labs specializes in developing IT solutions and comprehensive digital marketing strategies specifically designed for the Web3 ecosystem.",
}: AboutUsProps) => {
    return (
        <div className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 pb-6 sm:pb-8 lg:pb-10">
            {/* Add 5% margin from left and right */}
            <div className="mx-[5%]">
                <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 lg:gap-16 xl:gap-20">
                    {/* About Us Image Section - Left side on tablet and desktop */}
                    <div className="w-full md:w-1/2 flex justify-start">
                        <div className="relative w-[100%] md:w-full max-w-md md:max-w-full">
                            <Image
                                className="object-contain w-full h-auto"
                                src="/about-us.svg"
                                alt="About Merlin Labs - Company Overview"
                                width={600}
                                height={400}
                                priority
                                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Text Content Section - Right side on tablet and desktop */}
                    <div className="w-full md:w-1/2 text-white text-left md:pt-4 lg:pt-8 xl:pt-12">
                        <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold">
                            {title}
                        </p>
                        <p className="my-3 text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-bold">
                            {subtitle}
                        </p>
                        <p className="my-4 sm:my-5 text-sm sm:text-base md:text-sm lg:text-base text-gray-400 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
